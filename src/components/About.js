import React from "react";
import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Timeline from "./Timeline";
import Skills from "./Skills";

// CSS styles
const useStyles = makeStyles((theme) => ({
  title: {
    color: "#4da8da",
    fontFamily: "Lato",
    fontWeight: "bold",
    textAlign: "center",
    padding: "1rem",
    margin: "auto",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <Container>
        <Typography variant="h3" className={classes.title}>
          About me
        </Typography>
        <Box p={5}>
          <Timeline />
        </Box>
        <Box p={5}>
          <Skills />
        </Box>
      </Container>
    </div>
  );
};

export default About;
