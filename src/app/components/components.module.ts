import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { KeepHtmlPipe } from '../pipes/keep-html.pipe';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from '../services/loading.service';
import { SidebarInsideComponent } from './sidebar-inside/sidebar-inside.component';

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
    SidebarInsideComponent,
    ModalComponent,
    KeepHtmlPipe,
    LoadingComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarInsideComponent,
    ModalComponent,
    LoadingComponent,
  ],
  providers: [
    LoadingService
  ]
})
export class ComponentsModule { }
