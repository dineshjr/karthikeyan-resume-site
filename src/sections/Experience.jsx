/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../utils/data";

const Experience = ({ isActive = true, onActivate }) => {
  const [active, setActive] = useState(isActive);
  const theme = useTheme(); // Get current theme from ThemeProvider

  useEffect(() => {
    if (onActivate && isActive) {
      onActivate();
    }
    setActive(isActive);
  }, [isActive, onActivate]);

  return (
    <ExperienceContainer
      id="experience"
      className={active ? "active" : "inactive"}
    >
      <SectionTitle>Work Experience</SectionTitle>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            icon={
              <IconWrapper>
                <img
                  src={exp.img}
                  alt={exp.company}
                  style={{ background: "#FFF" }}
                />
              </IconWrapper>
            }
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              boxShadow: `0 4px 10px rgba(0, 0, 0, 0.2)`,
              border: `1px solid rgba(255, 255, 255, 0.2)`,
              transition: "all 0.3s ease-in-out",
            }}
            contentArrowStyle={{ borderRight: `7px solid ${theme.cardBg}` }}
          >
            <TimelineCardContent>
              <CompanyHeader>
                <CompanyInfo>
                  <CompanyName>{exp.company}</CompanyName>
                  <CompanyRole>{exp.role}</CompanyRole>
                </CompanyInfo>
              </CompanyHeader>
              <ResponsibilitiesList>
                {exp.responsibilities.map((responsibility, idx) => (
                  <Responsibility key={idx}>{responsibility}</Responsibility>
                ))}
              </ResponsibilitiesList>
            </TimelineCardContent>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 40px 20px; /* Added padding for smaller screens */
  position: relative;
  z-index: 10;

  .vertical-timeline::before {
    background: ${(props) => props.theme.timelineLine};
    transition: background 0.3s ease-in-out;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem; /* Slightly reduced for better mobile experience */
  font-weight: 700;
  background: linear-gradient(45deg, #ffc107, #ff5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 10px;

  &:after {
    content: "";
    display: block;
    width: 80px; /* Slightly reduced for better scaling */
    height: 4px;
    background: ${(props) => props.theme.accent};
    margin: 10px auto;
  }
`;

const TimelineCardContent = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Glassmorphism effect */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${(props) => props.theme.text};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.8em;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      120deg,
      rgba(255, 193, 7, 0.5),
      rgba(255, 255, 255, 0.1)
    );
    opacity: 0.2;
    transform: rotate(25deg);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Ensures wrapping on smaller screens */
  gap: 10px; /* Added spacing for mobile */
  margin-bottom: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const CompanyInfo = styled.div`
  flex: 1; /* Ensures text doesn't shrink */
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.2rem; /* Responsive text size */
`;

const CompanyRole = styled.h4`
  margin: 0;
  opacity: 0.8;
  font-size: 1rem; /* Responsive text size */
`;

const ResponsibilitiesList = styled.ul`
  padding-left: 20px;
  margin-top: 20px;
`;

const Responsibility = styled.li`
  margin-bottom: 8px;
  line-height: 1.5;
  font-size: 1rem; /* Ensures readability */

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Slightly reduced for mobile */
  }
`;
