import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular-toolkit/http-client';
import { Navbar, NavbarSecondary } from '../components/navbar/interface/navbar.interface';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavbarServices {
  constructor(private http: HttpRequestClientServices) {}

  private httpUrlBase = 'assets/json/';

  getMenuPrincipal(): Observable<Navbar[]> {
    return this.http.execute<Navbar[]>(HttpMethod.Get, this.httpUrlBase + 'navbar-principal.json');
  }

  getMenuSecondary(): Observable<NavbarSecondary[]> {
    return this.http.execute<NavbarSecondary[]>(HttpMethod.Get, this.httpUrlBase + 'navbar-secondary.json');
  }
}
