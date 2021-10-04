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
    padding: "1rem",
    color: "#fff",
  },
  subTitle: {
    color: "tan",
  },
  interests: {
    color: "#fff",
    paddingTop: "3rem",
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
              "I'm a CS grad student @ UC Irvine",
              "I'm a Full-stack developer",
              "I have expereince in ML, Wi-Fi, Cellular, and IoT",
              "I am currently seeking an internship",
            ]}
            typeSpeed={65}
            backSpeed={30}
            backDelay={1500}
            cursorChar="_"
            smartBackspace
            loop
          />
        </Typography>
        <Typography className={classes.interests} variant="h5">
          I am interested in Web design, ML, Wireless, IoT, and
          Stock/Cryptocurrency
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
