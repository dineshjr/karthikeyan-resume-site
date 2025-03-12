import styled from "styled-components";
import Button from "../components/Button";
import profilePic from '../assets/images/karthik_profile.png';
// Import your resume file
import resumePDF from '../assets/resume/resume.pdf'
const AboutSection = () => {
  // Function to handle resume download
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href to your resume file
    link.href = resumePDF;
    // Set download attribute with filename
    link.download = 'Karthik_Resume.pdf'; // You can customize the download filename
    // Append to the document
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

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
            <Button onClick={handleDownload}>
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
  background: ${(props) => props.theme.background}; /* Themed Background */
  color: ${(props) => props.theme.text}; /* Themed Text */
  padding: 0 5%;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
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
  color: ${(props) => props.theme.primary}; /* Themed Primary Color */
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Underline = styled.div`
  width: 60px;
  height: 4px;
  background: ${(props) => props.theme.accent}; /* Themed Accent Color */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 0 auto 20px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.text}; /* Themed Text */
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
  width: 70%;
  height: 70%;
  background-color: ${(props) => props.theme.accent}; /* Themed Accent */
  border-radius: 50%;
  top: 100px;
  right: -55px;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    right: 1%;
    bottom: 10%;
  }
`;

const ProfileImage = styled.img`
  position: relative;
  height: 95%;
  width: auto;
  bottom: 0;
  right: -35px;
  z-index: 1;

  @media (max-width: 768px) {
    height: 85%;
    right: 5%;
  }
`;