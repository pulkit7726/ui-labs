import React, { ReactElement, useRef } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PDFGenerator from "components/PDFGenerator";
import { Button, styled } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {
  Grid,
  Typography
} from '@mui/material';

type PDFProps = {
  buttonTitle?: string;
  buttonColor?: any;
  buttonSize?: any;
  buttonVariant?: any;
  invoiceData?: any;
  mainBox?: any;
  invoiceContent?: any;
  name?: string;
  address?: string;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end'

}));



const PDFGeneraterStories = (props: PDFProps) => {
  const [generatePDF, setGeneratePDF] = React.useState(false);
  const inputElement: any = useRef();

  const invoiceData =
      <div style={{ margin: '10px', width: '595px', height: '872px' }} ref={inputElement}>
        <Grid container>
          <Grid item xs={6} >
            <img
              src='images/logopdf.png'
              alt='logo'
              style={{ width: '100px', height: '100px' }}
            />
          </Grid>
          <Grid item xs={6} >
            <StyledTypography><b>{props.name}</b></StyledTypography>
            <StyledTypography><b>{props.address}</b></StyledTypography>
          </Grid>
          <Grid item xs="auto"><input type="text" /></Grid> 
        </Grid>
      </div>

  return (<>
    <Button
      color={props.buttonColor}
      size={props.buttonSize}
      variant={props.buttonVariant}
      onClick={() => setGeneratePDF(!generatePDF)}
    >
      <PictureAsPdfIcon />&nbsp;{props.buttonTitle}
    </Button>
    <PDFGenerator ref={inputElement} invoiceData={invoiceData} {...props} generatePDF={generatePDF} setGeneratePDF={setGeneratePDF} />
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
  mainBox: '#container',
  name: 'Wavelabs Technologies India',
  address: 'Hyderabad, Telangana 500081',
 
}              