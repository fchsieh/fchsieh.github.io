import { React, useState, useEffect, useRef } from "react";
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
  navbar: {
    backgroundColor: "rgba(0, 124, 199, .5)",
    backdropFilter: "blur(50px)",
  },
  navbarTransparent: {
    backgroundColor: "transparent",
  },
  tabs: {
    marginLeft: "auto",
    color: "#eefbfb",
  },
  tab: {
    minWidth: 100,
    fontSize: "1rem",
    "&:hover": {
      color: "#4DA8DA",
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
  const [navbar, setNavbar] = useState("transparent");

  const navRef = useRef();
  navRef.current = navbar;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setNavbar("normal");
      } else {
        setNavbar("transparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HideOnScroll>
        <AppBar
          className={
            navbar === "transparent"
              ? classes.navbarTransparent
              : classes.navbar
          }
        >
          <Toolbar>
            <Typography variant="h5" style={{ color: "#eefbfb" }}>
              Fucheng.
            </Typography>
            <Tabs
              className={classes.tabs}
              value={activeTab}
              indicatorColor="primary"
              variant="scrollable"
              allowScrollButtonsMobile
            >
              {tabs.map((tab) => {
                return (
                  <Tab
                    key={tab.key}
                    value={tab.key}
                    label={tab.label}
                    to={tab.key}
                    offset={tab.key === "home" ? -300 : 0}
                    className={classes.tab}
                    component={Link}
                    spy
                    isDynamic
                    smooth
                    duration={700}
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
      <Toolbar />
    </>
  );
};

export default Navbar;
