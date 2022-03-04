import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { SafetyNetReportComponent } from '../safety-net-report/safety-net-report.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [RemoteEntryComponent, SafetyNetReportComponent],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'safety-net',
        component: SafetyNetReportComponent,
      }
    ]),
  ],
  providers: [],
})
export class ReportsModule {}
