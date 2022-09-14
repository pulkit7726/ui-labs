import React, { ReactElement } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import InfiniteScroll from '../index';

export function setupIntersectionObserverMock({
  root = null,
  rootMargin = '',
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => [],
  unobserve = () => null,
} = {}): void {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = root;
    readonly rootMargin: string = rootMargin;
    readonly thresholds: ReadonlyArray < number > = thresholds;
    disconnect: () => void = disconnect;
    observe: (target: Element) => void = observe;
    takeRecords: () => IntersectionObserverEntry[] = takeRecords;
    unobserve: (target: Element) => void = unobserve;
  }

  Object.defineProperty(
    window,
    'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver
    }
  );

  Object.defineProperty(
    global,
    'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver
    }
  );
}

const data = [<div className="first-element">List Starts here</div>];
/* for (let i = 0; i < 10; i++) {
  data.push(
    <div>
        {i}
    </div>)
} */

test("Infinite Scroll component should render", () => {
  const component: any = render(
    <InfiniteScroll isLoading={false} records={data} loadingText={''} end={false} endText={''} />
  );
  const modalElement = component.getByTestId('infinite-scroll');
  expect(modalElement.getElementsByClassName('first-element').length).toBe(1);
})