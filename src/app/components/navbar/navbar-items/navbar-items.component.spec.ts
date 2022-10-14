import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { mockNavBarSecondary, mockNavbar } from './../../../tests/mocks/navbar.mock';

import { BrowserModule } from '@angular/platform-browser';
import { CardAlfaModule } from '@vissoto-angular/ui';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Navbar } from './../interface/navbar.interface';
import { NavbarItemsComponent } from './navbar-items.component';
import { ReplaySubject } from 'rxjs';

describe('NavbarItemsComponent', () => {
  let component: NavbarItemsComponent;
  let fixture: ComponentFixture<NavbarItemsComponent>;

  const eventSubject = new ReplaySubject<RouterEvent>(1);

  const routerMock = {
    events: eventSubject.asObservable(),
    url: 'test/urlpath',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarItemsComponent],
      providers: [{ provide: Router, useValue: routerMock }],
      imports: [BrowserModule, HttpClientModule, CommonModule, CardAlfaModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('click menu', () => {
    component.navbarPrincipal = mockNavbar;
    component.navbarSecondary = mockNavBarSecondary;
    component.OnClickedNavbar.subscribe({
      next: (x: Navbar) => {
        expect(x.href).toEqual(mockNavbar[0].href);
      },
    });
    component.clicked(mockNavbar[0]);
  });

  test('setMenuSelected', () => {
    component.navbarPrincipal = mockNavbar;
    component.navbarSecondary = mockNavBarSecondary;

    if (mockNavbar[0].href) {
      component['setMenuSelected'](mockNavbar[0].href);
    }

    expect(component.navbarPrincipal[0].href).toBe(component.navbarPrincipal[0].href);
  });

  test('deve atribuir a rota no menu quando aberto', () => {
    component.navbarPrincipal = mockNavbar;
    component.navbarSecondary = mockNavBarSecondary;

    eventSubject.next(new NavigationEnd(1, 'regular', 'redirectUrl'));
    expect(component.navbarPrincipal[0].href).toBe(component.navbarPrincipal[0].href);
  });
});
