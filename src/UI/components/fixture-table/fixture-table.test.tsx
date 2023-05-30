import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FixtureTable from "./fixture-table.component";

const setup = (fixtureStats: any) =>
  render(
    <BrowserRouter>
      <FixtureTable fixtureStats={fixtureStats} />
    </BrowserRouter>
  );

describe("FixtureTable component", () => {
  it("should render the component correctly", () => {
    const fixtureStats = {
      played: { home: 10, away: 5, total: 15 },
      wins: { home: 7, away: 3, total: 10 },
      draws: { home: 2, away: 2, total: 4 },
      loses: { home: 1, away: 0, total: 1 },
    };

    const { getByText } = setup(fixtureStats);

    expect(getByText("Jogadas")).toBeInTheDocument();
    expect(getByText("Vitórias")).toBeInTheDocument();
    expect(getByText("Empates")).toBeInTheDocument();
    expect(getByText("Derrotas")).toBeInTheDocument();

    expect(getByText("Casa")).toBeInTheDocument();
    expect(getByText("Fora")).toBeInTheDocument();
    expect(getByText("Total")).toBeInTheDocument();
  });
});
