import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};
  
  html {
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%; /* 62.5% of 16px = 10px */
    background-color: var(--black-pearl);

    @media (max-width: 768px) {
      font-size: 50%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--prussian-blue) var(--light-black-pearl);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--light-black-pearl);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--prussian-blue);
    border: 3px solid var(--light-black-pearl);
    border-radius: 10px;
  }



  body {
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

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
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
      color: var(--light-sky-blue);
    }
  }

  `;

export default GlobalStyle;
