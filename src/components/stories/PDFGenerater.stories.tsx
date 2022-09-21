import React, { ReactElement } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PDFGenerator from "components/PDFGenerator";

type PDFProps = {
  buttonTitle?: string;
  buttonColor?: any;
  buttonSize?: any;
  buttonVariant?: any;
  invoiceData?: any;
  
}
const invoiceData = [
  { 
      "id": "101", 
      "invoice": "123456", 
      "created": "Jaunary 1, 2015", 
      "due": "February 1, 2015", 
      "check": "1000",
      "name": "Jaun Deo",
      "corporation": "Acme Corp",
      "email": "jaun@example.com",
      "incorporation": "Sparksuit Inc,",
      "address": "1234 Sunny Road, Sunnyville CA, 12345", 
      "websiteDesign": "$300",
      "hosting": "$75",
      "domain": "$10",
      "total": "$385",
  },
];

const PDFGeneraterStories = (props: PDFProps) => {
   
  return (<>
    <PDFGenerator invoiceData={invoiceData} {...props} />
  </>)
}


export default {
  title: 'PDF Generator',
  onClose: () => { },
  argTypes: {
    buttonColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'info', 'warning'],
      },
    },
    buttonSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    buttonVariant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  }  
} as ComponentMeta<typeof PDFGeneraterStories>;


const Template: ComponentStory<typeof PDFGeneraterStories> = (args) => <PDFGeneraterStories {...args} />;


export const PDFComponent = Template.bind({});
PDFComponent.args = {
  buttonTitle: 'Download PDF',
}              