import React from "react";
import Navbar from "./Navbar";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div>
      <Navbar />
      <Document file="/resume.pdf" />
    </div>
  );
};

export default Resume;
