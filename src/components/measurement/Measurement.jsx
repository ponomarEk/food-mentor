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

const Measurement = () => {
  return (
    <MeasurementContainer>
      <UnitButtonsContainer>
        {MEASURE_UNITS.map((unit) => (
          <MeasureUnitButton key={unit} buttonName={unit} />
        ))}
      </UnitButtonsContainer>
      <TextField placeholder="Height" />
      <TextField placeholder="Current weight" />
    </MeasurementContainer>
  );
};

export default Measurement;
