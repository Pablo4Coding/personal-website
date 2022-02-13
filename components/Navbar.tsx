import { Menu } from '@components';
import { navLinks } from '@config';
import { usePrefersReducedMotion, useScrollDirection } from '@hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface NavbarProps {
  scrollDirection?: 'up' | 'down';
  scrolledToTop: boolean;
}

const StyledHeader = styled.header<NavbarProps>`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0 50px;
  width: 100%;
  height: var(--navbar-height);
  /* background-color: var(--black-pearl); */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  filter: blur(10px);
  transition: var(--transition);
  z-index: 2;

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--navbar-scroll-height);
        transform: translateY(0px);
        background-color: var(--black-pearl);
        box-shadow: 0 10px 30px -10px var(--light-black-pearl);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--navbar-scroll-height);
        transform: translateY(calc(var(--navbar-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--light-black-pearl);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--deep-sky-blue);
`;

const StyledLogo = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 42px;
  height: 42px;

  &:hover,
  &:focus {
    /* fill: var(--green-tint); */
    transform: translateY(-10px);
  }

  svg {
    fill: none;
    transition: var(--transition);
    user-select: none;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-lg);

      a {
        padding: 10px;
      }
    }
  }
`;

const ResumeLink = (
  <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    Resume
  </a>
);

const Navbar = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <>
      <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
        <StyledNav>
          {/* <StyledLogo>
            <IconLogo />
          </StyledLogo> */}
          <StyledLogo>
            <Image src="/orange-svg.svg" height={30} width={30} alt="orange" />
          </StyledLogo>

          <StyledLinks>
            <ol>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link href={url}>{name}</Link>
                  </li>
                ))}
            </ol>
            <div>{ResumeLink}</div>
          </StyledLinks>

          <Menu />
        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Navbar;
