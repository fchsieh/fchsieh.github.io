import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#fff",
  },
  subTitle: {
    color: "tan",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    textAlign: "center",
    zIndex: 1,
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
        <br />
        <Typography className={classes.subTitle} variant="h4">
          <Typed
            strings={[
              "I am a CS grad student @ UC Irvine",
              "I am a full-stack developer",
              "I have experience in Wi-Fi, cellular network, MEC, and IoT",
              "I am interested in Machine Learning, Blockchain, and Web development",
              "I am currently seeking an internship",
            ]}
            typeSpeed={65}
            backSpeed={30}
            backDelay={1500}
            cursorChar="_"
            smartBackspace
          />
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
