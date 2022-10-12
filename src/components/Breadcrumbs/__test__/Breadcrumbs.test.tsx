import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumb from '..';

describe('should render a breadcrumbs', () => {
  const list1 = [<div key={0}>Test1</div>, <div key={1}>Test2</div>];

  test('should render a basic', () => {
    render(<Breadcrumb list={list1} />);
    expect(screen.getByTestId('breadcrumb')).toHaveTextContent('Test1/Test2');
  });
});
