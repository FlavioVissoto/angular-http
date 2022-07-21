import {
  HttpMethod,
  HttpRequestClientServices,
} from '@vissoto-angular-toolkit/http-client';

import { Injectable } from '@angular/core';
import { Navbar } from '../components/navbar/interface/navbar.interface';
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

  getMenuSecondary(): Observable<Navbar[]> {
    return this.http.execute<Navbar[]>(
      HttpMethod.Get,
      this.httpUrlBase + 'navbar-secondary.json'
    );
  }
}
