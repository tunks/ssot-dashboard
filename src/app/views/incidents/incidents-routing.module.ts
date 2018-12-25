import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentsComponent } from '../incidents/incidents.component';

const routes: Routes = [
  {
    path: '',
    component: IncidentsComponent,
    data: {
      title: 'Incidents'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
