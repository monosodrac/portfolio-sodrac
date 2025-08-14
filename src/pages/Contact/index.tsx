import { CiLinkedin, CiInstagram, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { Contact as Cont, Title, Parag } from "./styles";

const Contact = () => (
    <Cont>
        <section>
            <Title>
                <Titulo>
                    Redes Sociais:
                </Titulo>
            </Title>
            <a
                href="https://www.linkedin.com/in/monosodrac/"
                target="_blank"
            >
                <CiLinkedin />
                <Paragrafo tipo="principal">
                    LinkedIn
                </Paragrafo>
            </a>
            <a
                href="https://github.com/monosodrac"
                target="_blank"
            >
                <FaGithub />
                <Paragrafo tipo="principal">
                    Github
                </Paragrafo>
            </a>
            <a
                href="https://www.instagram.com/monosodrac"
                target="_blank"
            >
                <CiInstagram />
                <Paragrafo tipo="principal">
                    Instagram
                </Paragrafo>
            </a>
            <div>
                <CiMail />
                <Paragrafo tipo="principal">
                    monosodrac@gmail.com
                </Paragrafo>
            </div>
        </section>
        <Parag>
            01001100 01101111 01100111 01101001 01100011 00100000 01110111 01101001 01101100 01101100 00100000 01100111 01100101 01110100 00100000 01111001 01101111 01110101 00100000 01100110 01110010 01101111 01101101 00100000 01000001 00100000 01110100 01101111 00100000 01000010 00101110 00100000 01001001 01101101 01100001 01100111 01101001 01101110 01100001 01110100 01101001 01101111 01101110 00100000 01110111 01101001 01101100 01101100 00100000 01110100 01100001 01101011 01100101 00100000 01111001 01101111 01110101 00100000 01100101 01110110 01100101 01110010 01111001 01110111 01101000 01100101 01110010 01100101 00101110 00001010 00101101 01000001 01101100 01100010 01100101 01110010 01110100 00100000 01000101 01101001 01101110 01110011 01110100 01100101 01101001 01101110
        </Parag>
    </Cont>
);

export default Contact;