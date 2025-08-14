import { useMediaQuery } from "react-responsive";

import * as S from './styles'
import Avatar from '../../components/Avatar';

export default function Header() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return isMobile ? (
        <>
            <S.Header>
                <S.AreaHeader>
                    <S.ContainerHeader>
                        <S.List>
                            <li>
                                <S.ListLinks to="/">
                                    Home
                                </S.ListLinks>
                            </li>
                            <li>
                                <S.ListLinks to="/projetos">
                                    Projetos
                                </S.ListLinks>
                            </li>
                            <li>
                                <S.ListLinks to="/formacao">
                                    Formação
                                </S.ListLinks>
                            </li>
                            <li>
                                <S.ListLinks to="/contato">
                                    Contato
                                </S.ListLinks>
                            </li>
                        </S.List>
                    </S.ContainerHeader>
                </S.AreaHeader>
            </S.Header>
        </>
    ) : (
        <>
            <S.Header>
                <S.AreaHeader>
                    <S.ContainerHeader>
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
                                <S.ListLinks to="/formacao">
                                    Formação
                                </S.ListLinks>
                            </li>
                            <li>
                                <S.ListLinks to="/contato">
                                    Contato
                                </S.ListLinks>
                            </li>
                        </S.List>
                    </S.ContainerHeader>
                </S.AreaHeader>
            </S.Header>
        </>

    );
};