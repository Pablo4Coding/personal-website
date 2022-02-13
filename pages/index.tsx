import { Layout } from '@components';
import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #00b2ee;

  &:hover {
    background-color: '#015C9C';
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  color: var(--azul-5);
  font-size: 50px;
  margin: 0;
  padding: 0;

  &:hover {
    color: #7edfff;
    text-shadow: #00ffff 0px 8px 12px;
    transform: translateY(-13px);
    transition: 0.4s;
  }
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <StyledDiv>
        <StyledButton>HOME PAGE</StyledButton>
      </StyledDiv>
    </Layout>
  );
};

export default Home;
