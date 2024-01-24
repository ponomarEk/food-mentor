import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LeftIcon } from '../assets/left.svg';
import { KEYBOARD_KEYS } from '../constants';

const StyledBackButton = styled.nav`
  padding: 4px;
  margin-right: 5px;
  cursor: pointer;
`;

const BackButton = () => {
  const navigateTo = useNavigate();

  const handleBackButtonClick = () => {
    // Navigate to previous route
    navigateTo(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === KEYBOARD_KEYS.ENTER || e.key === KEYBOARD_KEYS.SPACE) {
      handleBackButtonClick();
    }
  };
  return (
    <StyledBackButton role="button" tabIndex={0} onClick={handleBackButtonClick} onKeyDown={handleKeyDown}>
      <LeftIcon aria-label="Back button" />
    </StyledBackButton>
  );
};

export default BackButton;
