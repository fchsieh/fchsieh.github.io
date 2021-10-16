import React from "react";
import { useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  LocalPhoneRounded,
  AlternateEmailRounded,
  ExploreRounded,
  Facebook,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

import "./Contact.scss";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#4da8da",
    fontFamily: "Lato",
    fontWeight: "bold",
    margin: "auto",
    textAlign: "center",
    paddingBottom: "30px",
  },
  box: {
    padding: theme.spacing(10, 0, 20, 0),
    fontFamily: "Lato",
    fontWeight: "bold",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  cardTitle: {
    color: "#4da8da",
    fontFamily: "Lato",
    fontWeight: 700,
  },
  iconText: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "2rem",
    fontSize: "1.3rem",
    fontWeight: 400,
  },
  icon: {
    flex: "0 0 40px",
    marginRight: "2rem",
    color: "#007cc7",
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
      "%0D%0A%0D%0A";

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
      <Box className={classes.box}>
        <Typography variant="h3" className={classes.title}>
          Contact Me
        </Typography>
        <Box id="contact-container">
          <Box className="contact-info">
            <Typography variant="h4" className={classes.cardTitle}>
              Contact Information
            </Typography>
            <Box className={classes.iconText}>
              <LocalPhoneRounded className={classes.icon} fontSize="large" />
              714-280-5665
            </Box>
            <Box className={classes.iconText}>
              <AlternateEmailRounded
                className={classes.icon}
                fontSize="large"
              />
              fhsieh@uci.edu
            </Box>
            <Box className={classes.iconText}>
              <ExploreRounded className={classes.icon} fontSize="large" />
              Irvine, CA 92612
            </Box>
            <Box className="social-media">
              <a
                className="icon-circle"
                href="https://www.linkedin.com/in/freddiehsieh/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                className="icon-circle"
                href="https://github.com/fchsieh"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                className="icon-circle"
                href="https://www.facebook.com/fuchening"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
            </Box>
          </Box>
          <form onSubmit={submitForm}>
            <Box className="col">
              <Box className="form-group">
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirst(e.target.value)} />
              </Box>
              <Box className="form-group">
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLast(e.target.value)} />
              </Box>
            </Box>
            <Box className="col">
              <Box className="form-group">
                <label>Mail</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box className="form-group">
                <label>Phone #</label>
                <input type="tel" onChange={(e) => setPhone(e.target.value)} />
              </Box>
            </Box>
            <Box className="col">
              <Box className="form-group solo">
                <label>Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </Box>
            </Box>
            <Box className="col">
              <Box className="form-group solo right">
                <button className="primary" type="submit">
                  Send Message
                </button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
