import { Component, OnInit, ViewChild, ElementRef, SimpleChanges, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from "highcharts";



@Component({
  selector: 'app-sparkline-chart',
  templateUrl: './sparkline-chart.component.html',
  styleUrls: ['./sparkline-chart.component.css']
})
export class SparklineChartComponent implements OnInit {

  @ViewChild('sparkLineChartContainer') public chartEl: ElementRef;

  Highcharts: typeof Highcharts = Highcharts;
  @Input() data: Array<number>;
  updateFlag = false;
  chartOptions: Options = {
    chart: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      type: "area",
      margin: [2, 0, 2, 0],
      width: 120,
      height: 20,
      style: {
        overflow: "visible"
      }
    },
    title: {
      text: ""
    },
    credits: {
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickPositions: []
    },
    yAxis: {
      min: 0,
      endOnTick: false,
      startOnTick: false,
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      tickPositions: [0]
    },
    legend: {
      enabled: false
    },
    tooltip: {
      hideDelay: 0,
      outside: true,
      shared: true,
      formatter() {
        const series =this.points[0].series;
          return `<span style="font-size: 10px">${this.x + 1}:</span><br/>
          <br>
          <b>${this.y}</b>
          `
        
      },
      //pointFormat: 
    },
    plotOptions: {
      series: {
        animation: false,
        lineWidth: 1,
        shadow: false,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        marker: {
          radius: 1,
          states: {
            hover: {
              radius: 2
            }
          }
        }
        //fillOpacity: 0.25
      },
      column: {
        negativeColor: "#910000",
        borderColor: "silver"
      }
    },
    series: [
      {
        name: '',
        type: 'area',
        data: []
      }
    ] 
  };

  ngOnInit() {
    
  }

  ngOnChanges(change: SimpleChanges) {
      this.chartOptions.series = [{
       // name: change.name ? change.name.currentValue : null,
        type: 'area',
        data: change.data.currentValue,
      }];
      this.updateFlag = true;
    }

}
