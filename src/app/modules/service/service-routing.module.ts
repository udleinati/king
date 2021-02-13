import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInternalLayoutComponent } from '../../layouts/admin-internal-layout/admin-internal-layout.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicePageResolve } from './service-page/service-page.resolve';
import { ServiceListResolve } from './service-list/service-list.resolve';
import { ServicePageRouteListComponent } from './service-page-route-list/service-page-route-list.component';

const routes: Routes = [
    {
      path: 'services',
      component: ServiceListComponent,
      resolve: { services: ServiceListResolve },
      runGuardsAndResolvers: 'always',
    },
    {
        path: 'services',
        component: AdminInternalLayoutComponent,
        children: [
            {
              path: 'new',
              component: ServicePageComponent,
              resolve: { service: ServicePageResolve },
              runGuardsAndResolvers: 'always',
            },
            {
              path: ':id',
              component: ServicePageComponent,
              resolve: { service: ServicePageResolve },
              runGuardsAndResolvers: 'always',
            },
            {
              path: ':id/routes',
              component: ServicePageRouteListComponent,
              resolve: { service: ServicePageResolve },
              runGuardsAndResolvers: 'always',
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
      ServiceListResolve,
      ServicePageResolve,
    ]
})
export class ServiceRoutingModule { }
