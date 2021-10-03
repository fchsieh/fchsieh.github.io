import React from "react";
import { SkillBars } from "react-skills";

const skillsData = [
  {
    name: "Python",
    level: 100,
    color: "tan",
  },
  {
    name: "C/C++",
    level: 95,
    color: "tan",
  },
  {
    name: "JavaScript",
    level: 90,
    color: "tan",
  },
  {
    name: "Nodejs",
    level: 85,
    color: "tan",
  },
  {
    name: "React",
    level: 80,
    color: "tan",
  },
];

const Skills = () => {
  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <SkillBars
        skills={skillsData}
        duration={4}
        flat={true}
        labelsWidth={80}
      />
    </div>
  );
};

export default Skills;
