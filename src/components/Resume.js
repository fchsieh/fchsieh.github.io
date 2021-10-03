import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import Navbar from "./Navbar";
import resumePdf from "./resume.pdf";

const useStyles = makeStyles((theme) => ({
  pdfbox: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.pdfbox}>
        <Document file={resumePdf}>
          <Page pageNumber={1}></Page>
        </Document>
      </Box>
    </>
  );
};

export default Resume;
