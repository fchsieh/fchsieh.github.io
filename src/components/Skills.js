import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  skillsBar: {
    margin: "auto",
    width: "80%",
    background: "transparent",
    backdropFilter: "blur(35px)",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Box className={classes.skillsBar}>
      <SkillBars
        skills={skillsData}
        duration={3.5}
        flat={true}
        labelsWidth={80}
      />
    </Box>
  );
};

export default Skills;
