import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class HighchartService {

  constructor() { }

  createChart(el, cfg) {
    Highcharts.chart(el, cfg);
  }
}
