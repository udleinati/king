import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ServiceListComponent } from '../../pages/service-list/service-list.component';
import { ServiceListResolve } from '../../pages/service-list/service-list.resolve';
import { ServicePageComponent } from 'src/app/pages/service-page/service-page.component';
import { ServicePageResolve } from 'src/app/pages/service-page/service-page.resolve';
import { ServiceRouteListComponent } from 'src/app/pages/service-page/components/service-route-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    {
      path: 'services',
      component: ServiceListComponent,
      runGuardsAndResolvers: 'always',
      resolve: { services: ServiceListResolve },
    },
    {
      path: 'services/new',
      component: ServicePageComponent,
      runGuardsAndResolvers: 'always',
      resolve: { service: ServicePageResolve },
    },
    {
      path: 'services/:id',
      component: ServicePageComponent,
      runGuardsAndResolvers: 'always',
      resolve: { service: ServicePageResolve },
      children: [
        {
          path: 'routes',
          component: ServiceRouteListComponent,
          runGuardsAndResolvers: 'always',
          outlet: 'inside',
        },
      ]
    },
];
