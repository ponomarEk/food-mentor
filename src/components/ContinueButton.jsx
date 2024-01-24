import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { KEYBOARD_KEYS } from '../constants';

const StyledButton = styled.button`
  color: #ffffff;
  font-size: 18px;
  background: #5fcb39;
  width: 360px;
  height: 50px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 30%;
  }
`;

const ContinueButton = ({ routePath }) => {
  const navigateTo = useNavigate();

  const handleButtonClick = () => {
    navigateTo(routePath);
  };

  const handleKeyDown = (e) => {
    if (e.key === KEYBOARD_KEYS.ENTER || e.key === KEYBOARD_KEYS.SPACE) {
      handleButtonClick();
    }
  };

  return (
    <StyledButton tabIndex={0} onClick={handleButtonClick} onKeyDown={handleKeyDown} disabled={false}>
      Continue
    </StyledButton>
  );
};

export default ContinueButton;
