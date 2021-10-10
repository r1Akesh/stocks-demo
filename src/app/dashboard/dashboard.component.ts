import { Component, OnInit } from '@angular/core';
import { StockService } from '.././stock.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private StockService:StockService) { }
  availableStocks = {};
  ngOnInit() {
    this.getLiveUpdates();
  }

  getLiveUpdates():void {
    this.StockService.initializeSocketService().subscribe((res:any) => {
      res.forEach(element => {
        let [stockName,stockPrice] = element;
        stockPrice= stockPrice.toFixed(2);
        let stockObj = {
            lastUpdated: Date.now(),
            currentPrice: stockPrice,
        }
        if(stockName in this.availableStocks) { //if stock name already exists, then caclulate price increased or decreased with respect to previous value.
          const {previousPrice} = this.availableStocks[stockName];
          stockObj['priceDifference'] = (+stockPrice - +previousPrice).toFixed(2);
          stockObj['historyPrices'] = ('historyPrices' in this.availableStocks[stockName]) ? [... this.availableStocks[stockName]['historyPrices'],+stockPrice]: [];
        }else {
          stockObj['historyPrices'] = [];
        }
        stockObj['previousPrice'] = stockPrice;
        this.availableStocks[''+stockName] = {... stockObj } 
      });
    });
  }

  getPriceStatus(stockPriceDifference): string {
    return (stockPriceDifference) ? (stockPriceDifference < 0) ? 'price-decreased' : 'price-increased' : 'price-not-updated'
  }
  
}
