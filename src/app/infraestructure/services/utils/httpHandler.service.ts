import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpHandlerService {

    constructor(
        private _httpClient: HttpClient
    ) {
    }

    public get(url: string, params: any, options?: {}): Observable<any> {
        return this.requestHelper(url, params, null, 'GET', options);
    }

    public post(url: string, body: any, options?: {}): Observable<any> {
        return this.requestHelper(url, null, body, 'POST', options);
    }

    public put(url: string, body: any, options?: {}): Observable<any> {
        return this.requestHelper(url, null, body, 'PUT', options);
    }

    public delete(url: string, body: any, options?: {}): Observable<any> {
        return this.requestHelper(url, null, body, 'DELETE', options);
    }

    requestHelper(url: string, params: any, body: any, method: string, options?: {}): Observable<Response> {

        if (!options) {
            if (body && typeof body !== 'string') {
                body = JSON.stringify(body);
            }
            if (params && typeof params == 'string') {
                params = new HttpParams({
                    fromString: params
                });
            }
            options = {
                body: body,
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }),
                params: params
            };
        }
        const request$ = this._httpClient.request(method, url, options);

        return this.handleResponse(request$);
    }

    handleResponse(request$: Observable<any>): Observable<any> {
        return request$.pipe(tap((fields: any) => fields),
            catchError(this.handleError<any>(''))
        );
    }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}
