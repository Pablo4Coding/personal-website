import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
`;

const StyledGradientText = styled.div`
  font-size: 10rem;
  font-weight: 900;
  text-transform: capitalize;
  ${({ theme }) => theme.mixins.gradientText};
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <div>Hero section</div>
      <StyledGradientText>Software Engineer</StyledGradientText>
    </StyledHeroSection>
  );
};

export default Hero;
