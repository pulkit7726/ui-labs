export default class StocksHistory {
  /** gets stock OHLC prices for multiple stocks */

  public static async getMultipleStocks(): Promise<any[]> {
    // getting prices of multiples stocks asynchronously
    const dataSources: any[] = [
      // await this.getAmazonStock(),
      await this.getGoogleStock(),
      await this.getMicrosoftStock(),
      // await this.getTeslaStock()
    ];

    return new Promise<any[]>((resolve, reject) => {
      resolve(dataSources);
    });
  }

  /** gets Amazon stock OHLC prices from a .JSON file */
  public static async getAmazonStock(): Promise<StockItem[]> {
    const url =
      'https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json';
    const response = await fetch(url);
    const jsonData = await response.json();
    const stockData = this.convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    (stockData as any).__dataIntents = {
      close: ['SeriesTitle/Amazon'],
    };
    // console.log("fetchAmazonStock: ", stockData.length);

    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }

  /** gets Tesla stock OHLC prices from a .JSON file */
  public static async getTeslaStock(): Promise<StockItem[]> {
    const url =
      'https://static.infragistics.com/xplatform/data/stocks/stockTesla.json';
    const response = await fetch(url);
    const jsonData = await response.json();
    const stockData = this.convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    (stockData as any).__dataIntents = {
      close: ['SeriesTitle/Tesla'],
    };
    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }

  /** gets Microsoft stock OHLC prices from a .JSON file */
  public static async getMicrosoftStock(): Promise<StockItem[]> {
    const url =
      'https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json';
    const response = await fetch(url);
    const jsonData = await response.json();
    const stockData = this.convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    (stockData as any).__dataIntents = {
      close: ['SeriesTitle/Microsoft'],
    };
    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }

  /** gets Google stock OHLC prices from a .JSON file */
  public static async getGoogleStock(): Promise<StockItem[]> {
    const url =
      'https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json';
    const response = await fetch(url);
    const jsonData = await response.json();
    const stockData = this.convertData(jsonData);
    // setting data intent for Series Title, e.g. FinancialChart usage
    (stockData as any).__dataIntents = {
      close: ['SeriesTitle/Google'],
    };
    return new Promise<StockItem[]>((resolve, reject) => {
      resolve(stockData);
    });
  }

  public static convertData(jsonData: any[]): StockItem[] {
    const stockItems: StockItem[] = [];

    for (const json of jsonData) {
      const parts = json.date.split('-'); // "2020-01-01"
      const item = new StockItem();
      item.date = new Date(parts[0], parts[1], parts[2]);
      item.open = json.open;
      item.high = json.high;
      item.low = json.low;
      item.close = json.close;
      item.volume = json.volume;
      stockItems.push(item);
    }

    return stockItems;
  }
}

export class StockItem {
  public open?: number;

  public close?: number;

  public high?: number;

  public low?: number;

  public volume?: number;

  public date?: Date;
}
