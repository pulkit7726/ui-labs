import React from 'react';
import { render, screen } from '@testing-library/react';
import SlickSlider from './SlickSlider';
import PortalProvider from '../providers/PortalProvider';

describe('Component: SlickSlider::Card Slider', () => {
  test('should render Card image Slider', () => {
    render(<SlickSlider images={[]} cardType="" cardSize="" />);
    expect(screen.getByTestId('main-cotainer')).toBeInTheDocument();
  });
  test('With 2 Cards', () => {
    render(
      <PortalProvider>
        <SlickSlider
          images={[
            {
              backdrop_path: 'backdrop_path',
              id: 1,
              original_title: 'original_title',
              overview: 'overview',
              title: 'title',
            },
            {
              backdrop_path: 'backdrop_path',
              id: 1,
              original_title: 'original_title',
              overview: 'overview',
              title: 'title',
            },
          ]}
          cardType=""
          cardSize=""
        />
      </PortalProvider>
    );
    expect(screen.getByTestId('main-cotainer')).toBeInTheDocument();
  });

  test('With 2 cards Grid Slider', () => {
    render(
      <PortalProvider>
        <SlickSlider
          images={[
            {
              backdrop_path: 'backdrop_path',
              id: 1,
              original_title: 'original_title',
              overview: 'overview',
              title: 'title',
            },
            {
              backdrop_path: 'backdrop_path',
              id: 1,
              original_title: 'original_title',
              overview: 'overview',
              title: 'title',
            },
          ]}
          cardType="Grid Slider"
          cardSize=""
        />
      </PortalProvider>
    );
    expect(screen.getByTestId('grid-container')).toBeInTheDocument();
  });
  test('With 2 cards Vertical Slider', () => {
    render(
      <PortalProvider>
        <SlickSlider
          images={[
            {
              backdrop_path: 'backdrop_path',
              id: 1,
              original_title: 'original_title',
              overview: 'overview',
              title: 'title',
            },
            {
              backdrop_path: 'backdrop_path',
              id: 1,
              original_title: 'original_title',
              overview: 'overview',
              title: 'title',
            },
          ]}
          cardType="Vertical Slider"
          cardSize=""
        />
      </PortalProvider>
    );
    expect(screen.getByTestId('vertical-container')).toBeInTheDocument();
  });
  test('With 2 cards Horizontal Slider', () => {
    render(
      <PortalProvider>
        <SlickSlider
          images={[
            {
              backdrop_path: 'backdrop_path',
              id: 1,
              original_title: 'original_title',
              overview: 'overview',
              title: 'title',
            },
            {
              backdrop_path: 'backdrop_path',
              id: 1,
              original_title: 'original_title',
              overview: 'overview',
              title: 'title',
            },
          ]}
          cardType="Horizontal Slider"
          cardSize=""
        />
      </PortalProvider>
    );
    expect(screen.getByTestId('horizontal-container')).toBeInTheDocument();
  });
});
