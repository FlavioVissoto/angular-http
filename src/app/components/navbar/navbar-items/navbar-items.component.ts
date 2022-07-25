import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Navbar, NavbarSecondary } from '../interface/navbar.interface';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-items',
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.scss'],
})
export class NavbarItemsComponent implements AfterViewInit {
  @Input() navbarPrincipal: Navbar[];
  @Input() navbarSecondary: NavbarSecondary[];

  @Output() OnClickedNavbar = new EventEmitter<Navbar>();

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.setMenuSelected(event.url);
        }
      },
    });
  }

  itemSecondaryClicked(item: Navbar): void {
    if (item.href) {
      this.setMenuSelected(item.href);
    }
    this.OnClickedNavbar.emit(item);
  }

  private setMenuSelected(pathUrl: string): void {
    for (let i = 0; i < this.navbarPrincipal.length; i++) {
      this.navbarPrincipal[i].selected = this.navbarPrincipal[i].href == pathUrl;
    }

    for (let x = 0; x < this.navbarSecondary.length; x++) {
      const element = this.navbarSecondary[x];
      if (element.items && element.items.length > 0) {
        for (let xx = 0; xx < element.items.length; xx++) {
          this.navbarSecondary[x].items[xx].selected = false;
        }
        for (let xx = 0; xx < element.items.length; xx++) {
          this.navbarSecondary[x].items[xx].selected = this.navbarSecondary[x].items[xx].href == pathUrl;
        }
      }
    }
  }
}
