import { render } from "@testing-library/react";
import Form from "./form.component";
import { BrowserRouter } from "react-router-dom";

const setup = () =>
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );

describe("Form page component", () => {});
