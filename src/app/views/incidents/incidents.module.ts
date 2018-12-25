import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsRoutingModule } from './incidents-routing.module';
import {IncidentsComponent} from '../incidents/incidents.component';

@NgModule({
  declarations: [IncidentsComponent],
  imports: [
    CommonModule,
    IncidentsRoutingModule
  ]
})
export class IncidentsModule { }
