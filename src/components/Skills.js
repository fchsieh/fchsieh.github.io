import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SkillBar from "react-skillbars";

const SKILLS = [
  {
    type: "Python",
    level: 100,
    color: "#007cc7",
  },
  {
    type: "C/C++",
    level: 90,
    color: "#007cc7",
  },
  {
    type: "JavaScript",
    level: 85,
    color: "#007cc7",
  },
  {
    type: "React",
    level: 80,
    color: "#007cc7",
  },
  {
    type: "Node",
    level: 80,
    color: "#007cc7",
  },
  {
    type: "Docker",
    level: 75,
    color: "#007cc7",
  },
  {
    type: "HTML/CSS",
    level: 70,
    color: "#007cc7",
  },
];

const colors = {
  bar: {
    hue: 202.6,
    saturation: 100,
    level: {
      minimum: 40,
      maximum: 80,
    },
  },
  title: {
    text: "#eefbfb",
    background: "#203647",
  },
};

const useStyles = makeStyles((theme) => ({
  skillsBar: {
    margin: "auto",
    width: "80%",
    background: "transparent",
    backdropFilter: "blur(35px)",
    fontFamily: "Lato",
    "& span, & svg": {
      fontSize: "1rem",
    },
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Box className={classes.skillsBar}>
      <SkillBar
        skills={SKILLS}
        colors={colors}
        animationDelay={1000}
        animationDuration={800}
      ></SkillBar>
    </Box>
  );
};

export default Skills;
