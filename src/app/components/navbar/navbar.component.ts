import { Component, Input, OnInit } from '@angular/core';

import { Navbar } from './interface/navbar.interface';
import { NavbarServices } from './../../services/navbar.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private navBarServices: NavbarServices) {}

  @Input() navbarPrincipal: Navbar[];
  @Input() navbarSecondary: Navbar[];

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
      next: (x: Navbar[]) => {
        this.navbarSecondary = x;
      },
    });
  }
}
