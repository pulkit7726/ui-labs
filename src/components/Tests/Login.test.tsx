import React from "react";
import {render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as Login from 'stories/sociologin.stories'
const {List} = composeStories(Login)
test("should renders List component", () => {
  render(<List {...List.args } /> )
});
test("should render button class ", () => {
  const { container } = render(<List {...List.args }/>);
  expect(container.getElementsByClassName("MuiButtonBase-root").length).toBe(5);
});
test("should renders signin using text", () => {
  render(<List {...List.args} />);
  const text = screen;
  expect(text.getByText(`Sign up with Email`)).toBeInTheDocument();
});
test("should render image", () => {
  const image = render(<List {...List.args} />);
  expect(image.getAllByRole("img")).screen;
});
test("should render button", () => {
  const button = render(<List {...List.args} />);
  expect(button.getAllByRole("button")).screen;
});
test("should render typography ", () => {
  const { container } = render(<List {...List.args} />);
  expect(container.getElementsByClassName("MuiTypography-root").length).toBe(1);
});


