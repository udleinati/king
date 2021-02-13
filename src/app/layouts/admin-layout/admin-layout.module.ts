import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { ServiceListComponent } from '../../pages/service-list/service-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KongDatePipe } from '../../pipes/kong-date.pipe';
import { ServiceListResolve } from '../../pages/service-list/service-list.resolve';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ServiceListComponent,
    KongDatePipe,
  ],
  providers: [
    ServiceListResolve,
  ]
})

export class AdminLayoutModule {}
