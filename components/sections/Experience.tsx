import styled from 'styled-components';

const StyledExperienceSection = styled.section`
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

const Experience = () => {
  return (
    <StyledExperienceSection id="experience">
      <StyledTitle>Experience Section</StyledTitle>
    </StyledExperienceSection>
  );
};

export default Experience;
