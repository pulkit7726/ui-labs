import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';

const tableHeader = [
    {id: "name",numeric: false,disablePadding: false,label: "Dessert (100g serving)"},
    { id: "calories", numeric: false, disablePadding: false, label: "Calories" },
    { id: "fat", numeric: false, disablePadding: false, label: "Fat (g)" },
    { id: "carbs", numeric: false, disablePadding: false, label: "Carbs (g)" },
    { id: "protein", numeric: false, disablePadding: false, label: "Protein (g)" }
]

test('Should render properly ', () => {
  render(<Table title={'calories'} tableHeader={[]} totalRecord={30} />);
  const linkElement = screen.getByText(/calories/i);
  expect(linkElement).toBeInTheDocument();
});
