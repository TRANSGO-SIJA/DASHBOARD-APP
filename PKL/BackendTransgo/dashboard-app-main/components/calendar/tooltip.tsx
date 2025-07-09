import React from "react";

import { HoverCard, HoverCardTrigger } from "../ui/hover-card";
import TooltipDate from "./tooltip-date";
import TooltipFleet from "./tooltip-fleet";

import { ICalendarData, IUsage } from "./types";

type TTooltipProps =
  | { type: "date"; data: IUsage; children: React.ReactNode }
  | { type: "fleet"; data: ICalendarData; children: React.ReactNode };

const Tooltip = (props: TTooltipProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{props.children}</HoverCardTrigger>
      {props.type === "date" ? (
        <TooltipDate data={props.data} />
      ) : (
        <TooltipFleet data={props.data} />
      )}
    </HoverCard>
  );
};

export default Tooltip;
