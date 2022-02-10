import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};
  
  html {
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%; /* 62.5% of 16px = 10px */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url('./fondo8.jpg') no-repeat center center fixed;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100vh;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--aquamarine);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
  }

  `;

export default GlobalStyle;
