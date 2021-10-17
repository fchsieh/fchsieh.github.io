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
    fontFamily: "Lato",
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
  const [navbar, setNavbar] = useState(classes.navbarTransparent);

  const navRef = useRef();
  navRef.current = navbar;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setNavbar(classes.navbar);
      } else {
        setNavbar(classes.navbarTransparent);
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
        <AppBar className={navbar}>
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
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Navbar;
