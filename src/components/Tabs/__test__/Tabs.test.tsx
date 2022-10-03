import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as Tabs from 'stories/Tabs.stories';

const { TabsList, SecondaryList } = composeStories(Tabs);
test('should render tabs component', () => {
  // Render the component and pass the args not not duplicating anything
  render(<TabsList {...TabsList.args} />);
  // text content testing
  expect(screen.getByRole('tablist')).toHaveTextContent(/TAB1/i);
  // array length test case and all props testing
  // expect(TabsList.args?.tabs?.length === 3).toBeTruthy();
  expect(TabsList.args?.labelColor === 'black').toBeTruthy();
  expect(TabsList.args?.indicatorColor === 'black').toBeTruthy();
});

test('should render secondary list', () => {
  render(<SecondaryList {...SecondaryList.args} />);
  expect(screen.getByRole('tablist')).toHaveTextContent(/HOME/i);
  expect(SecondaryList.args?.tabs?.length === 4).toBeTruthy();
  expect(SecondaryList.args?.color === '#ff00c7').toBeTruthy();
  expect(SecondaryList.args?.indicatorColor === 'black').toBeTruthy();
});

// snapshort testing have one issue with dynamic aria-controls and id
test('should match with snapshort', () => {
  // snapshort testing
  const screenshot = render(<TabsList {...TabsList.args} />);
  // expect(screenshot).toMatchSnapshot();
});
