import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

import { projects } from "../../assets";
import * as S from "./styles";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";

const ProjectsContainer = () => {
    useEffect(() => {
        AOS.init({});
    }, []);

    const [, setCurrentPage] = useState<number>(0);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isScrolling) return; // Impede múltiplos scrolls seguidos
            e.preventDefault();

            const direction = e.deltaY > 0 ? 1 : -1;

            setCurrentPage((prev) => {
                const totalSections = Math.ceil(document.body.scrollHeight / window.innerHeight);
                let nextPage = prev + direction;

                if (nextPage < 0) nextPage = 0;
                if (nextPage >= totalSections) nextPage = totalSections - 1;

                // Ativa travamento temporário do scroll
                setIsScrolling(true);
                setTimeout(() => setIsScrolling(false), 800);

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
    }, [isScrolling]);

    return (
        <S.Cards>
            {projects.map((item, index) => (
                <div
                    data-aos={item.id % 2 !== 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="800"
                    key={index}
                >
                    <S.Link
                        title={item.title}
                        href={item.link}
                        target="_blank"

                    >
                        <S.Card>
                            <S.Image src={item.img} alt={item.title} />
                            <S.Desc>
                                <Titulo textAlign={'center'} fontSize={'24'}>{item.title}</Titulo>
                                <Paragrafo textAlign={'center'} tipo="principal">{item.desc}</Paragrafo>
                            </S.Desc>
                        </S.Card>
                    </S.Link>
                </div>
            ))}
        </S.Cards>
    )
};

export default ProjectsContainer;