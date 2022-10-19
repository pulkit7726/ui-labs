import React from 'react';
import { render, screen } from '@testing-library/react';
import { data } from 'data/CustomScrollBar.json';
import ScrollBar from '..';

test('should render division tag', () => {
  render(<ScrollBar variant="basic" data={data} />);
  const division = screen.queryByTitle('DivisionTag');
  expect(division).toBeTruthy();
});
test('should render heading tag', () => {
  render(<ScrollBar variant="basic" data={data} />);
  const heading = screen.queryByTitle('headings');
  expect(heading).toBeTruthy();
});
test('should render paragraph tag', () => {
  render(<ScrollBar variant="basic" data={data} />);
  const paragraph = screen.queryAllByTitle('paragraph');
  expect(paragraph).toBeTruthy();
});
