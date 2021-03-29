import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Encuesta, ListaEncuesta } from '../models/encuesta.model';
import { environment } from '../environments/environment';

import { Localidades,  Usuarios, Roles } from '../models/parametricas.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private url: string;
  private token: string;

  constructor(
    private httpClient: HttpClient) {
    this.url = environment.apiUrl;
    this.token = environment.token;

  }



  //Encuesta
  GetListEncuestas(todos: Number, fecha: Number, fechainicial: String, fechafinal: String, convocatoria: Number, con_id: Number): Observable<any> {
    return this.httpClient.get<ListaEncuesta[]>(this.url + '/encuesta/encuesta/GetListEncuestas?todos=' + todos + '&fecha=' + fecha + '&fechainicial=' + fechainicial + '&fechafinal=' + fechafinal + '&convocatoria=' + convocatoria + '&con_id=' + con_id + '&token=' + this.token);
  }

  addEncuesta(data: Encuesta): any {
    return this.httpClient.post<any>(this.url + '/encuesta/encuesta/addEncuesta?token=' + this.token, data);
  }

  aprobarEncuesta(data: Encuesta): any {
    return this.httpClient.post<any>(this.url + '/encuesta/encuesta/aprobarEncuesta?token=' + this.token, data);
  }

  rechazarEncuesta(data: Encuesta): any {
    return this.httpClient.post<any>(this.url + '/encuesta/encuesta/rechazarEncuesta?token=' + this.token, data);
  }

  GetEncuestaById(clm_id: number): Observable<any> {
    return this.httpClient.get(this.url + '/encuesta/encuesta/GetEncuestaById?clm_id=' + clm_id + '&token=' + this.token);
  }



  //Parametricas Generales

  //Metodo para subir Archivos PDF a la plataforma
/*  subirArchivoSoporteUrl(NombreArchivoDefinitivo: string): Observable<any> {
    alert('el archivo definitivo es: '+NombreArchivoDefinitivo);
  //  return this.httpClient.post<any>(this.url + '/encuesta/parametricas/CargarArchivo', NombreArchivoDefinitivo);
    return this.httpClient.get<any>(this.url + '/encuesta/parametricas/CargarArchivo?NombreArchivoDefinitivo='+NombreArchivoDefinitivo);
 
  }*/

  subirArchivoSoporteUrl(NombreArchivoDefinitivo : string): string { 
    return this.url + "/encuesta/parametricas/CargarArchivo?NombreArchivoDefinitivo="+NombreArchivoDefinitivo;
  }
  

  GetRegistroExistente(documento: string, convocatoria: number): Observable<any> {
    return this.httpClient.get<Encuesta[]>(this.url + '/encuesta/parametricas/GetRegistroexistente?documento=' + documento + '&convocatoria=' + convocatoria + '&token=' + this.token);
  }

  GetListaLocalidades(): Observable<any> {
    return this.httpClient.get<Localidades[]>(this.url + '/encuesta/parametricas/GetListaLocalidades?token=' + this.token);
  }

  
  GetListaRoles(): Observable<any> {
    return this.httpClient.get<Roles>(this.url + '/encuesta/parametricas/GetListaRoles?token=' + this.token);
  }





}