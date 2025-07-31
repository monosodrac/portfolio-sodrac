import styled from "styled-components";
import { Link } from "react-router-dom";
import variaveis from "../../styles/variaveis";

export const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 5rem;
    background-color: #000;
    box-shadow: 0px 0px 20px 20px #000000;
    z-index: 999;
`

export const AreaHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 5rem;
    background-color: transparent;
`

export const Title = styled(Link)`
    border-radius: 50%;
`

export const List = styled.ul`
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-align: center;
    list-style: none;
    background-color: transparent;

    li {
        margin: 0;
        padding: 0;
        background-color: transparent;
    }
`

export const ListLinks = styled(Link)`
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: ${variaveis.three};
    border-bottom: 1px solid transparent;
    background-color: transparent;

    &:hover {
        border-color: ${variaveis.three};
    }
`