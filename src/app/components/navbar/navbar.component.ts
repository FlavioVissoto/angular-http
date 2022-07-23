import { Component, OnInit } from '@angular/core';
import { Navbar, NavbarSecondary } from './interface/navbar.interface';

import { NavbarServices } from './../../services/navbar.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private navBarServices: NavbarServices) {}

  navbarPrincipal: Navbar[];
  navbarSecondary: NavbarSecondary[];

  ngOnInit(): void {
    this.getPrimaryMenu();
    this.getSecondaryMenu();
  }

  private getPrimaryMenu(): void {
    this.navBarServices.getMenuPrincipal().subscribe({
      next: (x: Navbar[]) => {
        this.navbarPrincipal = x;
      },
    });
  }

  private getSecondaryMenu(): void {
    this.navBarServices.getMenuSecondary().subscribe({
      next: (x: NavbarSecondary[]) => {
        this.navbarSecondary = x;
      },
    });
  }
}
