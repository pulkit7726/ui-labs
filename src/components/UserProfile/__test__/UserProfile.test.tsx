import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import UserProfile from '../index';
import { data, avatarImage } from '../../../Data/UserProfile.json';

const handleClick = jest.fn();
const handleClose = jest.fn();

test('user profile should render a Button', () => {
    const button = render(<UserProfile
        display='drawer'
        data={data}
        avatarImage={avatarImage}
    />)
    expect(button.getByRole('button')).toBeInTheDocument();
});

test("should render as click event on button", () => {
    render(<UserProfile
        display='drawer'
        data={data}
        avatarImage={avatarImage}
    />)
    const title = screen.getByRole('button');
    fireEvent.click(title);
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(handleClose).toHaveBeenCalledTimes(0);
})

test("should render as Data & Avatar", () => {
    render(<UserProfile
        data={data}
        avatarImage={avatarImage}
    />);
    expect(screen.getByTestId("user-profile")).toBeInTheDocument();
    expect(screen.getAllByTestId("user-profile").length).toBe(1);
});

test("should render as My Account Button Text Value", () => {
    render(<UserProfile
        data={data}
        avatarImage={avatarImage}
        myAccount={'My Account'}
    />);
    expect(screen.getByTestId('user-profile')).toHaveTextContent("My Account");
});

test("should render as Profile Heading", () => {
    render(<UserProfile
        data={data}
        avatarImage={avatarImage}
        profileHeading='View User Profile'
    />);
    const title = screen.getByTestId('custom-main-box');
    expect(title).toBeTruthy();
});










