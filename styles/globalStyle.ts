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
    background: #021321;
    /* background-color: #021321; */
    /* background: url('./fondo9.jpg') no-repeat center center fixed; 
    backdrop-filter: blur(4px);
    backdrop-filter: brightness(60%);
    backdrop-filter: opacity(40%);
    background-size: cover;  */
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

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: none;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--aqua);
    }
  }

  `;

export default GlobalStyle;
