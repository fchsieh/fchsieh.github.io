import React from "react";
import Image from "material-ui-image";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dashboard,
  FiveG,
  SmartToyOutlined,
  DnsOutlined,
} from "@mui/icons-material";

import AboutMe from "../images/about.jpg";
import "./About.css";

// CSS styles
const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "rgba(0, 124, 199, 0.25)",
    backdropFilter: "blur(55px)",
    padding: theme.spacing(15, 0, 15, 0),
    justifyContent: "center",
    alignItems: "center",
  },
  AvatarCont: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Avatar: {
    color: "#007cc7",
    backgroundColor: "#eefbfb",
    width: 48,
    height: 48,
  },
  CardTitle: {
    fontFamily: "Lato",
    fontSize: "1.7rem",
    color: "#007cc7",
    backgroundColor: "#eefbfb",
    padding: "0.3rem",
    textAlign: "center",
    borderRadius: "0.5rem",
  },
  CardText: {
    fontFamily: "Lato",
    fontSize: "1.2rem",
    color: "#eefbfb",
    textAlign: "left",
    paddingTop: "10px",
  },
  sectionHeadCont: {
    paddingBottom: theme.spacing(10),
    color: "#eefbfb",
    alignItems: "center",
    textAlign: "left",
  },
  emphasize: {
    color: "rgba(99,188,222)",
  },
  sectionHeading: {
    color: "#eefbfb",
    margin: theme.spacing(1, 0),
    fontWeight: 700,
    fontSize: "2.5rem",
  },
  sectionDesc: {
    fontFamily: "Lato",
    fontSize: "1.3rem",
    flex: "1 1 auto",
    padding: "1.25rem",
  },
  myUnderline: {
    color: "#4da8da",
    fontSize: "1.3rem",
    fontWeight: 700,
    paddingBottom: "1.5px",
    borderBottom: "2px solid #4da8da",
  },
  divider: {
    width: "64px",
    height: "4px",
    backgroundColor: "#eefbfb",
    margin: "15px 0",
  },
  waving: {
    animationName: "wave-animation",
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
    transformOrigin: "70% 70%",
    display: "inline-block",
  },
}));

const aboutData = [
  {
    title: "Web Development",
    description:
      "Experienced in JavaScript, React, Node, and HTML/CSS. This website is built with React and Material UI!",
    icon: <Dashboard fontSize="large" />,
  },
  {
    title: "Wireless Network & IoT",
    description:
      "One-year work experience in developing 4G/5G MEC and IoT applications. Familiar with configuring OpenWRT to support Mesh Wi-Fi systems",
    icon: <FiveG fontSize="large" />,
  },
  {
    title: "Deep Learning",
    description:
      "Collaborated with a local firm and built an Automatic Fabric Defect Detection app using Keras and DL models to increase the production yield",
    icon: <SmartToyOutlined fontSize="large" />,
  },
  {
    title: "System Admin & Cloud",
    description:
      "Experienced in using Linux services, including Apache and Nginx, and virtualization tools like Docker. Built a Class Schedule Maker using Bash commands",
    icon: <DnsOutlined fontSize="large" />,
  },
];

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.section}>
        <Container>
          <Grid
            container
            spacing={5}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item xs={12} sm={10}>
              <Grid container spacing={5}>
                <Grid item xs={6} sm={4}>
                  <Box>
                    <Image src={AboutMe} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={8}>
                  <Box className={classes.sectionHeadCont}>
                    <Typography
                      variant="h2"
                      align="left"
                      className={classes.sectionHeading}
                    >
                      Hello! I am{" "}
                      <span className={classes.emphasize}>Fucheng Hsieh</span>.
                      {"  "}
                      <span className={classes.waving}>👋</span>
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography
                      variant="caption"
                      align="left"
                      className={classes.sectionDesc}
                    >
                      I am a{"  "}
                      <span className={classes.myUnderline}>
                        Computer Science
                      </span>
                      {"  "}
                      Grad Student at UC Irvine.
                    </Typography>
                    <Typography
                      variant="caption"
                      align="left"
                      className={classes.sectionDesc}
                    >
                      I enjoy{"  "}
                      <span className={classes.myUnderline}>
                        Developing Websites
                      </span>
                      {"  "}, building{"  "}
                      <span className={classes.myUnderline}>
                        Network Applications
                      </span>
                      {"  "}, and making{"  "}
                      <span className={classes.myUnderline}>Deep Learning</span>
                      {"  "}
                      projects. Also, I am interested in{"  "}
                      <span className={classes.myUnderline}>
                        Cloud Computing
                      </span>
                      {"  "}.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                {aboutData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i} style={{ padding: "10px" }}>
                    <Grid container style={{ marginTop: "16px" }}>
                      <Grid item xs={3} className={classes.AvatarCont}>
                        <Avatar className={classes.Avatar}>{item.icon}</Avatar>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="h6" className={classes.CardTitle}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className={classes.CardText}
                        >
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
