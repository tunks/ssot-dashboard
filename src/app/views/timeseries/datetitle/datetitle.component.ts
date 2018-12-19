import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datetitle',
  templateUrl: './datetitle.component.html',
  styleUrls: ['./datetitle.component.scss']
})
export class DatetitleComponent implements OnInit {
  @Input() public title: String;
  @Input() public currentDate: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
