import styled from 'styled-components';

import { KEYBOARD_KEYS } from '../../constants';
import { useAppData } from '../../hooks/useAppData';
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
  const { measurement, setMeasurement } = useAppData();

  const isMetric = measurement.type === MEASURE_UNITS.METRIC;

  const handleInputChange = (e, name) => {
    setMeasurement((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleUnitClick = (type) => {
    setMeasurement((prev) => ({
      ...prev,
      type,
    }));
  };

  const handleKeyDown = (e, type) => {
    if (e.key === KEYBOARD_KEYS.SPACE || e.key === KEYBOARD_KEYS.ENTER) {
      handleUnitClick(type);
    }
  };

  return (
    <MeasurementContainer>
      <UnitButtonsContainer>
        {Object.values(MEASURE_UNITS).map((unit) => (
          <MeasureUnitButton
            key={unit}
            buttonName={unit}
            onClick={() => handleUnitClick(unit)}
            onKeyDown={(e) => handleKeyDown(e, unit)}
            isChosen={measurement.type === unit}
          />
        ))}
      </UnitButtonsContainer>
      <TextField
        value={measurement.height}
        onChange={(e) => handleInputChange(e, 'height')}
        placeholder={`Height ${isMetric ? '(cm)' : '(ft)'}`}
      />
      <TextField
        value={measurement.weight}
        onChange={(e) => handleInputChange(e, 'weight')}
        placeholder={`Current weight ${isMetric ? '(kg)' : '(lb)'}`}
      />
    </MeasurementContainer>
  );
};

export default Measurement;
