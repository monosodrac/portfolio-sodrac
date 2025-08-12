import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { keyframes } from "styled-components";

export const Book = styled.div`
    position: absolute;
    top: 70%;
    background-color: transparent;
`

export const Start = styled.div`
    padding-top: 7rem;
    min-height: 100vh;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 56px;

    @media (max-width: 1060px) {
        display: block;
        padding-top: 35vh;
        max-width: 80%;
    }
`

const words = keyframes`
    0%, 20% {
        content: "Olá! meu nome é Mono";
    }
    21%, 40% {
        content: "Bem-vindo ao meu portfólio pessoal";
    }
    41%, 60% {
        content: "Navegue pelas abas no cabeçalho 🚀";
    }
    61%, 80% {
        content: "Pegue um café ☕️";
    }
    81%, 100% {
        content: "...3... ...2... ...1...";
    }
`
const cursor = keyframes`
    0% {
        border-left: 28px solid ${variaveis.primary};
    }
`
const write = keyframes`
    10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95% {
        width: 0;
    } 
    5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85% {
        width: calc(100% + 4px);
    }
`
export const AnimatedText = styled.div`
    position: absolute;
    top: 55%;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    
    @media (max-width: 767px) {
        top: 85%;
        font-size: 1rem;
    }

    span {
        position: relative;
        background-color: transparent;
        
        &::before {
            content: "";
            color: ${variaveis.three};
            animation: ${words} 20s infinite;
        }
        
        &::after {
            content: "";
            position: absolute;
            height: 125%;
            border-left: 28px solid #ddd;
            right: -32px;
            opacity: 1;
            animation: ${cursor} .8s infinite, ${write} 20s steps(15) infinite;
            width: calc(100% + 4px);
            background-color: ${variaveis.primary};
        }
    }
`
