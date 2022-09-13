import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Notification } from "../Notification";
import { SnackbarProvider } from "notistack";

const mockEnqueue = jest.fn();
const handleClick = jest.fn();
const handleClose = jest.fn();

jest.mock("notistack", () => ({
  ...jest.requireActual("notistack"),
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue,
    };
  },
}));
jest.mock("notistack");

beforeEach(() => {});

test("should render Notififaction component", () => {
  render(<Notification />);
});

it("Notification should wrap in SnackbarProvider  ", async () => {
  const component = render(
    <SnackbarProvider maxSnack={3}>
      <Notification />
    </SnackbarProvider>
  );
  expect(component);
});

test("in Notification component should render Button", () => {
  const Button = render(<Notification />);
  expect(Button.getByRole("button")).toBeInTheDocument();
});

test("in Notification component should render ButtonText", () => {
  const Button = render(<Notification />);
  expect(Button.getByText("click")).toBeInTheDocument();
});

test("renders buttons", async () => {
  render(<Notification />);
  const items = await screen.findAllByRole("button");
  expect(items).toHaveLength(1);
});

test("clicking the button ", () => {
  render(<Notification />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockEnqueue).toHaveBeenCalledTimes(0);
  expect(handleClick).toHaveBeenCalledTimes(0);
  expect(handleClose).toHaveBeenCalledTimes(0);
});

test("should render parent element ", () => {
  const { container } = render(<Notification />);
  expect(container.getElementsByClassName("MuiStack-root").length).toBe(0);
});
