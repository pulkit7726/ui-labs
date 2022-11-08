import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { composeStories } from '@storybook/testing-react';
import * as PDFGenerator from '../../../stories/PDFGenerater.stories';

const { PDFComponent } = composeStories(PDFGenerator);

test('should render PDF Component Classname', () => {
  render(<PDFComponent {...PDFComponent.args} />);
  const fn = screen.getByTestId('test-box');
  expect(fn.getElementsByClassName('pdf-box').length).toBe(0);
});

test('PDF  button click event', () => {
  const { getByTestId } = render(<PDFComponent {...PDFComponent.args} />);
  fireEvent.click(getByTestId('button'));
});

test('File types not to be empty', () => {
  render(<PDFComponent {...PDFComponent.args} />);
  expect(PDFComponent.args?.buttonTitle === 'Download PDF').toBeTruthy();
  expect(PDFComponent.args?.mainBox === '#container').toBeTruthy();
  expect(
    PDFComponent.args?.name === 'Wavelabs Technologies India',
  ).toBeTruthy();
  expect(
    PDFComponent.args?.address === 'Hyderabad, Telangana 500081',
  ).toBeTruthy();
  expect(PDFComponent?.args?.logoStr?.length).toBeTruthy();
});
