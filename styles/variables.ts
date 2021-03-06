import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-pearl: #021321;
    --light-pearl: #001c31;
    --dark-blue: #013d69;
    --blue: #00b2ee;
    --light-blue: #7edfff;
    --grey: #e6f1ff;

    --fz-xxs: 1.2rem;
    --fz-xs: 1.3rem;
    --fz-sm: 1.4rem;
    --fz-md: 1.6rem;
    --fz-lg: 1.8rem;
    --fz-xl: 2rem;
    --fz-xxl: 2.2rem;
    --fz-heading: 3.2rem;

    --border-radius: 4px;
    --navbar-height: 100px;
    --navbar-scroll-height: 70px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

    --bp-mobile-s: 330px;
    --bp-mobile-m: 400px;
    --bp-mobile-l: 480px;
    --bp-tablet-s: 600px;
    --bp-tablet-l: 768px;
    --bp-desktop-xs: 900px;
    --bp-desktop-x: 1080px;
    --bp-desktop-m: 1200px;
    --bp-desktop-l: 1400px;
  }
`;

export default variables;
