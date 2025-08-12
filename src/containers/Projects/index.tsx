import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { project } from "../../assets";
import * as S from "./styles";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";

const ProjectsContainer = () => {
    useEffect(() => {
        AOS.init({});
    }, []);

    return (
    <S.Cards>
        {project.map((item, index) => (
            <S.Link key={index} target="_blank" href={item.link} data-aos="zoom-out" data-aos-duration="1000">
                <S.Card>
                    <S.Image src={item.img} alt={item.title} />
                    <S.Desc>
                        <Titulo fontSize={'24'}>{item.title}</Titulo>
                        <Paragrafo tipo="principal">{item.desc}</Paragrafo>
                    </S.Desc>
                </S.Card>
            </S.Link>
        ))}
    </S.Cards>
)};

export default ProjectsContainer;