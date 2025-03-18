import React from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const CertificationCard = styled.div`
  background: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const CertificationTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const CertificationProvider = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
`;

const CertificationDate = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const CredentialLink = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Certifications = () => {
  return (
    <Container id="Certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>Here are some certifications I have achieved.</Desc>
        <CertificationList>
          {certifications.map((certification) => (
            <CertificationCard key={certification.id}>
              <CertificationTitle>{certification.title}</CertificationTitle>
              <CertificationProvider>{certification.provider}</CertificationProvider>
              <CertificationDate>{certification.date}</CertificationDate>
              {certification.credential !== "N/A" && (
                <CredentialLink href={certification.credential} target="_blank" rel="noopener noreferrer">
                  View Credential
                </CredentialLink>
              )}
            </CertificationCard>
          ))}
        </CertificationList>
      </Wrapper>
    </Container>
  );
};

export default Certifications;