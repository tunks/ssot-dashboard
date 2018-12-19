import { Component, OnInit , ViewChild} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import {DummyUtil, ChartData} from '../../data';

@Component({
  selector: 'app-timeseries',
  templateUrl: './timeseries.component.html',
  styleUrls: ['./timeseries.component.scss'],
})
export class TimeseriesComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  private dataUtil = new DummyUtil();
  // mainChart
  public mainChartElements = 60;
  public alarmChartTitle: String = 'Alarms';
  public mainChartData = this.resetData();
  public mainChartLabels = Array<string>();
  /* tslint:enable:max-line-length */
  radioModel: String = 'Day';

  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        }/*,
        ticks: {
          callback: function(value: any) {
            return moment(value).format('HH:mm');
          }
        }*/
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: hexToRgba(getStyle('--success')),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: '#FFEB3B', // getStyle('--warning'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
     // borderDash: [8, 5]
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';
  public legendData: Array<any> = [];
  public legendTitles: Array<String> = [ 'Unpaired', 'Processed', 'Pending', 'Delayed'];
  public legendStyles: Array<String> = [ 'bg-warning', 'bg-success', 'bg-info', 'bg-danger'];
  public lastUpdatedTimestamp: number = Date.now();
  constructor() { }

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    // generate random values for mainChart
    this.initChartData();
    this.refreshChart();
    // update legend data
    let percent = 0;
    const total = 150000;
    for (let k = 4; k >= 1 ; k-- ) {
        percent = 100 - percent - k * 10;
        this.legendData.push({ legendTitle : this.legendTitles[k - 1],
                                count : total * (percent / 100),
                                percent: percent,
                                legendStyle: this.legendStyles[k - 1]
                             });
    }

  }
  // events
  public chartClicked(e: any) {
    console.log(e);
  }
  public chartHovered(e: any) {
    console.log(e);
  }

  private updateChartData(data: ChartData, index: number ) {
    for ( let i = 0; i < this.mainChartData.length ; i++) {
      this.mainChartData[i].data.push(data.values[i]);
    }
    this.mainChartLabels[index] = data.timestamp;
  }

  private initChartData() {
     this.mainChartData = this.resetData();
     const data = this.dataUtil.generateData(this.mainChartElements);
     console.log(data[0]);
     for (let i = 0; i < this.mainChartElements; i++) {
        this.updateChartData(data[i], i);
    }
    console.log('chart lable first: ' + this.mainChartLabels[0]);
    this.lastUpdatedTimestamp = Date.now();
  }

  private refreshChart() {
    setInterval(() => {
             console.log('updating chart data');
            this.initChartData();
    }, 5000);
   }

   private resetData() {
    const data: Array<any> = [
      {
        data: Array <number>(),
        label: 'Dequeued'
      },
      {
        data:  Array <number>(),
        label: 'Processed'
      },
      {
        data:  Array <number>(),
        label: 'Unpaired'
      },
      {
        data:  Array <number>(),
        label: 'Pending'
      }
    ];
    return data;
   }

}
