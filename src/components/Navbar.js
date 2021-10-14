import React, { useState } from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import {
  AssignmentInd,
  Home,
  SchoolRounded,
  ContactMail,
} from "@material-ui/icons";

// CSS styles
const useStyles = makeStyles((theme) => ({
  tabs: {
    marginLeft: "auto",
    color: "#eefbfb",
  },
  tab: {
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
  { label: "Home", key: "home", icon: <Home /> },
  { label: "About", key: "about", icon: <AssignmentInd /> },
  { label: "Resume", key: "resume", icon: <SchoolRounded /> },
  { label: "Contact", key: "contact", icon: <ContactMail /> },
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
  const [activeTab, setActiveTab] = useState(false);

  const transparent = activeTab === "home" ? "transparent" : "#222";
  return (
    <>
      <HideOnScroll>
        <AppBar style={{ background: transparent, top: 0 }}>
          <Toolbar>
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
                    duration={500}
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
