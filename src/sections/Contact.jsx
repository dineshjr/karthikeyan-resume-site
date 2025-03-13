import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaEnvelope, FaBehance } from "react-icons/fa";

const ContactSection = () => {
  return (
    <Section>
      <Title>Contact Section</Title>
      <Underline />

      <Form>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter your name" />

        <Label>Email</Label>
        <Input type="email" placeholder="Enter your email" />

        <Label>Message</Label>
        <TextArea placeholder="Write your message..." />

        <SendButton>Send</SendButton>
      </Form>

      <IconsContainer>
        <LinkedInLink href="https://www.linkedin.com/in/karthikeyan-ravichandran-983ab4252" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </LinkedInLink>
        <InstagramLink href="https://www.instagram.com/_karthi17._?igsh=MTNncmxjODZlY29oZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </InstagramLink>
        <EmailLink href="mailto:kkn3272@gmail.com">
          <FaEnvelope />
        </EmailLink>
        <BehanceLink href="https://www.behance.net/karthikravicha2" target="_blank" rel="noopener noreferrer">
          <FaBehance />
        </BehanceLink>
      </IconsContainer>

      <FooterText>Karthikeyan Ravichandran {new Date().getFullYear()}</FooterText>
    </Section>
  );
};

// Styled Components
const Section = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 40px 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Underline = styled.div`
  width: 50px;
  height: 3px;
  background-color: gold;
  margin: 8px auto 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Label = styled.label`
  align-self: flex-start;
  font-size: 14px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #222;
  color: white;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #222;
  color: white;
  box-sizing: border-box;
  resize: vertical;
  
  @media (max-width: 480px) {
    height: 100px;
  }
`;

const SendButton = styled.button`
  background-color: gold;
  color: black;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
  
  &:hover {
    background-color: #ffcc00;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    padding: 10px 25px;
    width: 100%;
  }
`;

const IconsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

// Base IconLink style with shared properties
const IconLink = styled.a`
  font-size: 28px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

// Brand-specific icon styling with original colors
const LinkedInLink = styled(IconLink)`
  color: #0077B5; /* LinkedIn blue */
  &:hover {
    color: #0077B5;
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const InstagramLink = styled(IconLink)`
  color: #E1306C; /* Instagram gradient primary color */
  &:hover {
    color: #E1306C;
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const EmailLink = styled(IconLink)`
  color: #D44638; /* Gmail red */
  &:hover {
    color: #D44638;
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const BehanceLink = styled(IconLink)`
  color: #1769FF; /* Behance blue */
  &:hover {
    color: #1769FF;
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const FooterText = styled.p`
  margin-top: 30px;
  font-size: 14px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export default ContactSection;