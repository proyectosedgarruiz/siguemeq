
export class TipoSolicitud {
    constructor(
        public idTipoSolicitud: number,
        public descripcion: string
    ) { }
}


export class Entidad {
    constructor(
        public idEntidad: number,
        public nombreEntidad: string
    ) { }
}


export class Queja {
    constructor(
        public idQueja: number,
        public idTipoSolicitud: number,
        public numeroRadicadoQueja : string,
        public fechaRadicadoQueja : string,
        public fechaLimiteRespuesta : string,
        public idEntidadRemitente : number
    ) { }
}


export class Convocatoria {
    constructor(
        public con_id: number,
        public con_nombre: string,
        public con_fechainicio : Date,
        public con_horainicio : string,
        public con_fechafinal : Date,
        public con_horafinal : string,
        public con_estado : string

    ) { }
}


export class Localidades {
    constructor(
        public loc_id: number,
        public loc_nombre: string,
        public loc_codigo: number,
        public loc_estado: string
    ) { }
}

export class Municipios {
    constructor(
        public mun_id: number,
        public mun_nombre: string
    ) { }
}


export class Departamentos {
    constructor(
        public dep_id: number,
        public dep_nombre: string
    ) { }
}

export class Profesiones {
    constructor(
        public pro_id: number,
        public pro_nombre: string,
    ) { }
}


export class HorasFormacion {
    constructor(
        public hor_id: number,
        public hor_nombre: string,
    ) { }
}


export class PrecioConsulta {
    constructor(
        public pre_id: number,
        public pre_nombre: string,
    ) { }
}

export class TipoDocumento {
    constructor(
        public tpd_id: number,
        public tpd_nombre: string,
    ) { }
}

export class CriterioPriorizacionMuestra {
    constructor(
        public cpm_id: number,
        public cpm_nombre: string,
    ) { }
}


export class SubRedes {
    constructor(
        public sub_id: number,
        public sub_nombre: string,
    ) { }
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
        public nombre: string,
        public idRol: number,
        public descripcionRol : string        
    ) { }
}