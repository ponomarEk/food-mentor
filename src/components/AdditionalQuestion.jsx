import styled from 'styled-components';

const Question = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`;

const AdditionalQuestion = ({ question }) => {
  return <Question>{question}</Question>;
};

export default AdditionalQuestion;
