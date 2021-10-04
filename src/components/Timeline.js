import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { School, Work } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-vertical-timeline-component/style.min.css";

import TimelineItems from "./TimelineItems";

const useStyles = makeStyles((theme) => ({
  timeline: {
    background: "transparent",
    backdropFilter: "blur(35px)",
  },
  date: {
    color: "#fff",
    fontSize: "2rem",
  },
}));

const Timeline = () => {
  const classes = useStyles();
  return (
    <Box className={classes.timeline}>
      <VerticalTimeline>
        {TimelineItems.map((item, key) => {
          return (
            <VerticalTimelineElement
              className={item.className}
              key={key}
              date={item.date}
              dateClassName={classes.date}
              icon={item.icon === "work" ? <Work /> : <School />}
              iconStyle={{
                background: "tomato",
                color: "white",
              }}
            >
              <h2 className="vertical-timeline-element-title">{item.title}</h2>
              <h3 className="vertical-timeline-element-subtitle">
                {item.location}
              </h3>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Box>
  );
};

export default Timeline;
