import styled from 'styled-components';

const StyledProjectsSection = styled.section`
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

const Projects = () => {
  return (
    <StyledProjectsSection id="projects">
      <StyledTitle>Projects Section</StyledTitle>
    </StyledProjectsSection>
  );
};

export default Projects;
