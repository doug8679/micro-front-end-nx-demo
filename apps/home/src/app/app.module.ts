import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          component: HomePageComponent,
        },
        {
          path: 'claims',
          loadChildren: () =>
            import('claims/Module').then((m) => m.ClaimsModule),
        },
        {
          path: '',
          outlet: 'navbar',
          loadChildren: () =>
            import('navbar/Module').then((m) => m.NavbarModule),
        },
        {
          path: 'remits',
          loadChildren: () =>
            import('remits/Module').then((m) => m.RemitsModule),
        },
        {
          path: 'reports',
          loadChildren: () =>
            import('reports/Module').then((m) => m.ReportsModule),
        },
        {
          path: 'login',
          loadChildren: () =>
            import('login/Module').then((m) => m.LoginModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
