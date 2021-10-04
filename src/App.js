import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  unstable_createMuiStrictModeTheme as createTheme,
} from "@material-ui/core/styles";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const theme = createTheme({
  typography: {
    fontFamily: ["Merriweather", "Lato"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
  },
  palette: {
    primary: {
      main: "#4dabda",
    },
    navbar: {
      main: "#12232E",
    },
    background: {
      main: "#12232E",
    },
    title: {
      main: "#eefbfb",
    },
    button: {
      main: "#203647",
      light: "#4DA8DA",
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router basename="/">
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
