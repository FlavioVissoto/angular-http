import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonUICardComponent } from './iui-card.component';

describe('IonIUButtonComponent', () => {
  let component: IonUICardComponent;
  let fixture: ComponentFixture<IonUICardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IonUICardComponent],
      imports: [FontAwesomeModule],
    }).compileComponents();
  }));

  test('should create component', () => {
    fixture = TestBed.createComponent(IonUICardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  test('should emit clickCard on click', () => {
    fixture = TestBed.createComponent(IonUICardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.clickCard();
    component.clickedButton.subscribe((x: boolean) => {
      expect(x).toEqual(true);
    });
  });

  test('should emit clickCard on click with onloading', () => {
    fixture = TestBed.createComponent(IonUICardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loading = true;
    component.clickCard();
    component.clickedButton.subscribe((x: boolean) => {
      expect(x).toEqual(false);
    });
  });
});
