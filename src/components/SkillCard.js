import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}));

const SkillCard = (name, image) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardRoot}>
      <CardMedia
        component="img"
        image={image}
        title={name}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
