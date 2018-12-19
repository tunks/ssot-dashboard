import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-summary-legend',
  templateUrl: './summary-legend.component.html',
  styleUrls: ['./summary-legend.component.scss']
})
export class SummaryLegendComponent implements OnInit {
  @Input()
  public legendTitle: String = '';
  @Input()
  public legendStyle: String = '';
  @Input()
  public count: Number = 0;
  @Input()
  public percent: Number = 0;
  constructor() { }

  ngOnInit() {
  }

}
