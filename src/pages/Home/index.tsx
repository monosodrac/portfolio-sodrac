import Header from "../../components/Header";
import TelaInicio from "../../containers/Hero";
import Projects from "../../containers/Projects";
import { MainContainer } from "../../styles";

const Inicio = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <TelaInicio />
                <Projects />
            </MainContainer>
        </>
    );
};

export default Inicio;