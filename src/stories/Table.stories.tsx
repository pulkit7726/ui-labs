import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableMemo, { TableComponent } from '../components/Table/Table';

export default {
  title: 'Table',
  component: TableComponent,
} as ComponentMeta<typeof TableComponent>;

const tableHeader = [
  {
    id: 'name', numeric: false, disablePadding: false, label: 'Dessert (100g serving)',
  },
  {
    id: 'calories', numeric: false, disablePadding: false, label: 'Calories',
  },
  {
    id: 'fat', numeric: false, disablePadding: false, label: 'Fat (g)',
  },
  {
    id: 'carbs', numeric: false, disablePadding: false, label: 'Carbs (g)',
  },
  {
    id: 'protein', numeric: false, disablePadding: false, label: 'Protein (g)',
  },
];

const fakeData = [
  {
    name: 'a', calories: 305, fat: 3.7, carbs: 67, protein: 4.3,
  },
  {
    name: 'f', calories: 452, fat: 25.0, carbs: 51, protein: 4.3,
  },
  {
    name: 'd', calories: 262, fat: 16.0, carbs: 24, protein: 6.0,
  },
  {
    name: 'j', calories: 159, fat: 6.0, carbs: 24, protein: 4.0,
  },
  {
    name: 'c', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'i', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'k', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 'b', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'g', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'n', calories: 305, fat: 3.7, carbs: 67, protein: 4.3,
  },
  {
    name: 'h', calories: 452, fat: 25.0, carbs: 51, protein: 4.3,
  },
  {
    name: 'm', calories: 262, fat: 16.0, carbs: 24, protein: 6.0,
  },
  {
    name: 'z', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'y', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'l', calories: 159, fat: 6.0, carbs: 24, protein: 4.0,
  },
  {
    name: 'o', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'r', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'p', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 's', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'q', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 't', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'u', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'x', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 'w', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'v', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'aa', calories: 305, fat: 3.7, carbs: 67, protein: 4.3,
  },
  {
    name: 'fa', calories: 452, fat: 25.0, carbs: 51, protein: 4.3,
  },
  {
    name: 'da', calories: 262, fat: 16.0, carbs: 24, protein: 6.0,
  },
  {
    name: 'ja', calories: 159, fat: 6.0, carbs: 24, protein: 4.0,
  },
  {
    name: 'ca', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'ia', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'ka', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 'ba', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'ga', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'na', calories: 305, fat: 3.7, carbs: 67, protein: 4.3,
  },
  {
    name: 'ha', calories: 452, fat: 25.0, carbs: 51, protein: 4.3,
  },
  {
    name: 'ma', calories: 262, fat: 16.0, carbs: 24, protein: 6.0,
  },
  {
    name: 'za', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'ya', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'la', calories: 159, fat: 6.0, carbs: 24, protein: 4.0,
  },
  {
    name: 'oa', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'ra', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'pa', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 'sa', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'qa', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'ta', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'ua', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'xa', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 'wa', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'va', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'ab', calories: 305, fat: 3.7, carbs: 67, protein: 4.3,
  },
  {
    name: 'fb', calories: 452, fat: 25.0, carbs: 51, protein: 4.3,
  },
  {
    name: 'db', calories: 262, fat: 16.0, carbs: 24, protein: 6.0,
  },
  {
    name: 'jb', calories: 159, fat: 6.0, carbs: 24, protein: 4.0,
  },
  {
    name: 'cb', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'ib', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'kb', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 'bb', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'gb', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'nb', calories: 305, fat: 3.7, carbs: 67, protein: 4.3,
  },
  {
    name: 'hb', calories: 452, fat: 25.0, carbs: 51, protein: 4.3,
  },
  {
    name: 'mb', calories: 262, fat: 16.0, carbs: 24, protein: 6.0,
  },
  {
    name: 'zb', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'yb', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'lb', calories: 159, fat: 6.0, carbs: 24, protein: 4.0,
  },
  {
    name: 'ob', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'rb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'pb', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 'sb', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'qb', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
  {
    name: 'tb', calories: 356, fat: 16.0, carbs: 49, protein: 3.9,
  },
  {
    name: 'ub', calories: 408, fat: 3.2, carbs: 87, protein: 6.5,
  },
  {
    name: 'xb', calories: 237, fat: 9.0, carbs: 37, protein: 4.3,
  },
  {
    name: 'wb', calories: 375, fat: 0.0, carbs: 94, protein: 0.0,
  },
  {
    name: 'vb', calories: 518, fat: 26.0, carbs: 65, protein: 7.0,
  },
];

const totalRecords = 75;

const getPaginatedData = (pageNum: number, pageSize: number) => {
  // To the server send pageNum, pageSize data and get paginated records
  const offsetFrom = pageNum * pageSize;
  const offsetTo = pageSize * (pageNum + 1);

  return fakeData.slice(offsetFrom, offsetTo);
};

const Template: ComponentStory<typeof TableComponent> = (args) => <TableMemo {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Calories List',
  tableData: fakeData.slice(0, 10),
  tableHeader,
  tableSize: 'medium',
  totalRecord: totalRecords,
  columnFilter: true,
};

export const Stripe_Hover = Template.bind({});
Stripe_Hover.args = {
  title: 'Calories List',
  tableData: fakeData.slice(0, 10),
  tableHeader,
  totalRecord: totalRecords,
  tableHeaderBackground: '#f09999',
  tableHeaderColor: '#471111',
  stripe: true,
  hover: true,
};

export const EmptyData = Template.bind({});
EmptyData.args = {
  title: 'Calories List',
  tableHeader,
  stripe: true,
  hover: true,
  emptyDataMsg: 'Please provide Data',
  tableHeaderBackground: '#580808',
};

export const Pagination = Template.bind({});
Pagination.args = {
  title: 'Calories List',
  tableData: fakeData.slice(0, 5),
  tableHeader,
  totalRecord: totalRecords,
  hover: true,
  pagination: true,
  getPaginatedDataFn: getPaginatedData,
};

export const SearchTable = Template.bind({});
SearchTable.args = {
  title: 'Calories List',
  tableData: fakeData.slice(0, 10),
  tableHeader,
  totalRecord: totalRecords,
  tableSize: 'medium',
  search: true,
};

export const ExportData = Template.bind({});
ExportData.args = {
  title: 'Calories List',
  tableData: fakeData.slice(0, 10),
  tableHeader,
  totalRecord: totalRecords,
  tableSize: 'medium',
  search: true,
  exportData: true,
};
