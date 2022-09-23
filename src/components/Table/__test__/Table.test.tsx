import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';

const createSortHandler=jest.fn();
const getNewData=jest.fn();

test('Should render properly ', () => {
  render(<Table title={'calories'} tableHeader={[]} totalRecord={30} />);
  const linkElement = screen.getByText(/calories/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render root class", () => {
  const { container } = render(
    <Table title={'calories'} tableHeader={[]} totalRecord={30} />
  );
  expect(container.getElementsByClassName('MuiBox-root').length).toBe(1);
});

test('Should render enpty data message ', () => {
  render(
    <Table title={'calories'} tableHeader={[]} totalRecord={30} emptyDataMsg={"Please provide Data"} />
  );
  const linkElement = screen.getByText(/Please provide Data/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should check the role of RowGroup', () => {
  render(
    <Table title={'calories'} tableHeader={[]} totalRecord={30} />
  );
  const rowgroup = screen.getAllByRole('rowgroup')
  expect(rowgroup).toBeTruthy();
})

test('Should check the Function for createSortHandler', () => {
  render(
    <Table title={'calories'} tableHeader={[]} totalRecord={30} />
  );
  expect(createSortHandler).toHaveBeenCalledTimes(0);
});
  
test('Should check the role of Toolbar', () => {
  render(
    <Table title={'calories'} tableHeader={[]} totalRecord={30} />
  );
  const toolbar = screen.getAllByRole('toolbar')
  expect(toolbar).toBeTruthy();
})

test("should check the classname paginate", () => {
  const { container } = render(
    <Table title={'calories'} tableHeader={[]} totalRecord={30} />
  );
  expect(container.getElementsByClassName('paginate').length).toBe(0);
});

test('checking for the function getnewdata', () => {
  render(
    <Table title={'calories'} tableHeader={[]} totalRecord={30} />
  );
  expect(getNewData).toHaveBeenCalledTimes(0);
});