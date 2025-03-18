import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { internships } from "../../data/constants"; 
import InternshipCard from "../../components/cards/InternshipCard "; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
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
    margin-top: 12px;
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

const Internship = () => {
  return (
    <Container id="Internship">
      <Wrapper>
        <Title>Internship</Title>
        <Desc style={{ marginBottom: "40px" }}>
          My internship experiences where I gained hands-on exposure to software
          development and real-world projects.
        </Desc>

        <VerticalTimeline>
          {internships.map((internship, index) => (
            <InternshipCard 
              key={internship.id || index}
              internship={internship} 
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Internship;
