import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../utils/data';
import { useState , useEffect } from 'react';

const ExperienceContainer = styled.div`
  background: #000;
  color: #fff;
  padding: 40px 0;
  position: relative;
  z-index: 10;
  
  &.active {
    display: block;
  }
  
  &.inactive {
    display: none;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #FFC107;
  }
`;

const TimelineCardContent = styled.div`
  background: #262626;
  color: #fff;
  box-shadow: 0 3px 0 #FFC107;
  border-radius: 0.25em;
  padding: 1.5em;
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const TimelineIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const CompanyInfo = styled.div``;

const CompanyName = styled.h3`
  margin: 0;
`;

const CompanyRole = styled.h4`
  margin: 0;
  opacity: 0.8;
`;

const ResponsibilitiesList = styled.ul`
  padding-left: 20px;
  margin-top: 20px;
`;

const Responsibility = styled.li`
  margin-bottom: 8px;
  line-height: 1.5;
`;

const Experience = ({ isActive = true, onActivate }) => {
  const [active, setActive] = useState(isActive);
  
  // This will hide any previous section when this component becomes active
  useEffect(() => {
    if (onActivate && isActive) {
      onActivate();
    }
    setActive(isActive);
  }, [isActive, onActivate]);

  const timelineElementStyle = {
    contentStyle: { background: 'transparent', boxShadow: 'none', padding: 0 },
    contentArrowStyle: { borderRight: '7px solid #262626' },
    iconStyle: { background: '#fff', color: '#fff' }
  };
  
  return (
    <ExperienceContainer id="experience" className={active ? 'active' : 'inactive'}>
      <SectionTitle>Work Experience</SectionTitle>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            icon={<TimelineIcon src={exp.logo} alt={exp.company} />}
            iconStyle={timelineElementStyle.iconStyle}
            contentStyle={timelineElementStyle.contentStyle}
            contentArrowStyle={timelineElementStyle.contentArrowStyle}
            position={exp.position}
          >
            <TimelineCardContent>
              <CompanyHeader>
                <CompanyLogo src={exp.logo} alt={exp.company} />
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