import styled from 'styled-components';

import Behaviour from './Behavior';
import { BEHAVIOURS_DATA } from './constants';

const BehavioursContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 360px;
  margin-bottom: 100px;
  margin-top: 20px;
  gap: 20px;
`;

const Behaviours = () => {
  return (
    <BehavioursContainer>
      {BEHAVIOURS_DATA.map((behaviour) => (
        <Behaviour key={behaviour.title} behaviour={behaviour} />
      ))}
    </BehavioursContainer>
  );
};

export default Behaviours;
