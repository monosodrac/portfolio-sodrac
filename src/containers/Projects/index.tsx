import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

import { project } from "../../assets";
import * as S from "./styles";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";

const ProjectsContainer = () => {
    useEffect(() => {
        AOS.init({});
    }, []);

    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault(); // Impede o scroll padrão
            const direction = e.deltaY > 0 ? 1 : -1; // 1 = descer, -1 = subir

            setCurrentPage((prev) => {
                const totalSections = Math.ceil(document.body.scrollHeight / window.innerHeight);
                let nextPage = prev + direction;

                // Impede passar do início ou final
                if (nextPage < 0) nextPage = 0;
                if (nextPage >= totalSections) nextPage = totalSections - 1;

                // Faz o scroll suave para a nova "página"
                window.scrollTo({
                    top: nextPage * window.innerHeight,
                    behavior: "smooth",
                });

                return nextPage;
            });
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <S.Cards>
            {project.map((item, index) => (
                <div
                    style={{ height: "100vh" }}
                    data-aos={item.id % 2 !== 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="800"
                >
                    <S.Link
                        key={index}
                        title={item.title}
                        href={item.link}
                        target="_blank"

                    >
                        <S.Card>
                            <S.Image src={item.img} alt={item.title} />
                            <S.Desc>
                                <Titulo fontSize={'24'}>{item.title}</Titulo>
                                <Paragrafo tipo="principal">{item.desc}</Paragrafo>
                            </S.Desc>
                        </S.Card>
                    </S.Link>
                </div>
            ))}
        </S.Cards>
    )
};

export default ProjectsContainer;