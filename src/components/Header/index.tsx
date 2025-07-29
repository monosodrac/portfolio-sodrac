import * as S from './styles'
import { Container } from "../../styles";

export default function Header() {
    return (
        <>
            <S.Cabecalho>
                <S.AreaCabecalho>
                    <Container>
                        <S.ListaLinks to="/">
                            MONOSODRAC
                        </S.ListaLinks>
                        <S.Lista>
                            <li>
                                <S.ListaLinks to="/">
                                    Projetos
                                </S.ListaLinks>
                            </li>
                            <li>
                                <S.ListaLinks to="/">
                                    Experiência
                                </S.ListaLinks>
                            </li>
                            <li>
                                <S.ListaLinks to="/">
                                    Formação
                                </S.ListaLinks>
                            </li>
                        </S.Lista>
                    </Container>
                </S.AreaCabecalho>
            </S.Cabecalho>
        </>
    );
};