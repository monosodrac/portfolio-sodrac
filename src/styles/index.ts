import styled, { createGlobalStyle } from 'styled-components';

import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Roboto, sans-serif;
        list-style:none;
        background-color: #000;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    background-color: transparent;

    ul {
        margin: 0;
        padding: 0;
    }
`

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    min-height: 100vh;
`

export default EstiloGlobal