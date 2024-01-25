import styled from 'styled-components';

import { KEYBOARD_KEYS } from '../../constants';
import { useAppData } from '../../hooks/useAppData';

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
  const { currentExercise, setCurrentExercise } = useAppData();

  const isChosen = currentExercise === exercise;

  const handleExerciseClick = () => {
    setCurrentExercise(exercise);
  };

  const handleKeyDown = (e) => {
    if (e.key === KEYBOARD_KEYS.ENTER || e.key === KEYBOARD_KEYS.SPACE) {
      handleExerciseClick();
    }
  };

  return (
    <Exercise
      tabIndex={0}
      role="button"
      style={{ ...(isChosen ? { outline: '2px solid rgba(95, 203, 57)' } : {}) }}
      onClick={handleExerciseClick}
      onKeyDown={handleKeyDown}
    >
      <ExerciseName>{exercise}</ExerciseName>
    </Exercise>
  );
};

export default PhysicalExercise;
