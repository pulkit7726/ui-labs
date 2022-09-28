import React from "react";
import {render,screen} from '@testing-library/react';
import Linear from "../Linear"


test("should render all Linear variant", () => {
    const { container } = render(
        <Linear color={"secondary"} variant={"determinate"} value={90} />
    );
    expect(container.getElementsByClassName('MuiLinearProgress-bar')).toBeTruthy();

})
test("should render buffer variant", () => {
    const { container } = render(
        <Linear color={"secondary"} variant={"determinate"} value={90} />
    );
    expect(container.getElementsByClassName('MuiLinearProgress-buffer')).toBeTruthy();

})
test("should render inderterminate variant", () => {
    const { container } = render(
        <Linear color={"secondary"} variant={"indeterminate"} value={0} />
    );
    expect(container.getElementsByClassName('MuiLinearProgress-bar1Indeterminate')).toBeTruthy();

})
test("in Linear should render progressbar", () => {
    render(<Linear color={"secondary"} variant={"determinate"} value={90} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
});