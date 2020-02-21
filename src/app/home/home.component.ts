import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, ExchangeRate } from '@/_models';
import { ExchangeRateService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    exchanges: ExchangeRate[] = [];
    loading = false;

    constructor(private exchangeRateService: ExchangeRateService) { }

    ngOnInit() {
        this.exchangeRateService.getAll().pipe(first()).subscribe(exchanges => {
            this.exchanges = exchanges;
        });
    }

    editar(exchange) {
        console.log(exchange);
        this.loading = true;
        this.exchangeRateService.update(exchange.id, exchange.rate)
        .subscribe(
            data => {
                this.loading = false;
                alert('Tipo de cambio modificado!');
            },
            error => {
                this.loading = false;
            });
    }
}