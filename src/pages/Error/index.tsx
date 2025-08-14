import Titulo from "../../components/Titulo";
import * as S from "./styles";

const ErrorPage = () => (
    <S.ErrorP>
        <Titulo textAlign={'center'}>
            Sinto muito, mas o certificado ainda não foi entregue pela instituição.
        </Titulo>
    </S.ErrorP>
);

export default ErrorPage;