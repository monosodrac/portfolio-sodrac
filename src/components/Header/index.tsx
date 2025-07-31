import * as S from './styles'
import { Container } from "../../styles";
import Avatar from '../Avatar';

export default function Header() {
    return (
        <>
            <S.Header>
                <S.AreaHeader>
                    <Container>
                        <S.Title to="/">
                            <Avatar />
                        </S.Title>
                        <S.List>
                            <li>
                                <S.ListLinks to="/projetos">
                                    Projetos
                                </S.ListLinks>
                            </li>
                            <li>
                                <S.ListLinks to="/experiencia">
                                    Experiência
                                </S.ListLinks>
                            </li>
                            <li>
                                <S.ListLinks to="/formacao">
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