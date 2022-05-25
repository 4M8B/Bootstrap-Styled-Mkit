import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Orbitron:500|Nunito:600|Alegreya+Sans+SC:700');
    height: auto;
    width: 100vw;
    padding-bottom: 50px;
    margin: 0;
    padding: 0;
    background: #AAAAAA;
    text-align: center;
    font-size: 100%;
    overflow-x: hidden;
  }
`;