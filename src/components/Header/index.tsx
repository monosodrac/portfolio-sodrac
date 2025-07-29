import * as S from './styles'
import { Container } from "../../styles";

export default function Header() {
    return (
        <>
            <S.Header>
                <S.AreaHeader>
                    <Container>
                        <S.Title to="/">
                            MONOSODRAC
                        </S.Title>
                        <S.List>
                            <li>
                                <S.ListLinks to="/">
                                    Projetos
                                </S.ListLinks>
                            </li>
                            <li>
                                <S.ListLinks to="/">
                                    Experiência
                                </S.ListLinks>
                            </li>
                            <li>
                                <S.ListLinks to="/">
                                    Formação
                                </S.ListLinks>
                            </li>
                        </S.List>
                    </Container>
                </S.AreaHeader>
            </S.Header>
        </>
    );
};