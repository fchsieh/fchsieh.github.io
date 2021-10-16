import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScrollAnimation from "react-animate-on-scroll";
import image from "../images/aboutme.jpg";
import {
  Dashboard,
  FiveG,
  SmartToyOutlined,
  DnsOutlined,
} from "@mui/icons-material";

// CSS styles
const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "rgba(0, 124, 199, 0.85)",
    padding: theme.spacing(10, 0, 8, 0),
  },
  responsiveImg: {
    height: "auto",
    width: "100%",
    borderRadius: "22px",
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
  },
  sectionHeadCont: {
    padding: theme.spacing(5),
    color: "#eefbfb",
    justifyContent: "center",
    alignItems: "center",
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
  },
  myUnderline: {
    fontSize: "1.3rem",
    fontWeight: 700,
    paddingBottom: "1.5px",
    borderBottom: "2px solid #eefbfb",
  },
  divider: {
    width: "72px",
    height: "4px",
    backgroundColor: "#eefbfb",
    margin: "20px 0",
  },
}));

const aboutData = [
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis viverra dui. Maecenas eget maximus quam.",
    icon: <Dashboard fontSize="large" />,
  },
  {
    title: "Wireless Network",
    description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
    icon: <FiveG fontSize="large" />,
  },
  {
    title: "Deep Learning",
    description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
    icon: <SmartToyOutlined fontSize="large" />,
  },
  {
    title: "System Admin",
    description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
    icon: <DnsOutlined fontSize="large" />,
  },
];

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.section} id="About">
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <Grid container spacing={5}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=" about us"
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box className={classes.sectionHeadCont}>
                <Typography
                  variant="h4"
                  align="left"
                  className={classes.sectionHeading}
                >
                  Hello! I am Fucheng Hsieh.
                </Typography>
                <Divider className={classes.divider} />
                <Typography
                  variant="body1"
                  component="h6"
                  align="left"
                  className={classes.sectionDesc}
                >
                  Computer Science graduate student at UC Irvine.
                  <br />
                  Passionate about{" "}
                  <span className={classes.myUnderline}>
                    Web Development
                  </span>,{" "}
                  <span className={classes.myUnderline}>Wireless Network</span>,{" "}
                  <span className={classes.myUnderline}>Deep Learning</span>,
                  and{" "}
                  <span className={classes.myUnderline}>
                    System Administration
                  </span>
                  .
                </Typography>
              </Box>
              <Grid container>
                {aboutData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Grid container style={{ marginTop: "16px" }}>
                      <Grid item xs={3} className={classes.AvatarCont}>
                        <Avatar className={classes.Avatar}>{item.icon}</Avatar>
                      </Grid>
                      <Grid item xs={9} className={classes.MediaText}>
                        <Typography variant="h6" className={classes.CardTitle}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant="caption"
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
      </ScrollAnimation>
    </Box>
  );
};

export default About;
