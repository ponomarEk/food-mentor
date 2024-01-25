import styled from 'styled-components';

import { KEYBOARD_KEYS } from '../../constants';

const GoalCard = styled.div`
  display: flex;
  width: 172px;
  background: linear-gradient(to bottom, #f1f1f1 0%, #ffffff 100%);
  border: solid 1px #e1e1e1;
  border-radius: 20px;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  &:hover {
    outline: 2px solid rgba(95, 203, 57, 0.3);
  }
`;

const GoalName = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  flex-basis: 50%;
`;

const Goal = ({ goal }) => {
  const chosenGoal = 'Lose Weight';
  const handleGoalClick = (e) => {
    console.log(e.target);
  };

  const handleKeyDown = (e) => {
    if (e.key === KEYBOARD_KEYS.ENTER || e.key === KEYBOARD_KEYS.SPACE) {
      handleGoalClick();
    }
  };

  return (
    <GoalCard
      role="button"
      key={goal.title}
      tabIndex={0}
      onClick={handleGoalClick}
      onKeyDown={handleKeyDown}
      style={{ ...(chosenGoal === goal.title ? { outline: '2px solid rgba(95, 203, 57)' } : {}) }}
    >
      <GoalName>{goal.title}</GoalName>
      <img alt="Goal item" src={goal.src} />
    </GoalCard>
  );
};

export default Goal;
