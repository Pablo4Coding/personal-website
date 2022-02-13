import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <div>Hero section</div>
    </StyledHeroSection>
  );
};

export default Hero;
