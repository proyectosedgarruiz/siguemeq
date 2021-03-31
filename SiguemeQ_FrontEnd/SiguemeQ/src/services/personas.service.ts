import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../environments/environment';

import { PersonaQuejoso, PersonaAfectado } from '../models/personas.model';


@Injectable({
    providedIn: 'root'
})
export class PersonasService {


    private url: string;
    private token: string;

    constructor(
        private httpClient: HttpClient) {
        this.url = environment.apiUrl;
        this.token = environment.token;

    }

    //Persona Quejoso
    addPersonaQuejoso(data: PersonaQuejoso): any {
        return this.httpClient.post<any>(this.url + '/personas/addPersona?token=' + this.token, data);
    }

    //Persona Afectado
    addPersonaAfectado(data: PersonaAfectado): any {
        return this.httpClient.post<any>(this.url + '/personas/addPersona?token=' + this.token, data);
    }
}
