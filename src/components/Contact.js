import React from "react";
import { useState } from "react";
import { Typography, Box, IconButton } from "@material-ui/core";
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
    padding: theme.spacing(15, 0, 15, 0),
    fontFamily: "Lato",
    fontWeight: "bold",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
  },
  cardTitle: {
    color: "#4da8da",
    fontFamily: "Lato",
    fontWeight: 700,
    justifyContent: "center",
    display: "flex",
    padding: theme.spacing(4, 4, 0, 4),
  },
  iconText: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "2rem",
    marginLeft: "2rem",
    fontSize: "1.3rem",
    fontWeight: 400,
  },
  icon: {
    flex: "0 0 40px",
    marginRight: "1.5rem",
    color: "#007cc7",
  },
  socialIcon: {
    background: "rgba(255, 255, 255, .1)",
    transition: "all .3s ease-in-out",
    color: "#007cc7",
    flex: "0 1 45px",
    display: "flex",
    height: "56px",
    width: "56px",
    alignItems: "center",
    marginRight: "1rem",
    marginLeft: "1rem",
    "&:hover": {
      background: "rgba(255, 255, 255, .7)",
    },
  },
  socialMedia: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    marginLeft: "1rem",
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
          Talk To Me
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
            <Box className={classes.socialMedia}>
              <IconButton
                className={classes.socialIcon}
                href="https://www.linkedin.com/in/freddiehsieh/"
                target="_blank"
              >
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton
                className={classes.socialIcon}
                href="https://github.com/fchsieh"
                target="_blank"
              >
                <GitHub fontSize="large" />
              </IconButton>
              <IconButton
                className={classes.socialIcon}
                href="https://www.facebook.com/fuchening"
                target="_blank"
              >
                <Facebook fontSize="large" />
              </IconButton>
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
