
export class TipoSolicitud {
        public idTipoSolicitud: number;
        public descripcion: string;
   
}

export class EntidadRemitente {
        public idEntidadRemitente: number;
        public descripcion: string;
}


export class EntidadInvolucrada {
        public idEntidad: number;
        public nombreEntidad: string;
}



export class TipoRecepcionQueja {
        public idTipoRecepcionQueja: number;
        public descripcion: string;
}


export class TipoIdentificacion {
        public idTipoIdentificacion: string;
        public descripcion: string;

}

export class Localidad {
    public idLocalidad: number;
    public descripcionLocalidad: string;

}

export class UPZ {
    public idUpz: number;
    public descripcionUpz: string;
    public idLocalidad : number;

}

export class Barrio {
    public idBarrio: number;
    public descripcionBarrio: string;
    public idUpz : number;

}


export class Queja {

        public idQueja: number;
        public idTipoSolicitud: number;
        public numeroRadicadoQueja : string;
        public fechaRadicadoQueja : string;
        public fechaLimiteRespuesta : string;
        public idEntidadRemitente : number;
        public numeroRadicadoAtencionUsuario : string;
        public idTipoRecepcionQueja : number;
        public idPersonaQuejoso : number;
        public idPersonaAfectado : number;

}


export class Convocatoria {
        public con_id: number;
        public con_nombre: string;
        public con_fechainicio : Date;
        public con_horainicio : string;
        public con_fechafinal : Date;
        public con_horafinal : string;
        public con_estado : string;

}


export class Localidades {
        public loc_id: number;
        public loc_nombre: string;
        public loc_codigo: number;
        public loc_estado: string;
}




export class Roles {
    constructor(
        public idRol: number,
        public descripcion: string
       
    ) { }
}

export class UsuarioAutorizado {
    constructor(
        public idUsuario: string,
        public idRol: number,
        public nombre: string,
        public descripcionRol : string

    ) { }
}


export class Usuarios {
    constructor(
        public idUsuario: string,
        public nombre: string,
        public password: string,
        public estado: string,
        public idRol: number,
        public usrCreado: string,
        public usrModificado: string,
        public usu_asignar_clave : string,
        public usu_visualizar_clave : string,
        public clave : string



    ) { }
}

export class UsuariosLista {
    constructor(
        public idUsuario: number,
        public nombre: string,
        public estado: string,
        public fechaCreado: string,
        public fechaActualizado: string,
        public usrCreado: string,
        public usrModificado: string,
        public idRol: number,
        public descripcionRol : string

    ) { }
}
export class CambioClave {

    constructor(

        public clave_anterior: string,
        public clave_nueva: string,
        public clave_confirmada: string,
        public idUsuario: number
        
    ) { }
}


export class Publicas {

    constructor(

        public autorized : boolean,
        public idUsuario: string,
        public loginUsuario: string,
        public nombre: string,
        public idRol: number,
        public descripcionRol : string        
    ) { }
}