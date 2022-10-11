import React from 'react'
import { AdvancedChart } from "react-tradingview-embed";

type TradingChartProps = {
  theme:any
}
function TradingChart({theme}:TradingChartProps) {
  return (
    <AdvancedChart widgetProps={{"theme": theme}} />
  )
}

export default TradingChart