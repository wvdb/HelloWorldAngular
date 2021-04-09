import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRequestOptions } from '../models/IRequestOptions';

export declare class BaseService {
    private httpClient;
    constructor(httpClient: HttpClient);
    deleteJsonResponse<T>(url: string, requestOptions?: IRequestOptions): Observable<T>;
    deleteTextResponse(url: string, requestOptions?: IRequestOptions): Observable<string>;
    getJsonResponse<T>(url: string, requestOptions?: IRequestOptions): Observable<T>;
    getTextResponse(url: string, requestOptions?: IRequestOptions): Observable<string>;
    patchJsonResponse<T>(url: string, body: any, requestOptions?: IRequestOptions): Observable<T>;
    patchTextResponse(url: string, body: any, requestOptions?: IRequestOptions): Observable<string>;
    postJsonResponse<T>(url: string, body: any, requestOptions?: IRequestOptions): Observable<T>;
    postTextResponse(url: string, body: any, requestOptions?: IRequestOptions): Observable<string>;
    putJsonResponse<T>(url: string, body: any, requestOptions?: IRequestOptions): Observable<T>;
    putTextResponse(url: string, body: any, requestOptions?: IRequestOptions): Observable<string>;
    private shouldRefreshToken;
}
