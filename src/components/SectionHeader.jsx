import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  margin-top: 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #2d3436;
`;

const Caption = styled.p`
  color: #616161;
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

const SectionHeader = ({ title, caption }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Caption>{caption}</Caption>
    </Section>
  );
};

export default SectionHeader;
