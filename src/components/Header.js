import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box, Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";

import Typed from "react-typed";

//CSS Styles
const useStyles = makeStyles((theme) => ({
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
  button_sub: {
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
  typedContainer: {
    margin: "auto",
    marginTop: "10%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.typedContainer}>
        <Grid container justifyContent="center">
          <Avatar className={classes.avatar} src="" alt="Fred Hsieh" />
        </Grid>
        <Typography className={classes.title} variant="h3">
          Fucheng Hsieh
        </Typography>
        <Typography className={classes.subTitle} variant="h5">
          <Typed
            strings={[
              "CS grad @ UC Irvine",
              "Full-stack developer",
              "MERN Stack developer",
              "Software Engineer",
            ]}
            typeSpeed={65}
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
          spacing={2}
          direction="row"
          paddingTop="2rem"
        >
          <Button
            className={classes.button}
            variant="outlined"
            href="/#/contact"
          >
            Let's Talk?
          </Button>
          <Button
            className={classes.button_sub}
            variant="outlined"
            href="/#/resume"
          >
            Resume
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Header;
