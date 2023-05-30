import React from "react";
import {
  GraphGolsPerMinute,
  Lineups,
  Players,
  ResultTable,
} from "../team-statistics";
import { RouteSelectContentProps } from "./route-select-statistic-fragment.types";

const RouteSelectContent: React.FC<RouteSelectContentProps> = ({ id }) => {
  console.log("fale", id);
  switch (id) {
    case 1:
      return <Players />;
    case 2:
      return <Lineups />;
    case 3:
      return <ResultTable />;
    case 4:
      return <GraphGolsPerMinute />;
    default:
      return <></>;
  }
};

export default RouteSelectContent;
