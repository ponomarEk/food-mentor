import { createContext, useContext, useState } from 'react';

import { MEASURE_UNITS } from '../components/measurement/constants';

const AppContext = createContext({
  currentGoal: null,
  currentBehaviour: null,
  measurement: {
    type: MEASURE_UNITS.METRIC,
    height: null,
    weight: null,
  },
  currentExercise: null,
});

export const AppProvider = ({ children }) => {
  const [currentGoal, setCurrentGoal] = useState(null);
  const [currentBehaviour, setCurrentBehaviour] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [measurement, setMeasurement] = useState({
    type: MEASURE_UNITS.METRIC,
    height: null,
    weight: null,
  });

  const values = {
    currentGoal,
    currentBehaviour,
    currentExercise,
    measurement,
    setCurrentGoal,
    setCurrentExercise,
    setCurrentBehaviour,
    setMeasurement,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

const useAppData = () => useContext(AppContext);
export { useAppData };
