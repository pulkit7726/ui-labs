import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SnackBar } from "..";
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
  render(<SnackBar open={true} handleClose={()=>{}} />);
});

it("SnackBar should wrap in SnackbarProvider  ", async () => {
  const component = render(
    <SnackbarProvider maxSnack={3}>
      <SnackBar open={true} handleClose={()=>{}} />
    </SnackbarProvider>
  );
  expect(component);
});

test("in SnackBar component should render Button", () => {
  const Button = render(<SnackBar open={true} handleClose={()=>{}} />);
  expect(Button.getByRole("button")).toBeInTheDocument();
});


test("renders buttons", async () => {
  render(<SnackBar open={true} handleClose={()=>{}} />);
  const items = await screen.findAllByRole("button");
  expect(items).toHaveLength(1);
});

test("clicking the button ", () => {
  render(<SnackBar open={true} handleClose={()=>{}} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockEnqueue).toHaveBeenCalledTimes(0);
  expect(handleClick).toHaveBeenCalledTimes(0);
  expect(handleClose).toHaveBeenCalledTimes(0);
});

test("should render parent element ", () => {
  const { container } = render(<SnackBar open={true} handleClose={()=>{}} />);
  expect(container.getElementsByClassName("MuiStack-root").length).toBe(0);
});


