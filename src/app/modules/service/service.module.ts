import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { ServiceRoutingModule } from './service-routing.module';
import { AdminInternalLayoutComponent } from '../../layouts/admin-internal-layout/admin-internal-layout.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceListComponent } from './service-list/service-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../shared/components/components.module';
import { ServicePageRouteListComponent } from './service-page-route-list/service-page-route-list.component';


@NgModule({
  imports: [
    // modules (angular)
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    ServiceRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    // components
    AdminInternalLayoutComponent,

    ServiceListComponent,
    ServicePageComponent,
    ServicePageRouteListComponent,
  ],
})
export class ServiceModule { }
