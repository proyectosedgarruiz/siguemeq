import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
import { Usuarios } from '../models/parametricas.model';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {


    private url: string;
    private token: string;

    constructor(
        private httpClient: HttpClient) {
        this.url = environment.apiUrl;
        this.token = environment.token;

    }


    //Usuario
    addUsuario(data: Usuarios): any {
        return this.httpClient.post<any>(this.url + '/usuarios/addUsuario?token=' + this.token, data);
    }

    setUsuario(data: Usuarios): any {
        return this.httpClient.post<any>(this.url + '/usuarios/setUsuario?token=' + this.token, data);
    }

    delUsuario(data: Usuarios): any {
        return this.httpClient.post<any>(this.url + '/usuarios/delUsuario?token=' + this.token, data);
    }


   

    GetUsuario(usu_id: number): Observable<any> {
        return this.httpClient.get(this.url + '/usuarios/GetUsuario?idUsuario=' + usu_id + '&token=' + this.token);
    }

    GetListaUsuarios(): Observable<any> {
        return this.httpClient.get(this.url + '/usuarios/GetListaUsuarios?token=' + this.token);
    }


    CambiarClaveUsuario(c): Observable<any> {
        return this.httpClient.post(this.url + '/usuarios/setClave?token=' + this.token, c);
    }

    AsignarClaveUsuario(id): Observable<any> {
        return this.httpClient.get(this.url + '/usuarios/AsignarClaveUsuario?nuevaclave=' + id + '&token=' + this.token);
    }

    VisualizarClaveUsuario(id): Observable<any> {
        return this.httpClient.get(this.url + '/usuarios/VisualizarClaveUsuario?clave=' + id + '&token=' + this.token);
    }

  //Usuario Autorizado
  GetUsuarioAutorizado(login: string, password: string): Observable<any> {
    return this.httpClient.get<Usuarios[]>(this.url + '/usuarios/GetUsuarioAutorizado?login=' + login + '&password=' + password + '&token=' + this.token);
  }

  GetListaPrivilegiosByRol(id): Observable<any> {
    return this.httpClient.get(this.url + '/usuarios/GetListaPrivilegiosByRol?idRol='+id+'&token=' + this.token);
}
}
