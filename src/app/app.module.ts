import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { KongService } from './services/kong.service';
import { LoadingInterceptor } from './interceptors/loading.interceptor'
import { LoadingService } from './services/loading.service';
import { sidebarInsideService } from './services/sidebar-inside.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,

    StoreModule.forRoot(reducer),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },

    KongService,
    LoadingService,
    sidebarInsideService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
