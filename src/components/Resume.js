import React from "react";
import { useWindowWidth } from "@wojtekmaj/react-hooks";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import Navbar from "./Navbar";
import resumePdf from "./resume.pdf";

const useStyles = makeStyles((theme) => ({
  pdfbox: {
    padding: "1rem",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "tan",
    textAlign: "center",
    padding: "1rem",
    margin: "auto",
  },
}));

const Resume = () => {
  const width = useWindowWidth();
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box className={classes.pdfbox}>
        <Typography variant="h4" className={classes.title}>
          Resume
        </Typography>

        <Document file={resumePdf}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            width={Math.min(width * 0.9, 1200)}
          ></Page>
        </Document>
      </Box>
    </div>
  );
};

export default Resume;
