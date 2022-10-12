import React from 'react';
import { render, screen } from '@testing-library/react';
import ScrollBar from '../ScrollBar';

test('should render division tag', () => {
  render(<ScrollBar variant="basic" />);
  const division = screen.queryByTitle('DivisionTag');
  expect(division).toBeTruthy();
});
test('should render heading tag', () => {
  render(<ScrollBar variant="basic" />);
  const heading = screen.queryByTitle('headings');
  expect(heading).toBeTruthy();
});
test('should render paragraph tag', () => {
  render(<ScrollBar variant="basic" />);
  const paragraph = screen.queryAllByTitle('paragraph');
  expect(paragraph).toBeTruthy();
});
