import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from '@storybook/testing-react';
import * as  Tabs  from "stories/Tabs.stories";
const { TabsList } = composeStories(Tabs)

test('should render tabs component',()=>{
    render(<TabsList tabs={[ {
        label: "TAB1",
        index: "1",
        description: "Tab1 details"
      }]}/>)
     expect(screen.getByRole('tablist')).toHaveTextContent(/TAB1/i);
})

test('should check the length of tabs', ()=> {
    render(<TabsList/>)
    expect(TabsList.args?.tabs?.length === 3).toBeTruthy();
    expect(TabsList.args?.labelColor === "black").toBeTruthy();
    expect(TabsList.args?.indicatorColor === "black").toBeTruthy();
})
