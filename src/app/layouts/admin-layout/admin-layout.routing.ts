import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ServiceListComponent } from '../../pages/service-list/service-list.component';
import { ServiceListResolve } from '../../pages/service-list/service-list.resolve';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    {
      path: 'services',
      component: ServiceListComponent,
      runGuardsAndResolvers: 'always',
      resolve: { kongServices: ServiceListResolve },
    },
];
