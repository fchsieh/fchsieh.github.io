import React from "react";
import { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import "./Contact.scss";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "tan",
    margin: "auto",
    textAlign: "center",
    paddingBottom: "50px",
  },
  box: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Contact = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const classes = useStyles();
  const submitForm = (e) => {
    e.preventDefault();
    const emailContent =
      "Name:%20" +
      first +
      "%20" +
      last +
      "%0D%0APhone%20#:%20" +
      phone +
      "%0D%0AEmail:%20" +
      email +
      "%0D%0A------%0D%0A" +
      message.replace(/\n/g, "%0D%0A") +
      "%0D%0A";

    window.open(
      "mailto:fhsieh@uci.edu?subject=" +
        first +
        "%20" +
        last +
        "%20's%20message" +
        "&body=" +
        emailContent
    );
  };

  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <Typography variant="h2" className={classes.title}>
          Contact Me
        </Typography>
        <div id="contact-container">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <div className="icon-text">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>714-280-5665</span>
            </div>
            <div className="icon-text">
              <i className="fa fa-at" aria-hidden="true"></i>
              <span>fhsieh@uci.edu</span>
            </div>
            <div className="icon-text">
              <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
              <span>Irvine, CA 92612</span>
            </div>
            <div className="social-media">
              <a
                className="icon-circle"
                href="https://www.linkedin.com/in/freddiehsieh/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="icon-circle"
                href="https://github.com/fchsieh"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
              <a
                className="icon-circle"
                href="https://www.facebook.com/fuchening"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </div>
          </div>
          <form onSubmit={submitForm}>
            <div className="col">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirst(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLast(e.target.value)} />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Mail</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Phone #</label>
                <input type="tel" onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="col">
              <div className="form-group solo">
                <label>Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="col">
              <div className="form-group solo right">
                <button className="primary" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </Box>
    </>
  );
};

export default Contact;
