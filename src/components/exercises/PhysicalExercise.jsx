import styled from 'styled-components';

const Exercise = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #e1e1e1;
  padding: 20px;
  box-sizing: border-box;
  height: 80px;
  border-radius: 15px;
  &:hover {
    outline: 2px solid rgba(95, 203, 57, 0.3);
  }
`;

const ExerciseName = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const PhysicalExercise = ({ exercise }) => {
  return (
    <Exercise tabIndex={0} role="button">
      <ExerciseName>{exercise}</ExerciseName>
    </Exercise>
  );
};

export default PhysicalExercise;
