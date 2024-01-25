import styled from 'styled-components';

import activeGirlPng from '../../assets/active-girl.png';
import { EXERCISES } from './constants';
import PhysicalExercise from './PhysicalExercise';

const ExercisesContainer = styled.div`
  display: flex;
  width: 360px;
  height: 365px;
  justify-content: space-between;
`;

const Exercises = styled.div`
  display: flex;
  width: 172px;
  flex-direction: column;
  justify-content: space-between;
`;

const PhysicalExercises = () => {
  return (
    <ExercisesContainer>
      <img alt="Active girl" src={activeGirlPng} />
      <Exercises>
        {EXERCISES.map((exercise) => (
          <PhysicalExercise key={exercise} exercise={exercise} />
        ))}
      </Exercises>
    </ExercisesContainer>
  );
};

export default PhysicalExercises;
