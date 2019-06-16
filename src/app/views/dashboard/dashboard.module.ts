import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Ng5SliderModule } from 'ng5-slider';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {TimeseriesComponent} from '../timeseries/timeseries.component';
import {DatetitleComponent} from '../timeseries/datetitle/datetitle.component';
import {SummaryLegendComponent} from '../timeseries/summary-legend/summary-legend.component';
import { ChartWidgetComponent } from '../chart-widget/chart-widget.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    Ng5SliderModule
  ],
  declarations: [ DashboardComponent,
                  TimeseriesComponent,
                  DatetitleComponent,
                  SummaryLegendComponent,
                  ChartWidgetComponent
                ]
})
export class DashboardModule { }
