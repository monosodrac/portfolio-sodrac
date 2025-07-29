import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cabecalho = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: transparent;
`

export const AreaCabecalho = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    background-color: transparent;
`

export const Lista = styled.ul`
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

export const ListaLinks = styled(Link)`
    padding: 1rem;
    font-size: 1rem;
    font-weight: bolder;
    text-decoration: none;
    color: #fff;
    border-bottom: 1px solid transparent;
    background-color: transparent;

    &:hover {
        border-color: #fff;
    }
`