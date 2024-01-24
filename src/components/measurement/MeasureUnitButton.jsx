import styled from 'styled-components';

const UnitButton = styled.button`
  width: 50%;
  color: #5fcb39;
  height: 32px;
  border: 1px solid #5fcb39;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  background: #ffffff;
  &:first-child {
    border-right: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-left: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const MeasureUnitButton = ({ buttonName }) => {
  return <UnitButton>{buttonName}</UnitButton>;
};

export default MeasureUnitButton;
