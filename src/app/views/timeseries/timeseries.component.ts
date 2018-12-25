import { Component, OnInit , ViewChild, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import {DummyService, ChartData, ChartElement} from '../../data';

@Component({
  selector: 'app-timeseries',
  templateUrl: './timeseries.component.html',
  styleUrls: ['./timeseries.component.scss'],
  providers: [DummyService]
})
export class TimeseriesComponent implements OnChanges, OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  @Input()
  public chartTitle: String ;
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
      borderWidth: 2
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
  @Input()
  public mainChartData = Array<any>();
  @Input()
  public legendData: Array<any> = [];
  @Input()
  public legendTitles =  [];
  @Input()
  public lastUpdatedTimestamp: number;
  @Input()
  public mainChartLabels = Array<string>();

  public legendStyles: Array<String> = [ 'bg-info', 'bg-success', 'bg-warning',  'bg-danger'];

  constructor(private dummyService: DummyService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.name;
  //  console.log('prev value: ', name.previousValue);
    // console.log('got name: ', name.currentValue);
  }

  ngOnInit(): void {
  }
  // events
  public chartClicked(e: any) {
    console.log(e);
  }
  public chartHovered(e: any) {
    console.log(e);
  }

   private updateChartLegend(summary: Array<number>) {
    let count = 0;
    let total = 0;
    for (let i = 0 ; i < summary.length; i++ ) {
         total += summary[i];
    }

    for (let k = summary.length - 1; k >= 0 ; k-- ) {
        count = summary[k];
        this.legendData[k] = { legendTitle : this.legendTitles[k],
                                count : count,
                                percent: Math.round((count / total) * 100),
                                legendStyle: this.legendStyles[k]
                             };
    }
   }

}
