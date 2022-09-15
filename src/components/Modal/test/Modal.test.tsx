import React, { ReactElement } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import Modal from '../index';


describe('should render a Modal', () => {
    
    const trueRule = jest.fn(() => true);

    test("should render as objet", () => {
        render(<Modal />);
        expect(typeof onclose).toBe("object");
    });

    test("should render as CssDialog", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("CssDialog-fullScreen")
        expect(title.getElementsByClassName("CssDialog").length).toBe(0)
    });

    test("should render as CssDialog-box", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-box")
        expect(title.getElementsByClassName("CssDialog-box").length).toBe(0)
    });

    test("should render as CssDialog-appbar", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-appbar")
        expect(title.getElementsByClassName("CssDialog-appbar").length).toBe(0)
    });

    test("should render as CssDialog-toolbar", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-toolbar")
        expect(title.getElementsByClassName("CssDialog-toolbar").length).toBe(0)
    });
    
    test("should render as CssDialog-grid", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-grid")
        expect(title.getElementsByClassName("CssDialog-grid").length).toBe(0)
    });

    test("should render as CssDialog-tooltip-title", () => {
        render(<Modal title={'Dialog/Popup Heading'} fullScreen={true} show={true}/>);
        const linkElement = screen.getByText('Dialog/Popup Heading');
        expect(linkElement).toBeInTheDocument();    
    });

    test("should render as CssDialog-IconButton", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-iconButton")
        expect(title.getElementsByClassName("CssDialog-iconButton").length).toBe(0)
    });
     
    test("should render as CssDialog-content", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-content")
        expect(title.getElementsByClassName("CssDialog-content").length).toBe(0)
    });

    test("should render as CssDialog-title", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-title")
        expect(title.getElementsByClassName("CssDialog-title").length).toBe(0)
    });

    test("should render as CssDialog-body", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-body")
        expect(title.getElementsByClassName("CssDialog-body").length).toBe(0)
    });

    test("should render as CssDialog-typography", () => {
        render(<Modal fullScreen={true} show={true}/>);
        const title = screen.getByTestId("test-typography")
        expect(title.getElementsByClassName("CssDialog-typography").length).toBe(0)
    });

        
    });
    









