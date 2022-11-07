import { mockCheckboxRequest, mockEventsRequest, mockInputTextRequest } from '../../../tests/mocks/components/ui/mocks';

import { AttributesItem } from './../../../interfaces/components/attributes.interface';
import { CheckboxRequest } from '../../../interfaces/components/ui/checkbox-request.interface';
import { EventsRequest } from '../../../interfaces/components/events.interface';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { InputTextRequest } from '../../../interfaces/components/ui/input-text-request.interface';
import { RequestDefault } from '../../../interfaces/request/request.interface';
import { TestBed } from '@angular/core/testing';
import { UIServices } from './ui.services';
import { mockAttributesHTML } from './../../../tests/mocks/components/ui/mocks';
import { of } from 'rxjs';

describe('UIServices', () => {
  let service: UIServices;
  let http: HttpRequestClientServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(UIServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should return checkbox json', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockCheckboxRequest));
    service.getCheckboxCodes().subscribe({
      next: (x: RequestDefault<CheckboxRequest>) => {
        expect(x.data).toBe(mockCheckboxRequest.data);
      },
    });
  });

  test('should return events json', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockEventsRequest));
    service.getEvents().subscribe({
      next: (x: RequestDefault<EventsRequest>) => {
        expect(x.data).toBe(mockCheckboxRequest.data);
      },
    });
  });

  test('should getInputTextCodes', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockInputTextRequest));
    service.getInputTextCodes().subscribe({
      next: (x: RequestDefault<InputTextRequest>) => {
        expect(x.data).toBe(mockInputTextRequest.data);
      },
    });
  });

  test('should return AttributesHTML', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockAttributesHTML));
    service.getAttributes(['placeholder', 'required']).subscribe({
      next: (x: RequestDefault<AttributesItem[]>) => {
        expect(x.data).toBe(mockAttributesHTML.data);
      },
    });
  });
});
