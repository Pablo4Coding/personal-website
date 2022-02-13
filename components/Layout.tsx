import { Footer, HeadWrapper, Navbar } from '@components';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="root">
      <HeadWrapper />

      <StyledContent>
        <Navbar />
        {children}
        <Footer />
      </StyledContent>
    </div>
  );
};

export default Layout;
