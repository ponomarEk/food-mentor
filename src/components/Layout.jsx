import styled from 'styled-components';

import Header from './Header';
import SectionHeader from './SectionHeader';

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ sectionTitle, sectionCaption, children }) => {
  return (
    <Container>
      <Header />
      <main>
        <SectionHeader title={sectionTitle} caption={sectionCaption} />
        <Section>{children}</Section>
      </main>
    </Container>
  );
};

export default Layout;
