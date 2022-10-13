import React,{useState,useEffect} from 'react'
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './utils/StocksHistory';

type TradingChartProps = {
  chartTitle:string,
  subtitle:string,
  yAxisMode:string,
  yAxisTitle:string,
  chartType:string,
  thickness:any
}

IgrFinancialChartModule.register();

function TradingChart({chartTitle,subtitle,yAxisMode,yAxisTitle,chartType,thickness}:TradingChartProps) {

  const [data,setData]=useState<any>([]);
  useEffect(()=>{
    StocksHistory.getMultipleStocks().then((stocks: any[]) => {
      setData(stocks);
    });
  },[]);
  
  return (
    <div className="container sample" >
                <div className="container">
                <IgrFinancialChart
                  height='30rem'
                    chartType={chartType}
                    thickness={thickness}
                    chartTitle={chartTitle}
                    subtitle={subtitle}
                    yAxisMode={yAxisMode}
                    yAxisTitle={yAxisTitle}
                    dataSource={data} />
                </div>
            </div>
  )
}

export default TradingChart