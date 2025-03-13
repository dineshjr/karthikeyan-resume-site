import styled from "styled-components";
import SkillCard from "../components/Card";
import { designTools } from "../utils/data";


const DesignToolsSection = () => {
  return (
    <Section>
      <Title>Design Tool</Title>
      <CardContainer>
        {designTools.map((tool, index) => (
          <SkillCard
            key={index}
            icon={tool.icon}
            name={tool.name}
            progress={tool.progress}
          />
        ))}
      </CardContainer>
    </Section>
  );
};

export default DesignToolsSection;

/* Styled Components */
const Section = styled.div`
  text-align: center;
  padding: 40px;
  transition: background 0.3s ease-in-out;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color:#fff;
  margin-bottom: 20px;
  position: relative;
  transition: color 0.3s ease-in-out;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: #f5a623;
    margin: 8px auto 0;
  }
`;


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
