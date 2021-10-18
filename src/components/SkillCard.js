import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    backgroundColor: "transparent",
    border: "5px solid #eefbfb",
    height: "220px",
    width: "150px",
  },
  imgBox: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  media: {
    padding: "20px",
    maxHeight: "120px",
    width: "auto",
  },
  cardText: {
    fontFamily: "Lato",
    color: "#eefbfb",
    fontSize: "1.5rem",
  },
}));

const SkillCard = ({ skill, image }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardRoot} variant="outlined">
      <Box className={classes.imgBox}>
        <CardMedia
          title={skill}
          component="img"
          src={image}
          className={classes.media}
        />
      </Box>
      <CardContent>
        <Typography className={classes.cardText} variant="h6">
          {skill}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
