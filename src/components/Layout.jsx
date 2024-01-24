import foodMentorLogo from '../assets/food-mentor-logo.png';
import { ReactComponent as LeftIcon } from '../assets/left.svg';

const Layout = ({ children }) => {
  return (
    <div>
      <LeftIcon title="Back button" />
      <img src={foodMentorLogo} alt="Food mentor logo" />
      <h2>Food Mentor</h2>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
