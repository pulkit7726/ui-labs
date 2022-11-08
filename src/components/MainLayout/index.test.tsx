import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainLayout } from '.';

describe('Component: Main Layout::MainLayout', () => {
  test('should render component with blank list', () => {
    render(
      <MainLayout
        drawer={false}
        authenticate={false}
        containerBgColor="#ccc"
      />,
    );
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
  });
  test('With Auth', () => {
    render(<MainLayout drawer={false} authenticate containerBgColor="#ccc" />);
    expect(screen.getByTestId('auth-container')).toBeInTheDocument();
  });
  test('With Drawer', () => {
    render(<MainLayout drawer authenticate containerBgColor="#ccc" />);
    expect(screen.getByTestId('list')).toBeInTheDocument();
  });
});
