import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

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
  providers: []
})

export class AdminLayoutModule {}
