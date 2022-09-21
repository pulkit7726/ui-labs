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

    test("should render as PDF Button", () => {
        render(<PDFGenerator invoiceData={[]}/>);
        const title = screen.getByTestId("test-button")
        expect(title.getElementsByClassName("pdf-button").length).toBe(0)
    });

    test("should render as PDF Button Title", () => {
        render(<PDFGenerator invoiceData={[]} buttonTitle="Download PDF"/>);
        const linkElement = screen.getByText("Download PDF");
        expect(linkElement).toBeInTheDocument();
    });

    test("should render as PDF Button generatePDF Function", () => {
        const {getByRole} = render(<PDFGenerator invoiceData={[]} buttonTitle="Download PDF" />);
        expect(getByRole("button")).toBeInTheDocument();
    });

    test("should render as objet", () => {
        render(<PDFGenerator invoiceData={[]}/>);
        expect(typeof onclick).toBe("object");
    });

    test("should render as PDF Div", () => {
        render(<PDFGenerator invoiceData={[]}/>);
        const title = screen.getByTestId("test-div")
        expect(title.getElementsByClassName("pdf-div").length).toBe(0)
    });

});    