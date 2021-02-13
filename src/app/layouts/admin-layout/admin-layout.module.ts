import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
// import { ServiceListComponent } from '../../pages/service-list/service-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { KongDatePipe } from '../../pipes/kong-date.pipe';
import { ServiceListResolve } from '../../pages/service-list/service-list.resolve';
import { ComponentsModule } from '../../components/components.module';
// import { ServicePageComponent } from 'src/app/pages/service-page/service-page.component';
import { ServicePageResolve } from 'src/app/pages/service-page/service-page.resolve';
// import { ServiceRouteListComponent } from 'src/app/pages/service-page/components/service-route-list.component';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    // NgbModule,
    ClipboardModule,
    // ComponentsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    // ServiceListComponent,
    // ServicePageComponent,
    // ServiceRouteListComponent,
    // KongDatePipe,
  ],
  providers: [
    ServiceListResolve,
    ServicePageResolve,
  ]
})

export class AdminLayoutModule {}
