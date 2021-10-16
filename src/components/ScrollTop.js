import * as React from "react";
import { Box, Zoom, useScrollTrigger } from "@mui/material";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@material-ui/icons";

const ScrollTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: "fixed", bottom: 32, right: 32 }}
      >
        <Fab size="large" sx={{ backgroundColor: "#eefbfb", color: "#007fcc" }}>
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollTop;
