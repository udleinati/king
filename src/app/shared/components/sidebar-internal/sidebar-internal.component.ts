import { Component, Input, OnInit } from '@angular/core';
import { BarService } from 'src/app/shared/services/bar.service';

@Component({
  selector: 'app-sidebar-internal',
  templateUrl: './sidebar-internal.component.html',
})
export class SidebarInternalComponent implements OnInit {
  constructor(public barService: BarService) { }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
