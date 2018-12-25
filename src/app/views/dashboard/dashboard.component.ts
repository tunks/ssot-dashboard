import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {DummyService, ChartData, ChartElement} from '../../data';

@Component({
  templateUrl: 'dashboard.component.html',
  providers: [DummyService]
})
export class DashboardComponent implements OnInit {
  public chartData = Array<any>();
  public numberOfElements =  60;
  private alarmLegendTitles: Array<String> = [ 'Dequeued', 'Processed', 'Unpaired', 'Delayed'];
  private legendStyles: Array<String> = [ 'bg-info', 'bg-success', 'bg-warning',  'bg-danger'];
  constructor(private dummyService: DummyService) {
  }
  ngOnInit(): void {
    const chartTitles = ['Alarms', 'Incidents'];
    for (let i = 0; i < 2; i++) {
     this.setAlarmChartData(chartTitles[i], i);
     this.refreshChart(chartTitles[i], i);
    }
  }

  private setAlarmChartData(title: String, index: number = 0) {
     const data = this.dummyService.generateData(this.numberOfElements);
     this.chartData[index] = this.getInitAlarmData(title);
     for (let i = 0; i < this.numberOfElements; i++) {
        this.updateChartData(data.elements[i], index, i);
     }
     this.chartData[index].updatedTimestamp = Date.now();
     this.updateChartLegend(index, data.getSummary());

  }
  private updateChartData( data: ChartElement, dIndex: number, labelIndex: number ) {
    for ( let i = 0; i < this.chartData[dIndex].dataseries.length ; i++) {
      this.chartData[dIndex].dataseries[i].data.push(data.values[i]);
    }
    this.chartData[dIndex].labels[labelIndex] = data.timestamp;
  }
  private refreshChart(title: String, index: number = 0) {
    setInterval(() => {
            this.setAlarmChartData(title, index);
    }, 5000);
   }

   private initData(titles: Array<String>, size: number = 4) {
      const data: Array<any> = [];
      for ( let i = 0; i < size; i++ ) {
            data[i] = {data: Array <number>(), label: titles[i]};
        }
      return data;
   }

   private updateChartLegend(index: number, summary: Array<number>) {
    let total = 0;
    for (let i = 0 ; i < summary.length; i++ ) {
         total += summary[i];
    }

    for (let k = summary.length - 1; k >= 0 ; k-- ) {
        this.chartData[index].legends[k] = { legendTitle : this.chartData[index].titles[k],
                                             count : summary[k],
                                             percent: Math.round((summary[k] / total) * 100),
                                             legendStyle: this.legendStyles[k]
                                    };
    }
   }

   private getInitAlarmData(title: String) {
     return {  titles: this.alarmLegendTitles,
      dataseries: this.initData( this.alarmLegendTitles),
      labels: Array<string>(),
      legends: Array<any>(),
      name: title
      };
   }
}
