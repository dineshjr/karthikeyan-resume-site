/* eslint-disable react/prop-types */
import styled from "styled-components";

const SkillCard = ({ icon, name, progress }) => {
  return (
    <Card>
      <Icon src={icon} alt={name} />
      <SkillName>{name}</SkillName>
      <ProgressCircle>
        <Svg viewBox="0 0 100 100">
          <CircleBg cx="50" cy="50" r="40" />
          <CircleProgress 
            cx="50" 
            cy="50" 
            r="40" 
            $progress={progress} 
          />
          <Text x="50" y="55">
            {progress}%
          </Text>
        </Svg>
      </ProgressCircle>
    </Card>
  );
};

export default SkillCard;

/* Styled Components */
const Card = styled.div`
  background: ${({ theme }) =>
    theme.mode === "dark" ? "#ffffff" : "#212121"}; /* Vice versa */
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#212121" : "#ffffff"}; /* Vice versa */
  border-radius: 20px;
  padding: 30px;
  width: 220px;
  height: 260px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out,
    color 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const SkillName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "#0056b3" : "#f5a623"}; /* Vice versa */
  margin-bottom: 12px;
  text-transform: uppercase;
`;
/* Circular Progress */
const ProgressCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  width: 90px;
  height: 90px;
`;
const CircleBg = styled.circle`
  fill: none;
  stroke: ${({ theme }) =>
    theme.mode === "dark" ? "#ddd" : "#444"}; /* Vice versa */
  stroke-width: 8;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: ${({ theme }) =>
    theme.mode === "dark" ? "#0056b3" : "#007bff"}; /* Vice versa */
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 251;
  stroke-dashoffset: ${(props) => 251 - (props.$progress / 100) * 251};
  transition: stroke-dashoffset 0.6s ease-in-out, stroke 0.3s ease-in-out;
`;

const Text = styled.text`
  font-size: 16px;
  fill: ${({ theme }) =>
    theme.mode === "dark" ? "#212121" : "#ffffff"}; /* Vice versa */
  font-weight: bold;
  text-anchor: middle;
  dominant-baseline: middle;
`;