import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClaimsComponent } from './claims.component';

@NgModule({
  declarations: [ClaimsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClaimsComponent,
      },
    ]),
  ],
  providers: [],
})
export class ClaimsModule {}
