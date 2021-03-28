export class Encuesta {
  constructor(
    public clm_id: number,
    public con_id: number,
    public clm_email: string,
    public clm_nombre: string,
    public tpd_id: number,
    public clm_numdocumento: string,
    public clm_telcelular: string,
    public clm_telfijo: string,
    public loc_id: number,
    public mun_id: number,
    public dep_id: number,
    public pro_id: number,
    public clm_archivoprofesion: string,
    public hor_id: number,
    public clm_archivoformacion: string,
    public clm_cuentaexperiencia: string,
    public clm_archivoexperiencia: string,
    public clm_cuentaestudiosposgrado: string,
    public clm_estudiosposgradoscuales: string,
    public clm_publicacioneslactanciamaterna: string,
    public clm_prestaconsejeriamanera: string,
    public clm_cuentapaginaweb: string,
    public clm_whatsapp: string,
    public clm_facebook: string,
    public clm_instagram: string,
    public clm_twitter: string,
    public clm_blog: string,
    public clm_otro: string,
    public pre_id: number,
    public clm_dispuestodonar: string,
    public clm_usuariaatendidanombre1: string,
    public clm_usuariaatendidatelefono1: string,
    public clm_usuariaatendidanombre2: string,
    public clm_usuariaatendidatelefono2: string,
    public clm_usuariaatendidanombre3: string,
    public clm_usuariaatendidatelefono3: string,
    public usu_id: number,
    public usu_nombre : string,
    public clm_observacionaprobado: string,
    public clm_observacionrechazado : string,
    public clm_fechaaprobacion : string,
    public clm_fecharechazo: string,
    public clm_estado: string

  ) { }
}


export class ListaEncuesta {
  constructor(

    public clm_id: number,
    public con_nombre: string,
    public clm_email: string,
    public clm_nombre: string,
    public tpd_id: number,
    public tpd_nombre: string,
    public clm_numdocumento: string,
    public clm_telcelular: string,
    public clm_telfijo: string,
    public loc_id: number,
    public loc_nombre: string,
    public mun_id: number,
    public mun_nombre: string,
    public pro_id: number,
    public pro_nombre: string,
    public clm_archivoprofesion: string,
    public hor_id: number,
    public hor_nombre: string,
    public clm_archivoformacion: string,
    public clm_cuentaexperiencia: string,
    public clm_archivoexperiencia: string,
    public clm_cuentaestudiosposgrado: string,
    public clm_estudiosposgradoscuales: string,
    public clm_publicacioneslactanciamaterna: string,
    public clm_prestaconsejeriamanera: string,
    public clm_cuentapaginaweb: string,
    public clm_whatsapp: string,
    public clm_facebook: string,
    public clm_instagram: string,
    public clm_twitter: string,
    public clm_blog: string,
    public clm_otro: string,
    public pre_id: number,
    public pre_nombre: string,
    public clm_dispuestodonar: string,
    public clm_usuariaatendidanombre1: string,
    public clm_usuariaatendidatelefono1: string,
    public clm_usuariaatendidanombre2: string,
    public clm_usuariaatendidatelefono2: string,
    public clm_usuariaatendidanombre3: string,
    public clm_usuariaatendidatelefono3: string,
    public clm_datetimecreated: string,
    public clm_estado: string,
    public clm_observacionaprobado: string,
    public clm_fechaaprobacion : Date,
    public clm_observacionrechazado: string,
    public clm_fecharechazo : Date,
    public usu_id: number,
    public usu_nombre: string,
    
  ) { }
}


export class EdicionEncuesta {
  constructor(
      public clm_id: number,
      public editar: boolean,
     
  ) { }
}

export interface InitialValues {
  [key: string]: string | number | boolean | null;
}
