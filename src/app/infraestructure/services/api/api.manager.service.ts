import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHandlerService } from '../utils/httpHandler.service';

@Injectable({ providedIn: 'root' })
export class ApiManagerService {

    constructor(
        protected _http: HttpHandlerService
    ) { }

    public get(endpoint: string, payload = {}): Observable<any> {
        return this._http.get(endpoint, payload);
    }

    public post(endpoint: string, payload = {}): Observable<any> {
        return this._http.post(endpoint, payload);
    }

    public put(endpoint: string, payload = {}): Observable<any> {
        return this._http.put(endpoint, payload);
    }

    public delete(endpoint: string, payload = {}): Observable<any> {
        return this._http.delete(endpoint, payload);
    }

}
