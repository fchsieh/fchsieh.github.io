import React from "react";
import { Element } from "react-scroll";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  unstable_createMuiStrictModeTheme as createTheme,
} from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import "./App.css";

const theme = createTheme({
  props: {
    MuiList: {
      dense: true,
      fontFamily: "Lato",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Lato"].join(","),
    fontWeightMedium: 400,
    fontWeightBold: 500,
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
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <span id="back-to-top-anchor"></span>
        <Navbar />
        <Element id="home">
          <Header />
        </Element>
        <Element id="about">
          <About />
        </Element>
        <Element id="projects">
          <Projects />
        </Element>
        <Element id="skills">
          <Skills />
        </Element>
        <Element id="contact">
          <Contact />
        </Element>
        <ScrollTop />
      </MuiThemeProvider>
    </>
  );
};

export default App;
