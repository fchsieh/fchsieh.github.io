import React from "react";
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
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.pdfbox}>
        <Typography variant="h4" className={classes.title}>
          Resume
        </Typography>

        <Document file={resumePdf}>
          <Page pageNumber={1} renderTextLayer={false}></Page>
        </Document>
      </Box>
    </>
  );
};

export default Resume;
