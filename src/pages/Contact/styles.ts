import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Contact = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 17vh;
    min-height: 100vh;
    overflow-x: hidden;

    @media (max-width: 767px) {
        justify-content: center;
        padding-top: 8vh;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: .5rem;
        margin-bottom: 2rem;
        text-decoration-color: transparent;
        width: fit-content;
        
        svg {
            font-size: 26px;
            color: ${variaveis.three};
        }
    }
    
    a {
        display: flex;
        flex-direction: row;
        gap: .5rem;
        margin-bottom: 2rem;
        text-decoration-color: transparent;
        width: fit-content;
        
        svg {
            font-size: 26px;
            color: ${variaveis.three};
        }

        &:hover {
            text-decoration-color: ${variaveis.three};
        }
    }
`

export const Title = styled.div`
    margin-bottom: 4rem;

    @media (max-width: 767px) {
        padding-top: 33vh;
    }
`

export const Imagem = styled.img`
    max-height: 70vh;

    @media (max-width: 767px) {
        display: none;
    }
`

export const Parag = styled.p`
    max-width: 47vw;
    text-align: end;
    font-size: 20px;
    color: ${variaveis.three};
    line-height: 24px;
    margin-bottom: 8px;

    @media (max-width: 767px) {
        display: none;
    }
`
