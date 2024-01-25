import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import foodMentorLogo from '../assets/food-mentor-logo.png';
import { ROUTES } from '../constants';
import BackButton from './BackButton';

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderName = styled.h1`
  font-size: 18px;
  margin: 0;
  margin-left: 10px;
  color: #374234;
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderComponent>
      {pathname !== ROUTES.GOAL && <BackButton />}
      <img src={foodMentorLogo} alt="Food mentor logo" />
      <HeaderName>Food Mentor</HeaderName>
    </HeaderComponent>
  );
};

export default Header;
