import styled from 'styled-components';

import Header from './Header';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>
        <section>{children}</section>
      </main>
    </Container>
  );
};

export default Layout;
