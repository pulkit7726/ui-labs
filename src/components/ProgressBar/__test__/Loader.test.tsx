import React from "react";
import {render, screen } from '@testing-library/react';
import Loader from "../Loader"

test("should render all Linear variant", () => {
    render(
        <Loader color={"secondary"} variant={"determinate"} value={90} />
    );
    expect(screen.getByTestId("circle-progress")).toBeTruthy();
})
test("should render progressbar in Loader", () => {
    render(<Loader color={"secondary"} variant={"determinate"} value={90} />);
    expect(screen.getByRole("progressbar")).toBeTruthy();
});
test("should render progressbar", () => {
    render(<Loader color={"secondary"} variant={"determinate"} value={90} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
