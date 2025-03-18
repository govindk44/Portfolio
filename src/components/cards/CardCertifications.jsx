import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Provider = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const CredentialLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CardCertifications = ({ certification }) => {
  return (
    <Card>
      <Title>{certification.title}</Title>
      <Provider>{certification.provider}</Provider>
      <Date>{certification.date}</Date>
      {certification.credential !== "N/A" && (
        <CredentialLink href={certification.credential} target="_blank" rel="noopener noreferrer">
          View Credential
        </CredentialLink>
      )}
    </Card>
  );
};

export default CardCertifications;
