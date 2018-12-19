import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {TimeseriesComponent} from '../timeseries/timeseries.component';
import {DatetitleComponent} from '../timeseries/datetitle/datetitle.component';
import {SummaryLegendComponent} from '../timeseries/summary-legend/summary-legend.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ DashboardComponent , TimeseriesComponent, DatetitleComponent, SummaryLegendComponent]
})
export class DashboardModule { }
