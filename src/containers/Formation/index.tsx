import * as S from "./styles";

import { Certificates } from "../../assets";
import Titulo from "../../components/Titulo";

import Preview from '../../assets/imgs/preview-pattern.png'

const FormationContainer = () => (
    <>
        {Certificates.map((item, index) => {
            return (
                <S.Card key={index}>
                    <S.CardLink
                        href={item.link}
                        target="_blank"
                    >
                        <S.Image
                            src={item.img == 'indisponível'
                                ?
                                Preview
                                :
                                item.img
                            }
                            alt={`Pré-visualização ou certificado ainda não disponível`}
                        />
                        <Titulo>{item.title}</Titulo>
                    </S.CardLink>
                </S.Card>
            );
        })}
    </>
);

export default FormationContainer;