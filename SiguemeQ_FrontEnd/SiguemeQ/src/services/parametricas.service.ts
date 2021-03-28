import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
import { Roles } from '../models/parametricas.model';


@Injectable({
    providedIn: 'root'
})
export class ParametricasService {


    private url: string;
    private token: string;

    constructor(
        private httpClient: HttpClient) {
        this.url = environment.apiUrl;
        this.token = environment.token;

    }



    GetListaRoles(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaRoles?token=' + this.token);
    }

    GetListaTipoSolicitud(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaTipoSolicitud?token=' + this.token);
    }

    GetListaEntidad(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaEntidad?token=' + this.token);
    }
}
