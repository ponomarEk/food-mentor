import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
`;

const ErrorCard = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #e53e3e;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #718096;
  margin-bottom: 1rem;
`;

const ErrorDetails = styled.div`
  text-align: left;
`;

const Status = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e53e3e;
  margin-bottom: 0.5rem;
`;

const StatusText = styled.p`
  color: #4a5568;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  margin-bottom: 1rem;
`;

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorContainer>
      <ErrorCard>
        <Title>Oops!</Title>
        <Subtitle>Sorry, an unexpected error has occurred.</Subtitle>
        <ErrorDetails>
          {isRouteErrorResponse(error) ? (
            <>
              <Status>{error.status}</Status>
              <StatusText>{error.statusText}</StatusText>
              {error.data?.message && <ErrorMessage>{error.data.message}</ErrorMessage>}
            </>
          ) : (
            <ErrorMessage>Unknown error message</ErrorMessage>
          )}
        </ErrorDetails>
      </ErrorCard>
    </ErrorContainer>
  );
};

export default ErrorPage;
