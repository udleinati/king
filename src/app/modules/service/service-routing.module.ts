import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInternalLayoutComponent } from '../../layouts/admin-internal-layout/admin-internal-layout.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServicePageResolve } from './service-page/service-page.resolve';
import { ServiceListResolve } from './service-list/service-list.resolve';
import { ServicePageRouteListComponent } from './service-page-route-list/service-page-route-list.component';
import { ServicePageRouteListResolve } from './service-page-route-list/service-page-route-list.resolve';
import { ServicePageRoutePageResolve } from './service-page-route-page/service-page-route-page.resolve';
import { ServicePageRoutePageComponent } from './service-page-route-page/service-page-route-page.component';

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
              resolve: {
                service: ServicePageResolve,
                routes: ServicePageRouteListResolve,
              },
              runGuardsAndResolvers: 'always',
            },
            {
              path: ':id/routes/:routeId',
              component: ServicePageRoutePageComponent,
              resolve: {
                service: ServicePageResolve,
                route: ServicePageRoutePageResolve,
              },
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
      ServicePageRouteListResolve,
      ServicePageRoutePageResolve,
    ]
})
export class ServiceRoutingModule { }
