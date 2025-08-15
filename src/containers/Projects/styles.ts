import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Cards = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 5vw;
    padding: 0;
    list-style: none;
    overflow-x: hidden;

    div {
        height: 100vh;

        @media (max-width: 575px) {
            height: fit-content;
            margin-bottom: 2rem;
        }
    }
    
    @media (max-width: 767px) {
        padding-top: 20vh;
        border-color: ${variaveis.three};
    }
`

export const Link = styled.a`
    margin: 0;
    padding: 0;
    background-color: ${variaveis.primary};
    text-decoration: none;
`

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 5px;
    max-height: 80vh;
    min-width: 35vw;
    
    @media (max-width: 767px) {
        border-color: ${variaveis.three};
    }

    &:hover {
        border-color: ${variaveis.three};
    }
`

export const Image = styled.img`
    min-height: auto;
    max-width: 32vw;

    @media (max-width: 767px) {
        min-width: 70vw;
    }
`

export const Desc = styled.div`
    text-align: center;
    width: 80%;
    margin: 1rem 0;
`
