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
  Typography,
  Box,
  Divider,
  Tabs,
  Tab,
} from "@material-ui/core";
import {
  MenuRounded,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import Footer from "./Footer";

// CSS styles
const useStyles = makeStyles((theme) => ({
  tabs: {
    marginLeft: "auto",
    color: "tan",
  },
  menuSliderContainer: {
    background: "#511",
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
    color: "tan",
    border: "2px solid",
  },
  listItem: {
    color: "tan",
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
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/",
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
      <Avatar className={classes.avatar} src="" alt="Fred Hsieh" />
      <Divider className={classes.divider} />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
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
          <MenuRounded style={{ color: "tomato" }} />
        </IconButton>
        <Typography variant="h5" style={{ color: "tan" }}>
          FH
        </Typography>
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
          onChange={(event, value) => {
            setCurrentTab(value);
          }}
        >
          <Tab label="Home" value="/" component={Link} to="/" />
          <Tab label="About" value="/about" component={Link} to="/about" />
          <Tab label="Resume" value="/resume" component={Link} to="/resume" />
          <Tab
            label="Hire me"
            value="/contact"
            component={Link}
            to="/contact"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
