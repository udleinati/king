import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { RouteRoutingModule } from './route-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouteListComponent } from './route-list/route-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../shared/components/components.module';


@NgModule({
  imports: [
    // modules (angular)
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    RouteRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    RouteListComponent,
  ],
})
export class RouteModule { }
