import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Socio from "components/socio-login/socio-login";

const onClick = jest.fn();

test("should renders socio component", () => {
  render(<Socio />);
});

test("should render button class ", () => {
  const { container } = render(<Socio />);
  expect(container.getElementsByClassName("MuiButtonBase-root").length).toBe(6);
});

test("should renders signin using text", () => {
  render(<Socio />);
  const text = screen;
  expect(text.getByText(`Sign in using`)).toBeInTheDocument();
});

test("should renders forgot password text", () => {
  render(<Socio />);
  const text = screen;
  expect(text.getByText(`Forgot Password?`)).toBeInTheDocument();
});

test("should render image", () => {
  const image = render(<Socio />);
  expect(image.getAllByRole("img")).screen;
});

test("should render button", () => {
  const button = render(<Socio />);
  expect(button.getAllByRole("button")).screen;
  expect(onClick).toHaveBeenCalledTimes(0);
});

test("should render typography ", () => {
  const { container } = render(<Socio />);
  expect(container.getElementsByClassName("MuiTypography-root").length).toBe(5);
});

test("should render heading", () => {
  const heading= render(<Socio />);
  expect(heading.getAllByRole("heading")).screen;
});
