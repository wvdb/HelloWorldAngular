import { HttpHeaders, HttpParams } from '@angular/common/http';
export interface IRequestOptions {
    headers?: HttpHeaders | {
        [header: string]: string | Array<string>;
    };
    params?: HttpParams | {
        [param: string]: string | Array<string>;
    };
}
