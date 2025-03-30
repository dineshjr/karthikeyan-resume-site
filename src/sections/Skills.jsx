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

// Combine all skills into a single array for mobile view
const allSkills = [...skillsLeft, ...skillsRight];

const SkillsSection = () => {
  return (
    <SkillsContainer>
      <Title>Skills</Title>

      {/* Desktop and Tablet Layout (two columns) */}
      <DesktopLayout>
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
      </DesktopLayout>

      {/* Mobile Layout (single column) */}
      <MobileLayout>
        {allSkills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillName>{skill.name}</SkillName>
            <ProgressBar>
              <ProgressFill $level={skill.level} />
            </ProgressBar>
          </SkillCard>
        ))}
      </MobileLayout>
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

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

// Desktop and Tablet Layout Components
const DesktopLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 992px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

// Mobile Layout Component
const MobileLayout = styled.div`
  display: none; /* Hidden by default */
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex; /* Show on mobile */
  }
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 320px;

  @media (max-width: 992px) {
    width: 280px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: auto;
  background: ${(props) => props.theme.accent};
  min-height: 100%;
  align-self: stretch;
`;

const SkillCard = styled.div`
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  padding: 15px 20px;
  border-radius: 10px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    padding: 12px 15px;
  }
`;

const SkillName = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 6px;
  }
`;

const ProgressBar = styled.div`
  background: ${(props) => (props.theme.mode === "dark" ? "#333" : "#ddd")};
  height: 10px;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 8px;
  }
`;

const ProgressFill = styled.div`
  background: linear-gradient(90deg, #007bff, #0066cc);
  width: ${(props) => props.$level}%;
  height: 100%;
  transition: width 0.5s ease-in-out;
`;
