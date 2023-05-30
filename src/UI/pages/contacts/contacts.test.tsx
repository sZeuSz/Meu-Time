import { render } from "@testing-library/react";
import Contacts from "./contacts.component";
import { BrowserRouter } from "react-router-dom";

const setup = () =>
  render(
    <BrowserRouter>
      <Contacts />
    </BrowserRouter>
  );

describe("Contats page component", () => {
  it("should render the component correctly", () => {
    const { getByText, getByAltText } = setup();

    const Email = "Email: rosenosilva20@gmail.com";
    const name = "Roseno Silva";
    const Title = "Informações de Contato";
    const image: any = getByAltText("imagem de Roseno Silva");

    expect(image).toBeInTheDocument();
    expect(image.src).toBe(
      "https://avatars.githubusercontent.com/u/70597064?s=400&u=d01b9c83653166111660dd29593ca14f936cb631&v=4"
    );
    expect(getByText(Email)).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(Title)).toBeInTheDocument();
  });
});
