import {
  HttpMethod,
  HttpRequestClientServices,
} from '@vissoto-angular-toolkit/http-client';
import {
  NavBarSecondary,
  Navbar,
} from '../components/navbar/interface/navbar.interface';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavbarServices {
  constructor(private http: HttpRequestClientServices) {}

  private httpUrlBase = 'assets/json/';

  getMenuPrincipal(): Observable<Navbar[]> {
    return this.http.execute<Navbar[]>(
      HttpMethod.Get,
      this.httpUrlBase + 'navbar-principal.json'
    );
  }

  getMenuSecondary(): Observable<NavBarSecondary[]> {
    return this.http.execute<NavBarSecondary[]>(
      HttpMethod.Get,
      this.httpUrlBase + 'navbar-secondary.json'
    );
  }
}
