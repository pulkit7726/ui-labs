import React, { ReactElement, useRef } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PDFGenerator from "components/PDFGenerator";
import { Box, Button, styled } from "@mui/material";
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
  mainBox?: string;
  name?: string;
  address?: string;
  fileContent?: string;
  logoStr?: string;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end'

}));


const PDFGeneraterStories = (props: PDFProps) => {
  const [generatePDF, setGeneratePDF] = React.useState(false);
  const inputElement: any = useRef();

  const invoiceData =
    <Box style={{ width: '595px', height: '852px' }} ref={inputElement}>
      <div style={{ margin: '10px' }} >
        <Grid container>
          <Grid item xs={6} >
            <img
              src={props.logoStr}
              alt='logo'
              style={{ width: '100px', height: '100px' }}
            />
          </Grid>
          <Grid item xs={6} >
            <StyledTypography><b>{props.name}</b></StyledTypography>
            <StyledTypography><b>{props.address}</b></StyledTypography>
          </Grid>
          <Grid item xs="auto"><input type="text" /></Grid> 
          <Grid item xs={12} sx={{ marginTop: '50px'}}>{props.fileContent}</Grid>
        </Grid>
      </div>
    </Box>

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
  fileContent: '',
  logoStr: 'data:image/png;base64,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'
 
}              