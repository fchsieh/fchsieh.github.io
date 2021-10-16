import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";

// CSS styles
const useStyles = makeStyles((theme) => ({
  tabs: {
    marginLeft: "auto",
    color: "#eefbfb",
  },
  tab: {
    minWidth: 100,
    width: 100,
    fontFamily: "Lato",
    "&:hover": {
      color: "#4DA8DA",
    },
  },
  menuSliderContainer: {
    background: "#203647",
    width: 250,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    marginTop: "4vh",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  listItem: {
    color: "#eefbfb",
  },
  list: {
    "&:hover": {
      background: "#007cc7",
      color: "#eefbfb",
    },
  },
}));

const tabs = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Projects", key: "projects" },
  { label: "Skills", key: "skills" },
  { label: "Contact", key: "contact" },
];

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("home");

  const transparent = activeTab === "home" ? "rgba(255,255,255,0.1)" : "#222";
  return (
    <>
      <HideOnScroll>
        <AppBar style={{ background: transparent, top: 0 }}>
          <Toolbar>
            <Typography
              variant="h5"
              style={{ color: "#eefbfb", fontFamily: "Lato" }}
            >
              Fucheng.
            </Typography>
            <Tabs
              className={classes.tabs}
              value={activeTab}
              indicatorColor="primary"
              variant="scrollable"
            >
              {tabs.map((tab) => {
                return (
                  <Tab
                    key={tab.key}
                    value={tab.key}
                    label={tab.label}
                    to={tab.key}
                    offset={tab.key === "home" ? -600 : 0}
                    className={classes.tab}
                    component={Link}
                    spy
                    isDynamic
                    smooth
                    duration={600}
                    onSetActive={(e) => {
                      setActiveTab(e);
                    }}
                  />
                );
              })}
            </Tabs>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Navbar;
