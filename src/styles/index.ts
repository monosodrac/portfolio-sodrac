import styled, { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Cutive Mono", monospace;
        list-style:none;
        background-color: #000;
        scrollbar-color: ${variaveis.three} ${variaveis.primary};
        scrollbar-width: thin;
    }
`

export const BookContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    min-height: 100vh;
`

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    min-height: 100vh;
`

export default EstiloGlobal