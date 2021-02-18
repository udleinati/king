import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { KeepHtmlPipe } from '../pipes/keep-html.pipe';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from '../services/loading.service';
import { SidebarInternalComponent } from './sidebar-internal/sidebar-internal.component';
import { PageListComponent } from './page-list/page-list.component';
import { KongDatePipe } from '../pipes/kong-date.pipe';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarInternalComponent,
    ModalComponent,
    KeepHtmlPipe,
    LoadingComponent,
    PageListComponent,
    PageContentComponent,

    KongDatePipe,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarInternalComponent,
    ModalComponent,
    LoadingComponent,
    PageListComponent,
    PageContentComponent,
  ],
  providers: [
    LoadingService,
  ]
})
export class ComponentsModule { }
