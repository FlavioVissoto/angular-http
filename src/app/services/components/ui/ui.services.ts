import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';
import { Observable, map } from 'rxjs';

import { AttributesItem } from './../../../interfaces/components/attributes.interface';
import { CheckboxRequest } from '../../../interfaces/components/ui/checkbox-request.interface';
import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsRequest } from '../../../interfaces/components/events.interface';
import { Injectable } from '@angular/core';
import { InputTextRequest } from '../../../interfaces/components/ui/input-text-request.interface';
import { RequestDefault } from '../../../interfaces/request/request.interface';

@Injectable({ providedIn: 'root' })
export class UIServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/components/ui/';

  getCheckboxCodes(): Observable<RequestDefault<CheckboxRequest>> {
    return this.http.execute<RequestDefault<CheckboxRequest>>(HttpMethod.Get, this.httpUrlBase + 'checkbox.json');
  }

  getInputTextCodes(): Observable<RequestDefault<InputTextRequest>> {
    return this.http.execute<RequestDefault<InputTextRequest>>(HttpMethod.Get, this.httpUrlBase + 'input-text.json');
  }

  getEvents(): Observable<RequestDefault<EventsRequest>> {
    return this.http.execute<RequestDefault<EventsRequest>>(HttpMethod.Get, this.httpUrlBase + 'events.json');
  }

  getSizeEnum(): Observable<RequestDefault<CodeViewer>> {
    return this.http.execute<RequestDefault<CodeViewer>>(HttpMethod.Get, this.httpUrlBase + 'size-enum.json');
  }

  getAttributes(items: string[]): Observable<RequestDefault<AttributesItem[]>> {
    return this.http.execute<RequestDefault<AttributesItem[]>>(HttpMethod.Get, this.httpUrlBase + 'attributes.json').pipe(
      map((x: RequestDefault<AttributesItem[]>) => {
        const nArray = x.data
          .filter((i) => items.includes(i.name))
          .sort((a: AttributesItem, b: AttributesItem) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        return { data: nArray } as RequestDefault<AttributesItem[]>;
      })
    );
  }
}
