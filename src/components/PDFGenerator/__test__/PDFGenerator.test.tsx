import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import PDFGenerator from '../index';

describe('should render a PDFGenerator', () => {

    test("should render as PDF Box", () => {
        render(<PDFGenerator invoiceData={[]}/>);
        const title = screen.getByTestId("test-box");
        // eslint-disable-next-line testing-library/no-node-access
        expect(title.getElementsByClassName('pdf-box').length).toBe(0)
    });

    test("should render as Name", () => {
        render(<PDFGenerator invoiceData={'Wavelabs Technologies India'}/>);
        const linkElement = screen.getByText(/Wavelabs Technologies India/i);
        expect(linkElement).toBeInTheDocument();    
    });

    test("should render as Address", () => {
        render(<PDFGenerator invoiceData={'Hyderabad, Telangana 500081'}/>);
        const linkElement = screen.getByText(/Hyderabad, Telangana 500081/i);
        expect(linkElement).toBeInTheDocument();    
    });

    test('should render as logo', () => {
        render(<PDFGenerator invoiceData={'images/logopdf.png'} />);
        const linkElement = screen.getByText(/images/i);
        expect(linkElement).toBeInTheDocument(); 
    })

    test("should render as object", () => {
        render(<PDFGenerator invoiceData={[]}/>);
        expect(typeof onclick).toBe("object");
    }); 
});    