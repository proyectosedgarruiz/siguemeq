import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Encuesta, ListaEncuesta } from '../models/encuesta.model';
import { environment } from '../environments/environment';

import { Localidades, TipoDocumento, Usuarios, Roles, Municipios, Profesiones, HorasFormacion, PrecioConsulta, Convocatoria, Departamentos } from '../models/parametricas.model';

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

  GetListaMunicipios(): Observable<any> {
    return this.httpClient.get<Municipios[]>(this.url + '/encuesta/parametricas/GetListaMunicipios?token=' + this.token);
  }

  GetListaDepartamentos(): Observable<any> {
    return this.httpClient.get<Departamentos[]>(this.url + '/encuesta/parametricas/GetListaDepartamentos?token=' + this.token);
  }


  GetListaTipoDocumentos(): Observable<any> {
    return this.httpClient.get<TipoDocumento>(this.url + '/encuesta/parametricas/GetListaTipoDocumentos?token=' + this.token);
  }

  GetListaRoles(): Observable<any> {
    return this.httpClient.get<Roles>(this.url + '/encuesta/parametricas/GetListaRoles?token=' + this.token);
  }


  //Gestión Convocatorias
  GetListaConvocatorias(): Observable<any> {
    return this.httpClient.get<Convocatoria>(this.url + '/encuesta/parametricas/GetListaConvocatorias?token=' + this.token);
  }
  addConvocatoria(data: Convocatoria): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/addConvocatoria?token=' + this.token, data);
  }

  setConvocatoria(data: Convocatoria): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/setConvocatoria?token=' + this.token, data);
  }

  GetConvocatoria(con_id: number): Observable<any> {
    return this.httpClient.get(this.url + '/encuesta/parametricas/GetConvocatoria?con_id=' + con_id + '&token=' + this.token);
  }
  GetConvocatoriaVigente(): Observable<any> {
    return this.httpClient.get<Convocatoria[]>(this.url + '/encuesta/parametricas/GetConvocatoriaVigente?token=' + this.token);
  }

  delConvocatoria(data: Convocatoria): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/delConvocatoria?token=' + this.token, data);
  }



  //Gestión Horas Formacion
  GetListaHorasFormacion(): Observable<any> {
    return this.httpClient.get<HorasFormacion>(this.url + '/encuesta/parametricas/GetListaHorasFormacion?token=' + this.token);
  }

  addHorasFormacion(data: HorasFormacion): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/addHorasFormacion?token=' + this.token, data);
  }

  setHorasFormacion(data: HorasFormacion): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/setHorasFormacion?token=' + this.token, data);
  }

  GetHorasFormacion(hor_id: number): Observable<any> {
    return this.httpClient.get(this.url + '/encuesta/parametricas/GetHorasFormacion?hor_id=' + hor_id + '&token=' + this.token);
  }

  delHorasFormacion(data: HorasFormacion): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/delHorasFormacion?token=' + this.token, data);
  }


  //Gestión Precios Consulta
  GetListaPrecioConsulta(): Observable<any> {
    return this.httpClient.get<PrecioConsulta>(this.url + '/encuesta/parametricas/GetListaPrecioConsulta?token=' + this.token);
  }

  addPrecioConsulta(data: PrecioConsulta): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/addPrecioConsulta?token=' + this.token, data);
  }

  setPrecioConsulta(data: PrecioConsulta): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/setPrecioConsulta?token=' + this.token, data);
  }

  GetPrecioConsulta(pre_id: number): Observable<any> {
    return this.httpClient.get(this.url + '/encuesta/parametricas/GetPrecioConsulta?pre_id=' + pre_id + '&token=' + this.token);
  }

  delPrecioConsulta(data: PrecioConsulta): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/delPrecioConsulta?token=' + this.token, data);
  }


  //Gestión Profesiones
  GetListaProfesiones(): Observable<any> {
    return this.httpClient.get<Profesiones>(this.url + '/encuesta/parametricas/GetListaProfesiones?token=' + this.token);
  }

  addProfesion(data: Profesiones): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/addProfesion?token=' + this.token, data);
  }

  setProfesion(data: Profesiones): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/setProfesion?token=' + this.token, data);
  }

  GetProfesion(pro_id: number): Observable<any> {
    return this.httpClient.get(this.url + '/encuesta/parametricas/GetProfesion?pro_id=' + pro_id + '&token=' + this.token);
  }

  delProfesion(data: Profesiones): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/delProfesion?token=' + this.token, data);
  }

}