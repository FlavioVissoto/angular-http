import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { CheckboxRequest } from '../../../interfaces/components/ui/checkbox/checkbox-request.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDefault } from '../../../interfaces/request/request.interface';

@Injectable({ providedIn: 'root' })
export class UIServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/';

  getCheckboxCodes(): Observable<RequestDefault<CheckboxRequest>> {
    return this.http.execute<RequestDefault<CheckboxRequest>>(HttpMethod.Get, this.httpUrlBase + 'checkbox.json');
  }
}
