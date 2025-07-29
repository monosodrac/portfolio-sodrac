import Header from "../../components/Header";
import TelaInicio from "../../containers/Home";
import { MainContainer } from "../../styles";

const Inicio = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <TelaInicio />
            </MainContainer>
        </>
    );
};

export default Inicio;