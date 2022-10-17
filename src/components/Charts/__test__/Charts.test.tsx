import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { composeStories } from '@storybook/testing-react';
import Charts from '../index';
import * as  ChartsStories  from "stories/Charts.stories";
const { Line,Bar,Area,Pie,Dounut } = composeStories(ChartsStories)


describe('should render a Chart', () => {
    const chartOne = "Line"
    const chartTwo ="Pie"
    const chartThree="Area"
    const chartFour="Dounut"
    const chartFive="Bar"
    test("should render as line chart", () => {
        render(<Charts  
            type={chartOne}
            data={[]} 
            XAxis={""}
            strokeDasharray={""} 
            XAxisDataKey={""}
            lineDataKey={""}
            legend={false}
            tooltip={false}
            showAxis={false} 
            strokeColor={""} 
            hasnegativeValues={false}
             colors={[]}
             options={{}}
             />);
    expect(Line.args?.type === "Line").toBeTruthy();
    expect(Line.args?.data?.length>0).toBeTruthy();
    });

    test("should render as pie chart", () => {
        render(<Charts  
            type={chartTwo}
            data={[]} 
            XAxis={""}
            strokeDasharray={""} 
            XAxisDataKey={""}
            lineDataKey={""}
            legend={false}
            tooltip={false}
            showAxis={false} 
            strokeColor={""} 
            hasnegativeValues={false}
             colors={[]}
             options={{}}
             />);
    expect(Pie.args?.type === "Pie").toBeTruthy();
    expect(Pie.args?.data?.length>0).toBeTruthy();
    });

    test("should render as area chart", () => {
        render(<Charts  
            type={chartThree}
            data={[]} 
            XAxis={""}
            strokeDasharray={""} 
            XAxisDataKey={""}
            lineDataKey={""}
            legend={false}
            tooltip={false}
            showAxis={false} 
            strokeColor={""} 
            hasnegativeValues={false}
             colors={[]}
             options={{}}
             />);
    expect(Area.args?.type === "Area").toBeTruthy();
    expect(Area.args?.data?.length>0).toBeTruthy();
    });

    test("should render as dounut chart", () => {
        render(<Charts  
            type={chartFour}
            data={[]} 
            XAxis={""}
            strokeDasharray={""} 
            XAxisDataKey={""}
            lineDataKey={""}
            legend={false}
            tooltip={false}
            showAxis={false} 
            strokeColor={""} 
            hasnegativeValues={false}
             colors={[]}
             options={{}}
             />);
    expect(Dounut.args?.type === "Dounut").toBeTruthy();
    expect(Dounut.args?.data?.length>0).toBeTruthy();
    expect(Dounut.args?.colors?.length>0).toBeTruthy();
    });

    test("should render as bar chart", () => {
        render(<Charts  
            type={chartFive}
            data={[]} 
            XAxis={""}
            strokeDasharray={""} 
            XAxisDataKey={""}
            lineDataKey={""}
            legend={false}
            tooltip={false}
            showAxis={false} 
            strokeColor={""} 
            hasnegativeValues={false}
             colors={[]}
             options={{}}/>);
    expect(Bar.args?.type === "Bar").toBeTruthy();
    expect(Bar.args?.data?.length>0).toBeTruthy();
    });
});
    









