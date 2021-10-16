import React from "react";
import { Box, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SkillCard from "./SkillCard";
import pythonLogo from "../images/python.png";
import cppLogo from "../images/cpplogo.png";

const useStyles = makeStyles((theme) => ({}));

const skillsData = [
  { label: "Python", image: pythonLogo },
  { label: "C/C++", image: cppLogo },
  { label: "JavaScript", image: cppLogo },
  { label: "Bash", image: cppLogo },
];

const Skills = () => {
  const classes = useStyles();
  return <></>;
};

export default Skills;
