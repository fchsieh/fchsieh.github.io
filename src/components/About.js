import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Timeline from "./Timeline";
import Skills from "./Skills";

// CSS styles
const useStyles = makeStyles((theme) => ({
  title: {
    color: "tan",
    textAlign: "center",
    padding: "1rem",
    margin: "auto",
  },
  resumeItem: {
    color: "tan",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component="header">
      <Navbar />
      <Box>
        <Typography variant="h4" className={classes.title}>
          Work experience & Education
        </Typography>
        <Timeline />
      </Box>
      <Typography variant="h4" className={classes.title}>
        My Skills
      </Typography>
      <Skills />
      <br />
    </Box>
  );
};

export default About;
