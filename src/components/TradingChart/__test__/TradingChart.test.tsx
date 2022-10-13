import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { composeStories } from '@storybook/testing-react';
import  * as TradingChartStories from 'stories/TradingChart.stories';
import TradingChart from '..';
const {TradingChartComponent} = composeStories(TradingChartStories);
 
describe('should render a Trading Chart', () => {
    test("should render as Trading Chart", () => {
        render(<TradingChart chartTitle="" subtitle="" yAxisMode="" yAxisTitle=""chartType="" thickness={0}/>);
        expect(TradingChartComponent.args?.thickness).toBeGreaterThan(0);
    });
   
});
    









