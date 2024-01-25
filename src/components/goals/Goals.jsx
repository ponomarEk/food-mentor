import styled from 'styled-components';

import Goal from './Goal';
import { GOALS } from './constants';

const GoalCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 360px;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
`;

const Goals = () => {
  return (
    <GoalCards>
      {GOALS.map((goal) => (
        <Goal key={goal.title} goal={goal} />
      ))}
    </GoalCards>
  );
};

export default Goals;
