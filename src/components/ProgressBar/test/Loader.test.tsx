import React from "react";
import {render, screen } from '@testing-library/react';
import Loader from "../Loader"

test("should render all circularVariant", () => {
    const { container } = render(
        <Loader color={"secondary"} variant={"determinate"} value={90} />
    );
    expect(container.getElementsByClassName('MuiCircularProgress-svg')).toBeTruthy();

})
test("should render circularDeterminate", () => {
    const { container } = render(
        <Loader color={"secondary"} variant={"determinate"} value={90} />
    );
    expect(container.getElementsByClassName('MuiCircularProgress-circleDeterminate')).toBeTruthy();

})
test("should render circularwithLbel", () => {
    const { container } = render(
        <Loader color={"secondary"} variant={"determinate"} value={90} />
    );
    expect(container.getElementsByClassName('MuiTypography-caption')).toBeTruthy();

})
test("in Loader should render progressbar", () => {
    render(<Loader color={"secondary"} variant={"determinate"} value={90} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
});

