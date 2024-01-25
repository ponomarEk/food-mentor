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
  transition: opacity 0.8s ease;
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const ContinueButton = ({ routePath, disabled }) => {
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
    <StyledButton tabIndex={0} onClick={handleButtonClick} onKeyDown={handleKeyDown} disabled={disabled}>
      Continue
    </StyledButton>
  );
};

export default ContinueButton;
