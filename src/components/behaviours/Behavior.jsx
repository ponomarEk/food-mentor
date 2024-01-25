import styled from 'styled-components';

const BehaviourCard = styled.div`
  display: flex;
  padding: 20px;
  width: 170px;
  justify-content: space-between;
  box-sizing: border-box;
  height: 60px;
  align-items: center;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  &:hover {
    outline: 2px solid rgba(95, 203, 57, 0.3);
  }
`;

const BehaviourName = styled.p`
  font-size: 12px;
  font-weight: 400;
  width: 70%;
`;

const Behaviour = ({ behaviour }) => {
  const chosenBehaviour = 'I dont rest enough';
  return (
    <BehaviourCard
      tabIndex={0}
      role="button"
      style={{ ...(chosenBehaviour === behaviour.title ? { outline: '2px solid rgba(95, 203, 57)' } : {}) }}
    >
      <img src={behaviour.src} alt={behaviour.title} />
      <BehaviourName>{behaviour.title}</BehaviourName>
    </BehaviourCard>
  );
};

export default Behaviour;
