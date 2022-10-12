import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    AreaChart,
    Area,
    Pie,
    Bar,
    ReferenceLine,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { Chart } from "react-google-charts";
type ChartsProps = {
    type: string,
    data: any,
    strokeDasharray: string,
    tooltip: boolean,
    legend: boolean,
    XAxis: any,
    showAxis: boolean,
    strokeColor: string,
    XAxisDataKey: string,
    lineDataKey: string,
    hasnegativeValues: boolean,
    colors: any,
    options: any
}
function Charts({
    type,
    data,
    XAxisDataKey,
    lineDataKey,
    legend,
    tooltip,
    hasnegativeValues,
    colors,
    options,
    ...props
}: ChartsProps) {
    const renderChart = (chart: string) => {
        switch (chart) {
            case 'Line': return (<LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={XAxisDataKey} />
                <YAxis />
                {tooltip && <Tooltip />}
                {legend && <Legend />}
                <Line type="monotone" dataKey={lineDataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>);

            case 'Bar': return (<BarChart width={150} height={40} data={data}>
                <XAxis dataKey={XAxisDataKey} />
                <YAxis />
                {hasnegativeValues && <ReferenceLine y={0} stroke="#000" />}
                {tooltip && <Tooltip />}
                {legend && <Legend />}
                <Bar stackId="a" dataKey={lineDataKey}>
                    {data.map((el: any, index: number) => <Cell key={`cell-${index}`} fill={el.units > 0 ? "green" : "red"} />)}
                </Bar>
            </BarChart>);

            case 'Pie': return (<PieChart width={400} height={400}>
                <Pie
                    dataKey={lineDataKey}
                    isAnimationActive={true}
                    data={data}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {data.map((el: any, index: number) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)}
                </Pie>
                <Tooltip />
            </PieChart>);

            case 'Dounut': return (<PieChart width={400} height={400}>
                <Pie
                    dataKey={lineDataKey}
                    isAnimationActive={true}
                    data={data}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {data.map((el: any, index: number) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)}
                </Pie>
                <Tooltip />
            </PieChart>);

            case 'Area': return (
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={XAxisDataKey} />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey={lineDataKey} stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            )
            case 'CandlestickChart': return (
                <Chart
                    chartType="CandlestickChart"
                    data={data}
                    options={options}
                />
            )
            default: return (<></>);
        }
    }
    return (
        <ResponsiveContainer height="300" aspect={2}>
            {renderChart(type)}
        </ResponsiveContainer>
    )
}

export default Charts