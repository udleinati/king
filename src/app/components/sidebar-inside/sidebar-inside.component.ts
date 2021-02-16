import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sidebarInsideService } from 'src/app/shared/services/sidebar-inside.service';

// declare interface RouteInfo {
//     routeLink: string[];
//     title: string;
//     icon: string;
//     class: string;
// }

@Component({
  selector: 'app-sidebar-inside',
  templateUrl: './sidebar-inside.component.html',
})
export class SidebarInsideComponent implements OnInit {
  constructor(public sidebarInsideService: sidebarInsideService) { }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
