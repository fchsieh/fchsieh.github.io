import React from "react";
import { Box, Grid, Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import image1 from "../images/5-2.jpg";
import image2 from "../images/5-3.jpg";
import image3 from "../images/5-4.jpg";
import image4 from "../images/5-6.jpg";
import image5 from "../images/5-8.jpg";
import image6 from "../images/5-9.jpg";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "rgba(255, 255, 255, .2)",
    backdropFilter: "blur(35px)",
    padding: theme.spacing(15, 0, 15, 0),
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
  },
  imageContainer: {
    position: "relative",
    "&:hover $imageOverlay": {
      opacity: 1,
    },
  },
  responsiveImg: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "#007cc7",
    color: "#eefbfb",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.7s",
  },
  overlayTitle: {
    fontSize: "2rem",
    fontFamily: "Lato",
    marginBottom: "16px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  overlayText: {
    fontSize: "1rem",
    fontFamily: "Lato",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5rem",
    },
  },
  sectionHeading: {
    color: "#4da8da",
    margin: "auto",
    textAlign: "center",
    paddingBottom: "120px",
  },
  emphasize: { color: "#eefbfb" },
}));

const portfolioData = [
  { url: image1, title: "# Portfolio ", link: "" },
  { url: image2, title: "# Portfolio ", link: "" },
  { url: image3, title: "# Portfolio ", link: "" },
  { url: image4, title: "# Portfolio ", link: "" },
  { url: image5, title: "# Portfolio ", link: "" },
  { url: image6, title: "# Portfolio ", link: "" },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.section}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Typography variant="h3" className={classes.sectionHeading}>
                  Recent <span className={classes.emphasize}>Projects</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              {portfolioData.map((item, i) => (
                <Grid item xs={6} sm={6} lg={4} key={i}>
                  <Box className={classes.imageContainer}>
                    <img
                      src={item.url}
                      alt={item.title}
                      className={classes.responsiveImg}
                    />
                    <Box className={classes.imageOverlay}>
                      <Typography className={classes.overlayTitle}>
                        {item.title}
                      </Typography>

                      <Button
                        variant="contained"
                        className={classes.overlayText}
                      >
                        Visit
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
