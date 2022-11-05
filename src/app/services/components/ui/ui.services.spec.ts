import { CheckboxRequest } from '../../../interfaces/components/ui/checkbox/checkbox-request.interface';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { RequestDefault } from '../../../interfaces/request/request.interface';
import { TestBed } from '@angular/core/testing';
import { UIServices } from './ui.services';
import { mockCheckboxRequest } from '../../../tests/mocks/components/ui/mocks';
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
});
