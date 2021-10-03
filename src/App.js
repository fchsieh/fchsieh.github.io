import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#25274D",
    },
  },
});

const App = () => {
  return (
    <Router basename="/">
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default App;
