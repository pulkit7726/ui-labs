import React, { ReactElement } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import InfiniteScroll from '../index';

//** this block is added to mock behaviour of intersection observer as it fails while writting the test cases in react-testing library  */

beforeEach(() => {
  const mockIntersectionObserver = jest.fn()
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn().mockReturnValue(null),
    unobserve: jest.fn().mockReturnValue(null),
    disconnect: jest.fn().mockReturnValue(null)
  })
  window.IntersectionObserver = mockIntersectionObserver
});

const data = [<div className="first-element">List Starts here</div>];

test("Infinite Scroll component should render", () => {
  render(
    <InfiniteScroll isLoading={false} records={data} loadingText={''} end={false} endText={''} />
  );
  const modalElement = screen.getByTestId('infinite-scroll');
  // eslint-disable-next-line testing-library/no-node-access
  expect(modalElement.getElementsByClassName('first-element').length).toBe(1);
}); 

test("Infinite Scroll component Text Field should render", () => {
  render(
    <InfiniteScroll isLoading={false} records={data} loadingText={''} end={false} endText={''} />
  );
  expect(screen.getByTestId('infinite-scroll')).toHaveTextContent("List Starts here"); 
}); 
