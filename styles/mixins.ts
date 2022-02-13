import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  gradientText: css`
    background-color: var(--deep-sky-blue);
    /* background-image: linear-gradient(
      to right,
      var(--deep-sky-blue) 20%,
      #fff 40%,
      #fff 60%,
      var(--deep-sky-blue) 80%
    ); */
    background-image: linear-gradient(
      -45deg,
      var(--cobalt),
      var(--deep-sky-blue),
      var(--grey),
      var(--aqua)
    );
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    animation: shine 2s ease infinite;

    @keyframes shine {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,
};

export default mixins;
