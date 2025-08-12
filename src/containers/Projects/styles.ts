import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Cards = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10rem;
    padding: 0;
    margin: 0 auto;
    max-width: 994px;
    list-style: none;
    
    @media (max-width: 1800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 1024px) {
        display: block;
    }
    
    @media (max-width: 767px) {
        padding-top: 20vh;
        border-color: ${variaveis.three};
        overflow-x: hidden;
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
    margin: 0 auto;
    border: 1px solid transparent;
    border-radius: 5px;
    
    @media (max-width: 767px) {
        border-color: ${variaveis.three};
    }

    &:hover {
        border-color: ${variaveis.three};
    }
`

export const Image = styled.img`
    height: 15rem;

    @media (max-width: 767px) {
        width: 100%;
    }
`

export const Desc = styled.div`
    text-align: center;
    width: 80%;
    margin: 1rem 0;
`
