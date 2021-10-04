import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  List,
  Box,
  Divider,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";
import {
  MenuRounded,
  AssignmentInd,
  Home,
  SchoolRounded,
  ContactMail,
} from "@material-ui/icons";

import Footer from "./Footer";

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
  divider: {
    marginTop: "4vh",
    background: "#4da8da",
    border: "2px solid",
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

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "About",
    listPath: "/about",
  },
  {
    listIcon: <SchoolRounded />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
  });
  const [currentTab, setCurrentTab] = useState(useLocation().pathname);

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src="" alt="Fucheng Hsieh" />
      <Divider className={classes.divider} />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem
            button
            key={key}
            component={Link}
            className={classes.list}
            to={lsItem.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={
                <Typography variant="h6" style={{ fontFamily: "Lato" }}>
                  {lsItem.listText}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const transparent = currentTab === "/" ? "transparent" : "#222";
  return (
    <AppBar
      style={{
        background: transparent,
        position: "sticky",
        top: 0,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSlider("left", true)}
        >
          <MenuRounded style={{ color: "#4dabda" }} />
        </IconButton>

        <MobileRightMenuSlider
          anchor="left"
          open={state.left}
          onClose={toggleSlider("left", false)}
        >
          {sideList("left")}
          <Footer />
        </MobileRightMenuSlider>
        <Tabs
          className={classes.tabs}
          value={currentTab}
          indicatorColor="primary"
          variant="scrollable"
          onChange={(event, value) => {
            setCurrentTab(value);
          }}
        >
          <Tab
            label="Home"
            value="/"
            component={Link}
            className={classes.tab}
            to="/"
          />
          <Tab
            label="About"
            value="/about"
            component={Link}
            className={classes.tab}
            to="/about"
          />
          <Tab
            label="Resume"
            value="/resume"
            component={Link}
            className={classes.tab}
            to="/resume"
          />
          <Tab
            label="Contact"
            value="/contact"
            component={Link}
            className={classes.tab}
            to="/contact"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
