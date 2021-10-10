import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockService } from './stock.service';
import { HighchartService } from './highchart.service';

import { SparklineChartComponent } from './sparkline-chart/sparkline-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SparklineChartComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
  ],
  providers: [StockService, HighchartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
