import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, AfterContentInit } from '@angular/core';
import { D3Service, D3, RGBColor, Selection, Timer, VoronoiPolygon } from 'd3-ng2-service';

@Component({
  selector: 'app-bullet-chart',
  templateUrl: './bullet-chart.component.html',
  styleUrls: ['./bullet-chart.component.scss']
})
export class BulletChartComponent implements AfterContentInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  private d3: D3;

  constructor(d3Service: D3Service) {
    this.d3 = d3Service.getD3();
  }

  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  public createChart() {

  }
}
