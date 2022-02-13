import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  color: var(--light-sky-blue);
`;

const StyleTitle = styled.div`
  font-size: 5rem;
  margin-bottom: 1rem;
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
      <StyleTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos?</StyleTitle>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquid minus
        delectus, repellendus aspernatur dolore consequatur fuga! Ad delectus veniam laborum,
        perferendis error id eum rem beatae necessitatibus porro temporibus inventore voluptate
        commodi aperiam quo expedita facilis maxime eveniet consequuntur et sint eius eaque
        corporis. Accusamus voluptate nihil non ducimus.
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
