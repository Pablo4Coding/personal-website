import { Icon } from '@components/icons';
import styled from 'styled-components';

const StyledHexagonWrapper = styled.div`
  margin: auto;
  display: flex;
  text-align: initial;
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const StyledHexagon = styled.div`
  position: relative;
  width: 46%;
  height: 80%;
  margin: auto;
  color: var(--grey);
  background: linear-gradient(-180deg, var(--grey), var(--dark-pearl));
  ${({ theme }) => theme.mixins.flexCenter};
  transition: var(--transition);

  svg {
    z-index: 1;
    margin: auto;
    font-size: 50px;
    fill: var(--grey);
    stroke: transparent;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    background: inherit;
    height: 100%;
    width: 100%;
    border-radius: 0;
    transition: var(--transition);
    transform-origin: center;
  }

  &:before {
    transform: rotateZ(60deg);
  }

  &:after {
    transform: rotateZ(-60deg);
  }

  &:hover {
    border-radius: 50px;
    transition: var(--transition);
  }

  &:hover:before {
    border-radius: 50px;
    transition: var(--transition);
  }

  &:hover:after {
    border-radius: 50px;
    transition: var(--transition);
  }
`;

interface HexagonProps {
  name: string;
}

const Hexagon = ({ name }: HexagonProps) => {
  return (
    <StyledHexagonWrapper>
      <StyledHexagon>
        <Icon name={name} />
      </StyledHexagon>
    </StyledHexagonWrapper>
  );
};

export default Hexagon;
