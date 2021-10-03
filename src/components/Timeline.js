import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { School, Work } from "@material-ui/icons";
import "react-vertical-timeline-component/style.min.css";

import TimelineItems from "./TimelineItems";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {TimelineItems.map((item, key) => {
        return (
          <VerticalTimelineElement
            className={item.className}
            key={key}
            date={item.date}
            icon={item.icon === "work" ? <Work /> : <School />}
            iconStyle={{
              background: "tomato",
              color: "white",
            }}
          >
            <h2 className="vertical-timeline-element-title">{item.title}</h2>
            <h3>{item.location}</h3>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
