import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EnumsServices } from './enuns.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular-toolkit/http-client';
import { Language } from '../../../components/code-viewer/interfaces/languages.enum';
import { RequestDefault } from '../../../interfaces/request/request.interface';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('EnumsServices', () => {
  let service: EnumsServices;
  let http: HttpRequestClientServices;

  const mockEnum = {
    data: {
      code: 'codigo',
      language: Language.TypeScript,
    } as CodeViewer,
  } as RequestDefault<CodeViewer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(EnumsServices);
    http = TestBed.inject(HttpRequestClientServices);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });

  test('should return MenuSecondary', () => {
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockEnum));
    service.getSizeEnum().subscribe({
      next: (x: RequestDefault<CodeViewer>) => {
        expect(x.data).toBe(mockEnum.data);
      },
    });
  });
});
