import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Link = styled.a`
    text-decoration: none;
`

export const Cards = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
    margin: 0 auto;
    max-width: 994px;
    
    @media (max-width: 1024px) {
        display: block;
        max-width: 26rem;
    }
`

export const Card = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover {
        border-color: ${variaveis.three};
        margin: 0 auto;
    }
`

export const Image = styled.img`
    height: 15rem;
`

export const Desc = styled.div`
    text-align: center;
    width: 80%;
    margin: 1rem 0;
`
