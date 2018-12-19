import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';

import {TimeseriesComponent} from './timeseries.component';
import { DatetitleComponent } from './datetitle/datetitle.component';
import { SummaryLegendComponent } from './summary-legend/summary-legend.component';

@NgModule({
  declarations: [TimeseriesComponent, DatetitleComponent, SummaryLegendComponent],
  imports: [
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule,
    FormsModule
  ]
})
export class TimeseriesModule { }
