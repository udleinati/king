import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { ServiceRoutingModule } from './service-routing.module';
import { AdminInternalLayoutComponent } from '../layouts/admin-internal-layout/admin-internal-layout.component';
import { ServicePageResolve } from './service-page/service-page.resolve';
import { ServicePageComponent } from './service-page/service-page.component';
import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceListComponent } from './service-list/service-list.component';
import { KongDatePipe } from '../pipes/kong-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarInsideComponent } from '../components/sidebar-inside/sidebar-inside.component';
import { ComponentsModule } from '../components/components.module';


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

    // ServicePageResolve,
    ServicePageComponent,
    ServiceListComponent,
    KongDatePipe,
  ],
})
export class ServiceModule { }
