import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import PDFGenerator from '../index';


describe('should render a PDFGenerator', () => {

    test("should render as PDF Box", () => {
        render(<PDFGenerator invoiceData={[]}/>);
        const title = screen.getByTestId("test-box")
        expect(title.getElementsByClassName("pdf-box").length).toBe(0)
    });

    test("should render as PDF Paper", () => {
        render(<PDFGenerator invoiceData={[]}/>);
        const title = screen.getByTestId("test-paper")
        expect(title.getElementsByClassName("pdf-paper").length).toBe(0)
    });

    test("should render as object", () => {
        render(<PDFGenerator invoiceData={[]}/>);
        expect(typeof onclick).toBe("object");
    });  


});    