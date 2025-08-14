import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
    margin-bottom: 5rem;
    background-color: ${variaveis.two};
    overflow-x: hidden;
`

export const CardLink = styled.a`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
    border-top: 1px solid ${variaveis.three};
    border-bottom: 1px solid ${variaveis.three};
    width: 100%;
    text-decoration: none;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const Image = styled.img`
    border: 1px solid ${variaveis.three};
    min-height: 32vh;
    max-width: 32vw;
    text-align: center;

    @media (max-width: 767px) {
        min-width: 70vw;
    }
`