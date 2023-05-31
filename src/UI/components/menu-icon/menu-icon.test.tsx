import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import MenuIcon from "./menu-icon.component";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const setup = () => {
  return render(
    <BrowserRouter>
      <MenuIcon />
    </BrowserRouter>
  );
};

describe("menu icon component", () => {
  it('navigates to home page when "Início" link is clicked', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByText, getByTestId } = setup();

    const menuIcon = getByTestId("menu-icon");
    fireEvent.click(menuIcon);

    const homeLink = getByText("Início");
    fireEvent.click(homeLink);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it('navigates to contacts page when "Contato" link is clicked', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByText, getByTestId } = setup();

    const menuIcon = getByTestId("menu-icon");
    fireEvent.click(menuIcon);

    const contactLink = getByText("Contato");
    fireEvent.click(contactLink);

    expect(navigateMock).toHaveBeenCalledWith("/contacts");
  });

  it('navigates to about page when "Sobre" link is clicked', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const { getByText, getByTestId } = setup();

    const menuIcon = getByTestId("menu-icon");
    fireEvent.click(menuIcon);

    const aboutLink = getByText("Sobre");
    fireEvent.click(aboutLink);

    expect(navigateMock).toHaveBeenCalledWith("/about");
  });
});
