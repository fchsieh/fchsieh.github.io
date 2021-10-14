import React from "react";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import particleParams from "./Particles.data";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    opacity: 0.3,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={particleParams}
      />
    </div>
  );
};

export default Home;
