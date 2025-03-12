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

      <FooterText>Karthikeyan Ravichandran 2025</FooterText>
    </Section>
  );
};

// Styled Components
const Section = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

const Underline = styled.div`
  width: 50px;
  height: 3px;
  background-color: gold;
  margin: 8px auto 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  align-self: flex-start;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #222;
  color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #222;
  color: white;
`;

const SendButton = styled.button`
  background-color: gold;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #ffcc00;
  }
`;

const IconsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

// Base IconLink style with shared properties
const IconLink = styled.a`
  font-size: 24px;
  transition: 0.3s;
`;

// Brand-specific icon styling with original colors
const LinkedInLink = styled(IconLink)`
  color: #0077B5; /* LinkedIn blue */
  &:hover {
    color: #0077B5;
    opacity: 0.8;
  }
`;

const InstagramLink = styled(IconLink)`
  color: #E1306C; /* Instagram gradient primary color */
  &:hover {
    color: #E1306C;
    opacity: 0.8;
  }
`;

const EmailLink = styled(IconLink)`
  color: #D44638; /* Gmail red */
  &:hover {
    color: #D44638;
    opacity: 0.8;
  }
`;

const BehanceLink = styled(IconLink)`
  color: #1769FF; /* Behance blue */
  &:hover {
    color: #1769FF;
    opacity: 0.8;
  }
`;

const FooterText = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

export default ContactSection;