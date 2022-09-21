import React from 'react';
import { 
Box,    
Grid,  
Paper,  
Table, 
TableBody, 
TableCell, 
TableContainer, 
TableHead, 
TableRow, 
Typography 
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


const StyledTypography = styled(Typography)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'flex-end'

}));

type PDFProps = {
    invoiceData?: any;
    buttonTitle?: string;
    buttonColor?: any;
    buttonSize?: any;
    buttonVariant?: any;
}

function PDFGenerator({
    buttonTitle,
    buttonColor,
    buttonSize,
    buttonVariant,
    invoiceData,
}: PDFProps) {

    const generatePDF = (doc: any) => {
      doc = new jsPDF('p', 'pt', 'a4');
      doc.html(document.querySelector('#container'), {
        callback: (pdf: any) => {
            let pageCount = doc.internal.getNumberOfPages();
            pdf.deletePage(pageCount);
            let min = Math.ceil(1234);
            let max = Math.floor(5678);             
            let str = Math.floor(Math.random() * (max - min + 1)) + min;
            let invoiceStr = (`invoice-${str}`);
            pdf.save(`${invoiceStr}.pdf`)
        }
      });
    }
  
    return (
    <>
        <Box sx={{ display: 'flex' }} className="pdf-box" data-testid="test-box">
            <Paper
              elevation={5}
              style={{ margin: '10px', padding: '10px'}}
              className="pdf-paper" 
              data-testid="test-paper"
            >
                <div 
                    style={{ display: 'flex', justifyContent: 'flex-end' }}               
                    className="pdf-div" 
                    data-testid="test-div"
                >
                    <Button 
                       color={buttonColor}
                       size={buttonSize}
                       variant={buttonVariant}
                       onClick={generatePDF}
                       className="pdf-button" 
                       data-testid="test-button"
                    >
                        <PictureAsPdfIcon />&nbsp;{buttonTitle}
                    </Button>
                </div><br />
                {invoiceData.map((value: any, index: number) => (
                    <Box 
                        id="container" 
                        key={index}  
                        style={{width: '595px', height: '852px'}}  
                    > 
                    <div style={{margin: '10px'}} >
                    <Grid container>
                        <Grid item xs={6} >                        
                            <img
                                src='logopdf.png'
                                alt='logo'
                                style={{ width: '100px', height: '100px' }}
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <StyledTypography>Invoice #: {value.invoice}</StyledTypography>
                            <StyledTypography>Created: {value.created}</StyledTypography>
                            <StyledTypography>Due: {value.due}</StyledTypography>
                        </Grid>
                        <Grid item xs={12} sx={{ height: 50 }}> </Grid>
                        <Grid item xs={3}>
                            <Typography>{value.incorporation}</Typography>
                            <Typography>{value.address}</Typography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6} >
                            <StyledTypography>{value.corporation}</StyledTypography>
                            <StyledTypography>{value.name}</StyledTypography>
                            <StyledTypography>{value.email}</StyledTypography>
                        </Grid>
                        <Grid item xs={12} sx={{ height: 50 }}></Grid>
                        <Grid item xs={12} >
                            <TableContainer >
                                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                                    <TableHead sx={{ backgroundColor: 'gainsboro' }}>
                                        <TableRow>
                                            <TableCell><b>Payment Mthod</b></TableCell>
                                            <TableCell align="right"><b>Check#</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Check</TableCell>
                                            <TableCell align="right">{value.check}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={12} sx={{ height: 20 }}></Grid>
                        <Grid item xs={12}>
                            <TableContainer>
                                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                                    <TableHead sx={{ backgroundColor: 'gainsboro' }}>
                                        <TableRow>
                                            <TableCell><b>Item</b></TableCell>
                                            <TableCell align="right"><b>Price#</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Website Design</TableCell>
                                            <TableCell align="right">{value.websiteDesign}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Hosting(3 Months)</TableCell>
                                            <TableCell align="right">{value.hosting}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Domain(1 Year)</TableCell>
                                            <TableCell align="right">{value.domain}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell align="right"><b>Total</b>: {value.total}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>  
                    </div>       
                </Box>
                ))}             
            </Paper>         
        </Box>      
     </>
    )
}

export default PDFGenerator;


