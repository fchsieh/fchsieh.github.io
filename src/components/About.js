import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dashboard,
  FiveG,
  SmartToyOutlined,
  DnsOutlined,
  MonetizationOn,
  ShowChart,
  Reddit,
  Coffee,
} from "@mui/icons-material";
import Image from "material-ui-image";

import AboutMe from "../images/about.png";
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
    fontWeight: "bold",
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
    paddingBottom: theme.spacing(1),
    color: "#eefbfb",
  },
  emphasize: {
    color: "rgba(99,188,222)",
  },
  sectionHeading: {
    color: "#eefbfb",
    padding: theme.spacing(1, 0, 1, 1),
    fontWeight: "bold",
    fontSize: "2.8rem",
  },
  sectionDesc: {
    fontFamily: "Lato",
    fontSize: "1.3rem",
    textAlign: "left",
  },
  myUnderline: {
    color: "rgba(99,188,222)",
    fontSize: "1.3rem",
    fontWeight: 700,
    paddingBottom: "1.5px",
    borderBottom: "2px solid #4da8da",
  },
  divider: {
    width: "64px",
    height: "4px",
    backgroundColor: "#eefbfb",
    margin: "10px 0",
    marginLeft: "8px",
  },
  waving: {
    animationName: "wave-animation",
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
    transformOrigin: "70% 70%",
    display: "inline-block",
  },
  imgBox: { height: "100%", width: "100%" },
  listIcon: {
    color: "#4da8da",
  },
  listText: {
    fontFamily: "Lato",
    fontSize: "1.1rem",
  },
}));

const interestList = [
  {
    label: "bitcoin",
    desc: "Trading Digicurrency",
    icon: <MonetizationOn fontSize="large" />,
  },
  {
    label: "stock",
    desc: "Trading stocks",
    icon: <ShowChart fontSize="large" />,
  },
  {
    label: "meme",
    desc: "Watch memes",
    icon: <Reddit fontSize="large" />,
  },
  {
    label: "coffee",
    desc: "And drink coffee!",
    icon: <Coffee fontSize="large" />,
  },
];

const aboutData = [
  {
    title: "Web Development",
    description:
      "Experienced in JavaScript, React, Node, and HTML/CSS. This website was built with React and Material UI!",
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
      "Experienced in using and configuring Linux server, including Apache, Nginx, and Docker containers. Built a Class Schedule Maker using Bash commands",
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
            style={{
              alignItems: "center",
              justifyContent: "center",
              direction: "row",
            }}
          >
            <Grid container>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={12} sm={4}>
                  <Box className={classes.imgBox}>
                    <Image
                      src={AboutMe}
                      width="100%"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={7} style={{ paddingLeft: "20px" }}>
                  <Grid container>
                    <Grid item xs={12} className={classes.sectionHeadCont}>
                      <Typography
                        variant="h2"
                        align="left"
                        className={classes.sectionHeading}
                      >
                        Hello! I am{" "}
                        <span className={classes.emphasize}>Fucheng Hsieh</span>
                        .{"  "}
                        <span className={classes.waving}>👋</span>
                      </Typography>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item xs={10} className={classes.sectionHeadCont}>
                      <Typography
                        variant="body1"
                        align="center"
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
                        variant="body1"
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
                        <span className={classes.myUnderline}>
                          Deep Learning
                        </span>
                        {"  "}
                        projects. Also, I am interested in{"  "}
                        <span className={classes.myUnderline}>
                          Cloud Computing
                        </span>
                        .
                      </Typography>
                      <br />
                      <Typography
                        variant="body2"
                        align="left"
                        className={classes.sectionDesc}
                      >
                        Apart from coding, I also enjoy:
                      </Typography>
                      <List>
                        {interestList.map((listItem, i) => (
                          <ListItem key={i}>
                            <ListItemIcon className={classes.listIcon}>
                              {listItem.icon}
                            </ListItemIcon>
                            <ListItemText
                              classes={{ primary: classes.listText }}
                              primary={listItem.desc}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                style={{ paddingTop: "10px" }}
                justifyContent="center"
              >
                {aboutData.map((item, i) => (
                  <Grid item xs={12} sm={5} key={i} style={{ padding: "10px" }}>
                    <Grid container style={{ marginTop: "20px" }}>
                      <Grid item xs={3} className={classes.AvatarCont}>
                        <Avatar className={classes.Avatar}>{item.icon}</Avatar>
                      </Grid>
                      <Grid item xs={8}>
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
