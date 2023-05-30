import React from "react";
import { render } from "@testing-library/react";
import Graph from "./graph.component";
import "resize-observer-polyfill";
import "resize-observer-polyfill/dist/ResizeObserver.global";

const setup = (stats: any) => {
  return render(<Graph stats={stats} />);
};
describe("Graph component", () => {
  it("should render the component correctly", () => {
    const stats = {
      stat1: {
        total: 10,
        percentage: "50%",
      },
      stat2: {
        total: 20,
        percentage: "70%",
      },
    };

    setup(stats);

    const canvasElement = document.querySelector("canvas");
    expect(canvasElement).toBeInTheDocument();
  });
});
