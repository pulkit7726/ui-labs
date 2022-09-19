import React, { ReactElement } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Breadcrumbs from '../index';

describe("should render a breadcrumbs", () => {

    const list1 = [<div>Test1</div>, <div>Test2</div>]
    const list2 = [<div>Test1</div>, <div>Test2</div>, <div>Test3</div>]
    const list3 = [<div>Test1</div>, <div>Test2</div>, <div>Test3</div>]
    const list4 = [<div>Test1</div>, <div>Test2</div>, <div>Test3</div>, <div>Test4</div>]
 
    test("should render a basic", () => {
        render(<Breadcrumbs list={list1}/>)    
        expect(screen.getByTestId("breadcrumb")).toHaveTextContent("Test1/Test2"); 
    });
    
    test("should render a customSperator", () => {
        render(<Breadcrumbs list={list2}/>)   
        expect(screen.getByTestId("breadcrumb")).toHaveTextContent("Test1/Test2/Test3"); 
    });
    
    test("should render a iconSperator", () => {
        render(<Breadcrumbs list={list3}/>)     
        expect(screen.getByTestId("breadcrumb")).toHaveTextContent("Test1/Test2/Test3"); 
    });
    
    test("should render a collapsedBreadcrumbs", () => {
        render(<Breadcrumbs list={list4}/>)    
        expect(screen.getByTestId("breadcrumb")).toHaveTextContent("Test1/Test2/Test3/Test4"); 
    });

})


