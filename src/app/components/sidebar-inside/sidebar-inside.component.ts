import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// declare interface RouteInfo {
//     routeLink: string[];
//     title: string;
//     icon: string;
//     class: string;
// }
// export const ROUTES: RouteInfo[] = [
    // { path: '/user-profile', title: 'Service Detail',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/services', title: 'Services',  icon:'ni-bullet-list-67 text-red', class: '' },
// ];

@Component({
  selector: 'app-sidebar-inside',
  templateUrl: './sidebar-inside.component.html',
})
export class SidebarInsideComponent implements OnInit {
  @Input() public menuItems: Record<string, any>[];

  // constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.menuItems)
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
