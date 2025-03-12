
import styled from "styled-components";

const skillsLeft = [
  { name: "User Research and Insights", level: 90 },
  { name: "Usability Testing & Visual Design", level: 85 },
  { name: "Agile Methodologies & Design Thinking", level: 88 },
  { name: "Interaction Design & Information Architecture", level: 92 },
];

const skillsRight = [
  { name: "Responsive Web & Mobile Design", level: 87 },
  { name: "Design System Implementation", level: 89 },
];

const SkillsSection = () => {
  

  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <SkillsContent>
        <SkillsColumn>
          {skillsLeft.map((skill, index) => (
            <SkillCard key={index}>
              <SkillName>{skill.name}</SkillName>
              <ProgressBar>
                <ProgressFill $level={skill.level} />
              </ProgressBar>
            </SkillCard>
          ))}
        </SkillsColumn>
        <Divider />
        <SkillsColumn>
          {skillsRight.map((skill, index) => (
            <SkillCard key={index}>
              <SkillName>{skill.name}</SkillName>
              <ProgressBar>
                <ProgressFill $level={skill.level} />
              </ProgressBar>
            </SkillCard>
          ))}
        </SkillsColumn>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default SkillsSection;

/* Styled Components */
const SkillsContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;

  &::after {
    content: "";
    width: 70px;
    height: 3px;
    background: ${(props) => props.theme.accent};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
`;

const SkillsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px; /* Reduced gap */
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Reduced vertical gap */
  width: 320px; /* Adjusted width */
`;

const Divider = styled.div`
  width: 1px;
  height: auto;
  background: ${(props) => props.theme.accent};
  min-height: 100%;
  align-self: stretch; /* Ensures divider stretches fully */
`;

const SkillCard = styled.div`
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  padding: 15px 20px;
  border-radius: 10px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
`;

const SkillName = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;
`;

const ProgressBar = styled.div`
  background: ${(props) => (props.theme.mode === "dark" ? "#333" : "#ddd")};
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  background: linear-gradient(90deg, #007bff, #0066cc);
  width: ${(props) => props.$level}%;
  height: 100%;
  transition: width 0.5s ease-in-out;
`;