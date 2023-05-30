import React from "react";
import {
  GraphGolsPerMinute,
  Lineups,
  Players,
  ResultTable,
} from "../team-statistics";
import { RouteSelectContentProps } from "./route-select-statistic-fragment.types";

const RouteSelectContent: React.FC<RouteSelectContentProps> = ({ id }) => {
  switch (id) {
    case 1:
      return <Players data-testid="players-component" />;
    case 2:
      return <Lineups data-testid="lineups-component" />;
    case 3:
      return <ResultTable data-testid="result-table-component" />;
    case 4:
      return (
        <GraphGolsPerMinute data-testid="graph-gols-per-minute-component" />
      );
    default:
      return <></>;
  }
};

export default RouteSelectContent;
