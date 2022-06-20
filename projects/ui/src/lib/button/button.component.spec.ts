import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonIUButtonComponent } from './iui-button.component';

describe('IonIUButtonComponent', () => {
  let component: IonIUButtonComponent;
  let fixture: ComponentFixture<IonIUButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IonIUButtonComponent],
      imports: [FontAwesomeModule],
    }).compileComponents();
  }));

  test('should create component', () => {
    fixture = TestBed.createComponent(IonIUButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  test('should emit tab on click', () => {
    fixture = TestBed.createComponent(IonIUButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    component.clickedButton.subscribe((x: boolean) => {
      expect(x).toEqual(true);
    });

    button.triggerEventHandler('click', null);
  });

  test('should emit tab on click with onloading', () => {
    fixture = TestBed.createComponent(IonIUButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loading = true;
    const button = fixture.debugElement.query(By.css('button'));
    component.clickedButton.subscribe((x: boolean) => {
      expect(x).toEqual(true);
    });

    button.triggerEventHandler('click', null);
  });
});
