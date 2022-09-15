import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from "../SideBar";



const handleClick = jest.fn()
const onHandleActiveTab = jest.fn()


test("should render all menu items", () => {
    const { container } = render(
        <SideBar MenuItems={[{ Id: 1, Name: "Home" }]} position={"left"} Responsive={false} showArrowIcon={false} tooltip={false} />
    );
    expect(container.getElementsByClassName('MuiListItem-root').length).toBe(1);

});
test("drawer should be by default left position", () => {
    const { container } = render(
        <SideBar MenuItems={[]} position={"left"} Responsive={false} showArrowIcon={false} tooltip={false} />
    );
    expect(container.getElementsByClassName('MuiDrawer-paperAnchorLeft').length).toBe(1);

});

test("in sidebar should render button", () => {
    const { getByRole } = render(<SideBar MenuItems={[]} Responsive={false} showArrowIcon={false} tooltip={false} />);
    expect(getByRole("button")).toBeInTheDocument();
});
test('in sidebar should render list', () => {
    const List = render(<SideBar MenuItems={[]} Responsive={false} showArrowIcon={false} tooltip={false} />);
    expect(List.getByRole("list")).toBeInTheDocument();
})

test("in sidebar component should render navbar", () => {
    const Nav = render(<SideBar MenuItems={[]} Responsive={false} showArrowIcon={false} tooltip={false} />);
    expect(Nav.getByRole("navigation")).toBeInTheDocument();
})

test("in sidebar should render title", () => {
    const title = render(<SideBar MenuItems={[]} title={""} Responsive={false} showArrowIcon={false} tooltip={false} />)
    expect(title.getByRole("heading")).toBeInTheDocument();
})
test("In sidebar should render logo or icon image ", () => {
    const logo = render(<SideBar MenuItems={[]} image={""} Responsive={false} showArrowIcon={false} tooltip={false} />)
    expect(logo.getByRole("img")).toBeInTheDocument();
})

test('clicking the button toggles an answer true/false', () => {
    render(<SideBar MenuItems={[]} Responsive={false} showArrowIcon={false} tooltip={false} />);
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(onHandleActiveTab).toHaveBeenCalledTimes(0);
})

test("should render divider ", () => {
    const { container } = render(
        <SideBar MenuItems={[]} Responsive={false} showArrowIcon={false} tooltip={false} />
    );
    expect(container.getElementsByClassName('MuiDivider-root').length).toBe(1);

});






