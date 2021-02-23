import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteListResolve } from './route-list/route-list.resolve';
import { RouteListComponent } from './route-list/route-list.component';
import { RoutePageResolve } from './route-page/route-page.resolve';

const routes: Routes = [
    {
      path: 'routes',
      component: RouteListComponent,
      resolve: { routes: RouteListResolve },
      runGuardsAndResolvers: 'always',
    },
    {
      path: 'routes/:id',
      resolve: { routes: RoutePageResolve },
      runGuardsAndResolvers: 'always',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
      RouteListResolve,
      RoutePageResolve,
    ]
})
export class RouteRoutingModule { }
