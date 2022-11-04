import React, { ReactElement, useEffect } from 'react';
import { Box } from '@mui/material';
import jsPDF from 'jspdf';

type PDFProps = {
  documentContent?: ReactElement | string;
  generatePDF?: boolean;
  setGeneratePDF?: any;
};

const PDFGenerator = React.forwardRef(
  ({ documentContent, generatePDF, setGeneratePDF }: PDFProps, ref: any) => {
    const generatePDFInvoice = () => {
      const doc = new jsPDF('p', 'pt', 'a4');
      const el = ref.current;
      doc.html(el, {
        callback: (pdf: any) => {
          const pageCount = doc.internal.pages;
          pdf.deletePage(pageCount.length - 1);
          const min = Math.ceil(1234);
          const max = Math.floor(5678);
          const str = Math.floor(Math.random() * (max - min + 1)) + min;
          const invoiceStr = `invoice-${str}`;
          pdf.save(`${invoiceStr}.pdf`);
        },
      });
    };

    useEffect(() => {
      if (generatePDF) {
        setGeneratePDF(false);
        generatePDFInvoice();
      }
    }, [generatePDF]);

    return (
      <Box className="pdf-box" data-testid="test-box">
        {documentContent}
      </Box>
    );
  },
);

export default PDFGenerator;
