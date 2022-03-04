import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemitsComponent } from './remits.component';

@NgModule({
  declarations: [RemitsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemitsComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemitsModule {}
