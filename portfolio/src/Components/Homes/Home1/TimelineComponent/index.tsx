import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Fastfood, LaptopMac, Hotel, RepeatOn } from "@mui/icons-material";

import { Typography } from "@mui/material";
import Card from "./Card.tsx";
import { EXP_DATA } from "./constant.ts";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
          2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            <Card {...EXP_DATA[0]} />
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
          2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            py: "12px",
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <Typography variant="h6" component="span">
            <Card {...EXP_DATA[1]} />
          </Typography>
        </TimelineContent>
      </TimelineItem>{" "}
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
          2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          {/* <Typography variant="h6" align="right"> */}
          <Card {...EXP_DATA[2]} />
          {/* </Typography> */}
        </TimelineContent>
      </TimelineItem>{" "}
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
          2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            py: "12px",
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <Typography variant="h6" component="span">
            <Card {...EXP_DATA[3]} />
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
