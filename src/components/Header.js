import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box, Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";

import particleParams from "./Particles.data";
import Resume from "./data/resume.pdf";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "absolute",
    opacity: 0.5,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
    fontWeight: 700,
    padding: "1rem",
  },
  subTitle: {
    color: theme.palette.title.main,
    fontFamily: "Lato",
  },
  button: {
    background: theme.palette.button.light,
    color: "white",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  subButton: {
    background: theme.palette.button.main,
    color: "white",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  homeContainer: {
    margin: "auto",
    marginTop: "10%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "80vh",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.homeContainer}>
        <Particles
          canvasClassName={classes.particlesCanvas}
          params={particleParams}
        />
        <Grid container justifyContent="center">
          <Avatar className={classes.avatar} src="" alt="Fred Hsieh" />
        </Grid>
        <Typography className={classes.title} variant="h3">
          Fucheng Hsieh
        </Typography>
        <Typography className={classes.subTitle} variant="h5">
          <Typed
            strings={[
              "CS Grad Student @ UC Irvine",
              "Full-stack developer",
              "Software Engineer",
              "Wireless Network Engineer",
            ]}
            typeSpeed={80}
            backSpeed={30}
            backDelay={1500}
            cursorChar="_"
            smartBackspace
            loop
          />
        </Typography>
        <br />
        <Stack
          justifyContent="center"
          textAlign="center"
          spacing={5}
          direction="row"
          paddingTop="2rem"
        >
          <Button
            component={Link}
            className={classes.button}
            variant="outlined"
            to="contact"
            smooth
            duration={500}
          >
            Let's Talk?
          </Button>
          <Button
            className={classes.subButton}
            variant="outlined"
            href={Resume}
            target="_blank"
          >
            Resume
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
