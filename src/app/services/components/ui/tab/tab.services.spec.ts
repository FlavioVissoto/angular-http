import { HttpClientModule } from '@angular/common/http';
import { HttpRequestClientServices } from '@vissoto-angular/http-client';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { SelectRequest } from '../../../../interfaces/components/ui/select/select-request.interface';
import { TabServices } from './tab.services';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('TabServices', () => {
  let service: TabServices;
  let http: HttpRequestClientServices;

  const mockSelectRequest = {
    data: {
      codeModule: {
        code: 'codigo',
        language: Language.TypeScript,
      },
      codeTitle: {
        code: 'codigo',
        language: Language.TypeScript,
      },
      codeRounded: {
        code: 'codigo',
        language: Language.TypeScript,
      },
      events: [
        {
          name: 'nome evento',
          trigger: 'trigger evento',
          return: 'return evento',
        },
      ],
    },
  } as RequestDefault<SelectRequest>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestClientServices],
      imports: [HttpClientModule],
    }).compileComponents();

    service = TestBed.inject(TabServices);
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
    jest.spyOn(http, 'execute').mockImplementation(() => of(mockSelectRequest));
    service.getTabCodes().subscribe({
      next: (x: RequestDefault<SelectRequest>) => {
        expect(x.data).toBe(mockSelectRequest.data);
      },
    });
  });
});
