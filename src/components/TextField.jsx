import styled from 'styled-components';

const InputField = styled.input`
  width: 360px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  height: 64px;
  margin-bottom: 20px;
  color: #2d3436;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
`;

const TextField = ({ placeholder }) => {
  return <InputField placeholder={placeholder} />;
};

export default TextField;
