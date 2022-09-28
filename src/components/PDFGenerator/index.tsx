import React, { ReactElement, useEffect } from 'react';
import { 
Box,
} from '@mui/material';
import jsPDF from 'jspdf';


type PDFProps = {
    invoiceData?: ReactElement | string;
    generatePDF?: boolean;
    setGeneratePDF?: any;
}

const PDFGenerator = React.forwardRef(({
    invoiceData,
    generatePDF,
    setGeneratePDF,
}: PDFProps, ref: any) => {

const generatePDFInvoice = () => {
    let doc = new jsPDF('p', 'pt', 'a4');
    const el = ref.current;
    doc.html(el, {
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

useEffect(() => {
    if(generatePDF){
        setGeneratePDF(false);
        generatePDFInvoice();
    }
}, [generatePDF]);
  
return (
    <>
        <Box sx={{ display: 'flex' }} className="pdf-box" data-testid="test-box">
            { invoiceData }          
        </Box>      
    </>
)
})

export default PDFGenerator;


