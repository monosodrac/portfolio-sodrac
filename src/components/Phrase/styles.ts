import styled from "styled-components";

export const Frases = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`

export const AreaTexto = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    span {
        border-radius: 25%;
    }
`

export const Texto = styled.span`
    margin: -.6rem 0;
    border-radius: 0 0 30% 30%;
    text-align: center;
    max-width: 100%;
    line-height: 2rem;
    font-size: 1rem;
    background-color: #fff;
    color: #fff;
    filter: blur(5px);
    cursor: default;
    
`