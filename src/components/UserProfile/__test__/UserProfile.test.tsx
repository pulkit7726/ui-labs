import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import UserProfile from '../index';
import { data, avatarImage } from '../../../Data/UserProfile.json'


test("should render as Data & Avatar", () => {
    render(<UserProfile
        data={data}
        avatarImage={avatarImage}
    />);
    expect(screen.getByTestId("user-profile")).toBeInTheDocument();
    expect(screen.getAllByTestId("user-profile").length).toBe(1);
});

test("should render as Button Text Value", () => {
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










