import React from "react";
import { useWindowWidth } from "@wojtekmaj/react-hooks";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

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
    color: "#4da8da",
    fontFamily: "Lato",
    fontWeight: "bold",
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
      <Box className={classes.pdfbox}>
        <Typography variant="h3" className={classes.title}>
          Resume
        </Typography>

        <Document file={resumePdf}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            width={Math.min(width * 0.8, 800)}
          ></Page>
        </Document>
      </Box>
    </div>
  );
};

export default Resume;
