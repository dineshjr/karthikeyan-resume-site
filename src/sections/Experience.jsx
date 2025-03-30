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
            dateClassName="timeline-date" // Add a class for date styling
            icon={
              <IconWrapper>
                <img
                  src={exp.img}
                  alt={exp.company}
                />
              </IconWrapper>
            }
            contentStyle={{
              background: theme.cardBg || "rgba(25, 25, 25, 0.95)", // Darker background
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              boxShadow: `0 4px 10px rgba(0, 0, 0, 0.2)`,
              border: `1px solid rgba(255, 255, 255, 0.2)`,
              color: theme.cardText || "#ffffff", // Ensuring text is visible
              transition: "all 0.3s ease-in-out",
            }}
            contentArrowStyle={{ 
              borderRight: `7px solid ${theme.cardBg || "rgba(25, 25, 25, 0.95"}`
            }}
            iconStyle={{
              background: "#ffffff", // Ensure icon background is white
              boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.2)"
            }}
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
  background: ${(props) => props.theme.background || "#f5f5f5"};
  color: ${(props) => props.theme.text || "#333333"};
  padding: 40px 20px;
  position: relative;
  z-index: 10;

  .vertical-timeline::before {
    background: ${(props) => props.theme.timelineLine || "rgba(255, 255, 255, 0.2)"};
    transition: background 0.3s ease-in-out;
  }
  
  /* Fix for date color on all devices */
  .timeline-date {
    color: ${(props) => props.theme.dateText || "#ffffff"} !important;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  /* Media query for responsive devices */
  @media (max-width: 768px) {
    .vertical-timeline-element-content {
      background: ${(props) => props.theme.cardBg || "rgba(25, 25, 25, 0.95)"} !important;
      color: ${(props) => props.theme.cardText || "#ffffff"} !important;
    }
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffc107, #ff5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 10px;

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: ${(props) => props.theme.accent || "#ff5722"};
    margin: 10px auto;
  }
`;

const TimelineCardContent = styled.div`
  color: ${(props) => props.theme.cardText || "#ffffff"}; /* Ensure text is visible */
  padding: 0;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 50%;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${(props) => props.theme.cardText || "#ffffff"}; /* Ensure heading is visible */
`;

const CompanyRole = styled.h4`
  margin: 0;
  opacity: 0.8;
  font-size: 1rem;
  color: ${(props) => props.theme.cardText || "#ffffff"}; /* Ensure heading is visible */
`;

const ResponsibilitiesList = styled.ul`
  padding-left: 20px;
  margin-top: 20px;
  color: ${(props) => props.theme.cardText || "#ffffff"}; /* Ensure list text is visible */
`;

const Responsibility = styled.li`
  margin-bottom: 8px;
  line-height: 1.5;
  font-size: 1rem;
  color: ${(props) => props.theme.cardText || "#ffffff"}; /* Ensure list items are visible */

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;