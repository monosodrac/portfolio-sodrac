import Frase from '../../components/Phrase';
import Sidebar from '../Sidebar';
import Sobre from '../Sobre';
import * as S from './styles';

const Hero = () => {
    return (
        <>
            <S.AnimatedText>
                <span></span>
            </S.AnimatedText>
            <S.Book>
                <Frase />
            </S.Book>
            <S.Start>
                <Sidebar />
                <main>
                    <Sobre />
                </main>
            </S.Start>
        </>
    );
};

export default Hero;