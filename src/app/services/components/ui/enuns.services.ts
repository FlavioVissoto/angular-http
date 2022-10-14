import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDefault } from '../../../interfaces/request/request.interface';

@Injectable({ providedIn: 'root' })
export class EnumsServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/enums/';

  getSizeEnum(): Observable<RequestDefault<CodeViewer>> {
    return this.http.execute<RequestDefault<CodeViewer>>(HttpMethod.Get, this.httpUrlBase + 'size-enum.json');
  }
}
