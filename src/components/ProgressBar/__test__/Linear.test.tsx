import React from "react";
import {render,screen} from '@testing-library/react';
import Linear from "../Linear"


test("should render all Linear variant", () => {
    render(
        <Linear color={"secondary"} variant={"determinate"} value={90} />
    );
    expect(screen.getByTestId("linear-progress")).toBeTruthy();
})
test("should render progressbar", () => {
    render(
        <Linear color={"secondary"} variant={"indeterminate"} value={0} />
    );
   expect(screen.getByRole("progressbar")).toBeTruthy();
})
test("should render progressbar in Linear variant", () => {
    render(<Linear color={"secondary"} variant={"determinate"} value={90} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
});