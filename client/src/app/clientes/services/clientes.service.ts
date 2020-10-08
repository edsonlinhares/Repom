import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from '../../services/base.service';
import { Cartao } from '../models/cartao';
import { Cliente } from '../models/cliente'

@Injectable()
export class ClientesService extends BaseService {

    private cliente: Cliente = new Cliente();

    constructor(private http: HttpClient) {
        super();
    }

    obterCliente(document: string): Observable<Cliente> {
        let response = this.http
            .get<Cliente>(`${this.UrlApi}client-info/${document}`)
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            )

        return response;
    }

    listarCartoes(document: string): Observable<Cartao[]> {
        let response = this.http
            .get<Cliente>(`${this.UrlApi}card-info/${document}`)
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            )

        return response;
    }

}