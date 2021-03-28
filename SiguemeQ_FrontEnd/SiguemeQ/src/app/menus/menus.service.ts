import { Injectable } from '@angular/core';

export class MenuOpcion {
   public id: number;
   public fullName: string;
   public expanded?: boolean;
   public componente : string;
   public items?:  MenuOpcion[];
}

var menuopcion: MenuOpcion[] = 
[
    {
    id: 1,
    fullName: "Módulo Administración",
    expanded: false,
    componente : '',
    items: [{
        id: 2,
        fullName: "Samantha Bright",
        expanded: false,
        componente : 'app-gestionusuarios'

    }]

},
    {
    id: 3,
    fullName: "Módulo Quejas",
    expanded: false,
    componente : '',
    items: [{
        id: 4,
        fullName: "otro menu",
        expanded: false,
        componente : 'app-gestionprofesion'

    }]
}

];

@Injectable()
export class Service {
    getMenuOpcion(): MenuOpcion[] {
        return menuopcion;
    }
}
