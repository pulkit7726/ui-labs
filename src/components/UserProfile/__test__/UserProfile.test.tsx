import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { composeStories } from "@storybook/testing-react";
import UserProfile from '../index';
//import * as UserProfile from '../../../stories/UserProfile.stories';
//const { BasicProfile } = composeStories(UserProfile)

const avatarImage = {
    avatarImg: ""
}

test("should render as Avatar Image", () => {
    render(<UserProfile data={[]} avatarImage={avatarImage.avatarImg} />);
    expect(screen.getByTestId("user-profile")).toBeInTheDocument();
});

test("should render as Button Text Value", () => {
    render(<UserProfile data={[]} avatarImage={avatarImage.avatarImg} />);
    expect(screen.getByTestId('user-profile')).toHaveTextContent("My Account");
});

test("should render as InnerClassName", () => {
    render(<UserProfile data={[]} avatarImage={avatarImage.avatarImg} profileHeading='View User Profile' />);
    const title = screen.getByTestId('custom-main-box');
    expect(title).toBeTruthy();
});










