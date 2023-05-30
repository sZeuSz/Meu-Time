import { render } from "@testing-library/react";
import TeamStatisticsSelect from "./team-statistics.component";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "contexts/userContext";

const setup = () =>
  render(
    <BrowserRouter>
      <UserContext.Provider
        value={{
          setUserData: jest.fn(),
          userData: {
            account: {
              firstname: "John",
              lastname: "Doe",
              email: "john.doe@example.com",
              key: "123456789",
            },
            requests: { current: 1, limit_day: 100 },
            subscription: {
              plan: "basic",
              end: "2023-12-31",
              active: true,
            },
            api_key: "",
          },
        }}
      >
        <TeamStatisticsSelect />
      </UserContext.Provider>
    </BrowserRouter>
  );

describe("TeamStatistics page component", () => {
  xit("should render the component correctly", async () => {
    // Implementação do teste será adicionada posteriormente
  });
});
