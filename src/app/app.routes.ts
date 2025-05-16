import { Routes } from '@angular/router';

import { CustomerComponent } from './components/customer/customer.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ServiceComponent } from './components/service/service.component';
import { BillingComponent } from './components/billing/billing.component';
import { ReportComponent } from './components/report/report.component';

import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'customers', component: CustomerComponent },
      { path: 'artists', component: ArtistComponent },
      { path: 'services', component: ServiceComponent },
      { path: 'billings', component: BillingComponent },
      { path: 'reports', component: ReportComponent },
    ],
  },
];
