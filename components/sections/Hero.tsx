import { Hexagon } from '@components';
import Image from 'next/image';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  color: var(--light-blue);
  z-index: 1;
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

const StyledBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  border-bottom: 3px solid white;

  &.image-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
`;

const StyledSocialMediaWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
`;

const StyledPrimaryButton = styled.button`
  ${({ theme }) => theme.mixins.primaryButton};
`;

const Hero = () => {
  return (
    <>
      <StyledHeroSection>
        <div>Hero section</div>

        <StyledGradientText>Software Engineer</StyledGradientText>

        <StyledSocialMediaWrapper>
          <Hexagon name={'Linkedin'} />
          <Hexagon name={'Github'} />
        </StyledSocialMediaWrapper>

        <StyledPrimaryButton>Download Resume</StyledPrimaryButton>

        <StyleTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos?</StyleTitle>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquid minus
          delectus, repellendus aspernatur dolore consequatur fuga! Ad delectus veniam laborum,
          perferendis error id eum rem beatae necessitatibus porro temporibus inventore voluptate
          commodi aperiam quo expedita facilis maxime eveniet consequuntur et sint eius eaque
          corporis. Accusamus voluptate nihil non ducimus.
        </div>
      </StyledHeroSection>
      <StyledBackgroundContainer>
        <div className="image-wrapper">
          <Image
            src="/images/bg.jpg"
            alt="background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </StyledBackgroundContainer>
    </>
  );
};

export default Hero;
