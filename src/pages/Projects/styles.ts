import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Projects = styled.div`
    padding-top: 6rem;
    min-height: 100vh;
    width: 100%;
    background-color: ${variaveis.secondary};
`

export const Start = styled.div`
    padding-top: 7rem;
    min-height: 100vh;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 128px auto;
    column-gap: 56px;

    @media (max-width: 768px) {
        max-width: 80%;
        display: block;
    }
`