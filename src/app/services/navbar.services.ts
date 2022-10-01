import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular-toolkit/http-client';
import { Navbar, NavbarSecondary } from '../components/navbar/interface/navbar.interface';
import { Observable, tap } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavbarServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/';

  getMenuPrincipal(): Observable<Navbar[]> {
    return this.http.execute<Navbar[]>(HttpMethod.Get, this.httpUrlBase + 'navbar-principal.json');
  }

  getMenuSecondary(): Observable<NavbarSecondary[]> {
    return this.http.execute<NavbarSecondary[]>(HttpMethod.Get, this.httpUrlBase + 'navbar-secondary.json').pipe(
      tap((result: NavbarSecondary[]) => {
        for (let index = 0; index < result.length; index++) {
          result[index].items.sort((a: Navbar, b: Navbar) => {
            if (b.text == 'Instalação') {
              return 1;
            } else {
              return a.text > b.text ? 1 : -1;
            }
          });
        }
      })
    );
  }
}
