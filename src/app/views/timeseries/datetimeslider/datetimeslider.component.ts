import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-datetimeslider',
  templateUrl: './datetimeslider.component.html',
  styleUrls: ['./datetimeslider.component.scss']
})
export class DatetimesliderComponent implements OnInit {
  value = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showTicks: true
  };
  constructor() { }

  ngOnInit() {
  }

}
