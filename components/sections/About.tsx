import styled from 'styled-components';

const StyledAboutSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
`;

const StyledTitle = styled.div`
  font-size: 8rem;
  ${({ theme }) => theme.mixins.gradientText};
`;

const About = () => {
  return (
    <StyledAboutSection id="about">
      <StyledTitle>About Section</StyledTitle>
    </StyledAboutSection>
  );
};

export default About;
