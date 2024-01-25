import styled from 'styled-components';

import TextField from '../TextField';
import MeasureUnitButton from './MeasureUnitButton';
import { MEASURE_UNITS } from './constants';

const MeasurementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const UnitButtonsContainer = styled.div`
  width: 360px;
  margin-bottom: 20px;
`;

//      <--- TODO make a variable--->

const Measurement = () => {
  const measureType = 'metric';
  return (
    <MeasurementContainer>
      <UnitButtonsContainer>
        {Object.values(MEASURE_UNITS).map((unit) => (
          <MeasureUnitButton key={unit} buttonName={unit} />
        ))}
      </UnitButtonsContainer>
      <TextField placeholder={`Height ${measureType === MEASURE_UNITS.METRIC ? '(cm)' : '(ft)'}`} />
      <TextField placeholder={`Current weight ${measureType === MEASURE_UNITS.METRIC ? '(kg)' : '(lb)'}`} />
    </MeasurementContainer>
  );
};

export default Measurement;
