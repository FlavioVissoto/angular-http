import { BrowserModule, By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockNavBarSecondary, mockNavbar } from './../../tests/mocks/navbar.mock';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar.component';
import { NavbarServices } from './../../services/navbar.services';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let navBarServices: NavbarServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [NavbarServices],
      imports: [BrowserModule, HttpClientModule, CommonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    navBarServices = TestBed.inject(NavbarServices);
  });

  test('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  test('deve retornar o menu principal.', () => {
    jest.spyOn(navBarServices, 'getMenuPrincipal').mockImplementation(() => of(mockNavbar));

    jest.useFakeTimers();
    component['getPrimaryMenu']();
    jest.runOnlyPendingTimers();

    expect(component.navbarPrincipal).not.toEqual(undefined);
    expect(component.navbarPrincipal.length).toBe(mockNavbar.length);
    expect(component.navbarPrincipal).toEqual(mockNavbar);
  });

  test('deve retornar o menu secundario', () => {
    jest.spyOn(navBarServices, 'getMenuSecondary').mockImplementation(() => of(mockNavBarSecondary));

    jest.useFakeTimers();
    component['getSecondaryMenu']();
    jest.runOnlyPendingTimers();

    expect(component.navbarSecondary).not.toEqual(undefined);
    expect(component.navbarSecondary.length).toBe(mockNavBarSecondary.length);
    expect(component.navbarSecondary).toEqual(mockNavBarSecondary);
  });

  test('deve mostar o menu', () => {
    component.showMenu = false;
    component.toggleMenu();
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const div = debugElement.query(By.css('.menuFullScreen'));

    expect(component.showMenu).toBe(true);
    expect(div).not.toBeFalsy();
  });

  test('deve esconder o menu', () => {
    component.showMenu = true;
    component.toggleMenu();
    fixture.detectChanges();

    const debugElement: DebugElement = fixture.debugElement;
    const div = debugElement.query(By.css('.menuFullScreen'));

    expect(component.showMenu).toBe(false);
    expect(div).toBeNull();
  });
});
