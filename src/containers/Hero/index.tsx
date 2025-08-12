import { useMediaQuery } from "react-responsive";

import Frase from '../../components/Phrase';
import Sidebar from '../../components/Sidebar';
import Sobre from '../../components/Sobre';
import * as S from './styles';

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 1060 });

    return isMobile ? (
        <>
            <S.Start>
                <Sidebar />
                <Sobre />
            </S.Start>
        </>
    ) : (
        <>
            <S.AnimatedText>
                <span></span>
            </S.AnimatedText>
            <S.Book>
                <Frase />
            </S.Book>
            <S.Start>
                <Sidebar />
                <Sobre />
            </S.Start>
        </>
    );
};

export default Hero;