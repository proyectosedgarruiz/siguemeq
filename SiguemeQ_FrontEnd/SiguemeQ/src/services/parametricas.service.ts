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


    GetListaTipoRecepcionQueja(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaTipoRecepcionQueja?token=' + this.token);
    }

    GetListaEntidadRemitente(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaEntidadRemitente?token=' + this.token);
    }

  /* GetListaPersonaQuejoso(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaPersonaQuejoso?token=' + this.token);
    }

    GetListaPersonaAfectado(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaPersonaAfectado?token=' + this.token);
    }*/


    /*GetListaEntidadInvolucrada(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaEntidadInvolucrada?token=' + this.token);
    }*/

    GetListaTipoIdentificacion(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaTipoIdentificacion?token=' + this.token);
    }

    GetListaLocalidad(): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaLocalidad?token=' + this.token);
    }

    GetListaUPZ(idlocalidad : number): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaUPZ?token=' + this.token+'&idlocalidad='+idlocalidad);
    }

    GetListaBarrio(idUPZ : number): Observable<any> {
        return this.httpClient.get(this.url + '/parametricas/GetListaBarrio?token=' + this.token+'&idUPZ='+idUPZ);
    }
}

