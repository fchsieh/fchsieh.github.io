import React from "react";
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 1, right: 1, padding: "1.5rem" }}
      >
        <Fab
          size="large"
          style={{
            color: "#007cc7",
            backgroundColor: "#fff",
          }}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollTop;
