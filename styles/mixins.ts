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
    background-color: var(--blue);
    /* background-image: linear-gradient(
      to right,
      var(--blue) 20%,
      #fff 40%,
      #fff 60%,
      var(--blue) 80%
    ); */
    background-image: linear-gradient(-45deg, var(--dark-blue), var(--blue), var(--grey));
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

  primaryButton: css`
    font-size: var(--fz-md);
    font-weight: 600;
    color: var(--grey);
    cursor: pointer;
    padding: 1.75rem 1.85rem;
    line-height: 1;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    transition: var(--transition);

    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);

    &:hover {
      background-position: 100% 0;
      transition: var(--transition);
    }

    &:focus {
      outline: none;
    }
  `,
};

export default mixins;
