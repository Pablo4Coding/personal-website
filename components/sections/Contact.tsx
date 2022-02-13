import styled from 'styled-components';

const StyledContactSection = styled.section`
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

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <StyledTitle>Contact Section</StyledTitle>
    </StyledContactSection>
  );
};

export default Contact;
