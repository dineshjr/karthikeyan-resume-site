import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import profilePic from '../assets/stefan.png'

const AboutSection = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <TextContent>
          <AboutHeading>About</AboutHeading>
          <Underline />
          <Description>
            Innovative and detail-oriented UX/UI Designer with a strong foundation in user-centered design principles and a passion for creating intuitive digital experiences. Proficient in design tools and methodologies, with expertise in wireframing, prototyping, and user research. Adept at collaborating in cross-functional teams and delivering high-quality, user-friendly products within Agile frameworks.
          </Description>
          <ButtonContainer>
            <Button>Hire me</Button>
            <Button>
              Download CV <DownloadIcon>↓</DownloadIcon>
            </Button>
          </ButtonContainer>
        </TextContent>
        <ImageSection>
          <YellowBackground />
          <ProfileImage src={profilePic} alt="Profile" />
        </ImageSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;

/* Styled Components */
const AboutContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #000000;
  padding: 0 5%;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 40px;
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 40px;
    padding: 0 20px;
  }
`;

const AboutHeading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Underline = styled.div`
  width: 60px;
  height: 4px;
color: #FFC928;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const HireButton = styled.button`
  background-color: #FFC928;
  color: #000000;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e5c100;
  }
`;

const DownloadButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #333;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: normal;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #555;
    color: #1c1c1c;
  }
`;

const DownloadIcon = styled.span`
  margin-left: 8px;
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  min-height: 500px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
    min-height: 400px;
  }
`;


const YellowBackground = styled.div`
  position: absolute;
  width: 600px; /* Adjust width to fit image */
  height: 550px; /* Adjust height to fit image */
  background-color: #FFD700;
  border-radius: 50%; /* Makes it a perfect circle */
  bottom: -90px;
  right: -60px; /* Move it slightly outside for better alignment */
  z-index: 1;



  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    right: -30px;
  }
`;


const ProfileImage = styled.img`
  position: relative; /* Ensures it stays above the background */
  height: 95%;
  width: auto;
  bottom: 0;
  right: 0;
  z-index: 1; /* Keep image on top */

  @media (max-width: 768px) {
    height: 85%;
    right: 5%;
  }
`;


