import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar.component';
import { NavbarServices } from './../../services/navbar.services';
import { mockNavbar } from './../../tests/mocks/navbar.mock';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let navBarServices: NavbarServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [NavbarServices],
      imports: [HttpClientModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    navBarServices = TestBed.inject(NavbarServices);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should', () => {
    jest
      .spyOn(navBarServices, 'getMenuPrincipal')
      .mockImplementation(() => of(mockNavbar));

    jest.useFakeTimers();
    component['getPrimaryMenu']();
    jest.runOnlyPendingTimers();

    expect(component.navbarPrincipal).not.toEqual(undefined);
    expect(component.navbarPrincipal.length).toBe(mockNavbar.length);
    expect(component.navbarPrincipal).toEqual(mockNavbar);
  });

  test('should', () => {
    jest
      .spyOn(navBarServices, 'getMenuSecondary')
      .mockImplementation(() => of(mockNavbar));

    jest.useFakeTimers();
    component['getSecondaryMenu']();
    jest.runOnlyPendingTimers();

    expect(component.navbarSecondary).not.toEqual(undefined);
    expect(component.navbarSecondary.length).toBe(mockNavbar.length);
    expect(component.navbarSecondary).toEqual(mockNavbar);
  });
});
