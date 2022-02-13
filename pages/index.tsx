import { About, Contact, Experience, Hero, Layout, Projects } from '@components';
import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

export default Home;
