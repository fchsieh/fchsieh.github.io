import { React, useState } from "react";
import {
  Typography,
  Box,
  IconButton,
  Button,
  TextField,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  LocalPhoneRounded,
  AlternateEmailRounded,
  ExploreRounded,
  Facebook,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { BrowserView, MobileView } from "react-device-detect";

import "./Contact.scss";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#4da8da",
    textAlign: "center",
    paddingBottom: "5rem",
  },
  mobileTitle: {
    color: "#4da8da",
    textAlign: "center",
    paddingBottom: "2rem",
  },
  section: {
    paddingTop: "8rem",
    paddingBottom: "8rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
  },
  cardTitle: {
    color: "#4da8da",
    justifyContent: "center",
    display: "flex",
    paddingTop: "3rem",
  },
  iconText: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "2rem",
    marginLeft: "2rem",
    fontSize: "1.3rem",
    fontFamily: "Lato",
  },
  icon: {
    flex: "0 0 40px",
    marginRight: "1.5rem",
    color: "#4da8da",
  },
  socialIcon: {
    background: "rgba(255, 255, 255, .2)",
    transition: "all .3s ease-in-out",
    color: "#4da8da",
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
  buttonBox: {
    alignItems: "flex-end !important",
    display: "flex",
  },
  button: {
    width: "200px",
    height: "60px",
    cursor: "pointer",
    background: "#007cc7",
    color: "#eefbfb",
    border: "none",
    textTransform: "uppercase",
    borderRadius: "10px",
    fontSize: "1.2rem",
  },
  mobileInput: {
    background: "rgba(255,255,255,.9)",
    backdropFilter: "blur(25px)",
    fontSize: "1.5rem",
    margin: "0.5rem",
    padding: "0.3rem",
  },
  mobileMessage: {
    background: "rgba(255,255,255,.9)",
    backdropFilter: "blur(25px)",
    fontSize: "1.5rem",
    height: "10rem",
    margin: "0.5rem",
    padding: "1rem",
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
      <BrowserView>
        <Box className={classes.section}>
          <Typography variant="h3" className={classes.title}>
            Talk <span style={{ color: "#eefbfb" }}>to</span> Me
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
                  <input
                    type="text"
                    onChange={(e) => setFirst(e.target.value)}
                  />
                </Box>
                <Box className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    onChange={(e) => setLast(e.target.value)}
                  />
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
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                  />
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
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "0 1 100%",
                  alignItems: "flex-end",
                }}
              >
                <Box className={classes.buttonBox}>
                  <Button className={classes.button} type="submit">
                    Send Message
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </BrowserView>
      <MobileView>
        <Box className={classes.section}>
          <Typography variant="h3" className={classes.mobileTitle}>
            Talk <span style={{ color: "#eefbfb" }}>to</span> Me
          </Typography>
          <Box
            component="form"
            onSubmit={submitForm}
            style={{
              backdropFilter: "blur(45px)",
              padding: "3rem",
            }}
          >
            <Input
              placeholder="First Name"
              className={classes.mobileInput}
              onChange={(e) => setFirst(e.target.value)}
            />
            <Input
              placeholder="Last Name"
              className={classes.mobileInput}
              onChange={(e) => setLast(e.target.value)}
            />
            <Input
              placeholder="Email"
              className={classes.mobileInput}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Phone#"
              className={classes.mobileInput}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              multiline
              rows={5}
              label="Message"
              className={classes.mobileMessage}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className={classes.button}
              style={{ marginTop: "1rem" }}
              type="submit"
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </MobileView>
    </>
  );
};

export default Contact;
