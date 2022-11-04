import React from 'react';
import { render, screen } from '@testing-library/react';
import { Image } from '.';

describe('Component: Image::TitleBarImageList', () => {
  test('should render Title Bar Image List component with blank list', () => {
    render(<Image itemData={[]} />);
    expect(screen.getByTestId('main-cotainer')).toBeInTheDocument();
  });
  test('With 2 item', () => {
    render(
      <Image
        itemData={[
          {
            img: 'img',
            title: 'title',
            author: 'author',
            rows: 2,
            cols: 2,
            featured: true,
          },
          {
            img: 'img',
            title: 'title',
            author: 'author',
            rows: 2,
            cols: 2,
            featured: false,
          },
        ]}
      />,
    );
    expect(screen.getByTestId('main-cotainer')).toBeInTheDocument();
    expect(screen.getAllByTestId('item-container').length).toBe(2);
  });
});
