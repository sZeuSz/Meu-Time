import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Header from "./header.component";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const setup = () => {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("header component", () => {
  it("navigates to home page when logo is clicked", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    const { getByAltText } = setup();

    const logoElement = getByAltText("Meu Time");
    fireEvent.click(logoElement);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it('navigates to contacts page when "Início" link is clicked', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByText } = setup();

    const contactLink = getByText("Início");
    fireEvent.click(contactLink);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it('navigates to contacts page when "Contato" link is clicked', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByText } = setup();

    const contactLink = getByText("Contato");
    fireEvent.click(contactLink);

    expect(navigateMock).toHaveBeenCalledWith("/contacts");
  });

  it('navigates to contacts page when "Sobre" link is clicked', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByText } = setup();

    const contactLink = getByText("Sobre");
    fireEvent.click(contactLink);

    expect(navigateMock).toHaveBeenCalledWith("/about");
  });
});
