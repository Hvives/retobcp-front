import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ExchangeRate } from '@/_models';
import { stringify } from 'querystring';

@Injectable({ providedIn: 'root' })
export class ExchangeRateService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<ExchangeRate[]>(`${config.apiUrl}/api/rate/all-exchange`);
    }

    update(id:number, rate:number) {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
        });
        let body = {rate:rate};
        return this.http.patch<any>(`${config.apiUrl}/api/rate/exchange/${id}`, body, { headers: headers });
    }
}