import React from "react";
import { Box, Grid, Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import nftMarket from "../images/nft.png";
import nodeBlog from "../images/blog.png";
import uCCompiler from "../images/compiler.png";
import nodeBBS from "../images/bbs.png";
import portfolioImage from "../images/portfolio.png";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "rgba(255, 255, 255, .2)",
    backdropFilter: "blur(45px)",
    paddingTop: "8rem",
    paddingBottom: "8rem",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    "&:hover $imageOverlay": {
      opacity: 1,
    },
  },
  responsiveImg: {
    width: "100%",
    height: "auto",
    display: "flex",
  },
  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#007cc7",
    color: "#eefbfb",
    opacity: 0,
    transition: "0.3s",
  },
  overlayItems: {
    position: "relative",
    top: "25%",
    padding: "1rem",
  },
  overlayTitle: {
    fontSize: "2rem",
    fontFamily: "Lato",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  overlayText: {
    fontSize: "1rem",
    fontFamily: "Lato",
    marginTop: "1rem",
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
  {
    url: nftMarket,
    title: "NFT Marketplace",
    link: "https://github.com/fchsieh/MyNFT-Market",
  },
  {
    url: nodeBlog,
    title: "Node.JS Blog",
    link: "https://github.com/fchsieh/nodejs_blog",
  },
  {
    url: uCCompiler,
    title: "uC Compiler",
    link: "https://github.com/fchsieh/uC-Compiler",
  },
  {
    url: nodeBBS,
    title: "Node.JS BBS",
    link: "https://github.com/fchsieh/Node-BBS",
  },
  {
    url: portfolioImage,
    title: "My Portfolio",
    link: "https://portfolio.fredhs.dev",
  },
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
            <Grid
              container
              spacing={2}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              {portfolioData.map((item, i) => (
                <Grid item xs={12} lg={4} key={i}>
                  <Box className={classes.imageContainer}>
                    <img
                      src={item.url}
                      alt={item.title}
                      className={classes.responsiveImg}
                    />
                    <Box className={classes.imageOverlay}>
                      <Box className={classes.overlayItems}>
                        <Typography className={classes.overlayTitle}>
                          {item.title}
                        </Typography>

                        <Button
                          variant="contained"
                          className={classes.overlayText}
                          href={item.link}
                          component="a"
                          target="_blank"
                        >
                          Visit
                        </Button>
                      </Box>
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
