import { Component, Input, OnInit } from '@angular/core';
import { Barrio, EntidadRemitente, Localidad, Publicas, Queja, TipoIdentificacion, TipoRecepcionQueja, TipoSolicitud, UPZ } from '../../models/parametricas.model';
import { PersonaQuejoso, PersonaAfectado } from '../../models/personas.model';

import { ParametricasService } from '../../services/parametricas.service';
import { PersonasService } from '../../services/personas.service';


@Component({
  selector: 'app-recepcionpqrs',
  templateUrl: './recepcionpqrs.component.html',
  styleUrls: ['./recepcionpqrs.component.css']
})
export class RecepcionpqrsComponent implements OnInit {
  @Input() publicas: Publicas;

  queja: Queja = new Queja();
  quejoso: PersonaQuejoso = new PersonaQuejoso();
  afectado: PersonaAfectado = new PersonaAfectado();
  ValorServicio: any;
  selectTipoSolicitud: Array<TipoSolicitud>;

  selectEntidadRemitente: Array<EntidadRemitente>;
  selectTipoRecepcionQueja: Array<TipoRecepcionQueja>;
  selectPersonaQuejoso: Array<PersonaQuejoso>;
  selectPersonaAfectado: Array<PersonaAfectado>;

  selectTipoIdentificacionQuejoso: Array<TipoIdentificacion>;
  selectTipoIdentificacionAfectado: Array<TipoIdentificacion>;
  
  selectLocalidadQuejoso: Array<Localidad>;
  selectUPZQuejoso: Array<UPZ>;
  selectBarrioQuejoso: Array<Barrio>;

  selectLocalidadAfectado: Array<Localidad>;
  selectUPZAfectado: Array<UPZ>;
  selectBarrioAfectado: Array<Barrio>;



  quejosoafectado: string;
  displaydatosafectado: boolean = false;

  error: any;

  constructor(private parametricasservice: ParametricasService, private personasservice: PersonasService
  ) {

  }

  ngOnInit() {

    //Datos de la Queja
    this.GetListaTipoSolicitud();
    this.GetListaEntidadRemitente();
    this.GetListaTipoRecepcionQueja();

    //Datos para el Quejoso  
    this.GetListaTipoIdentificacionQuejoso();
    this.GetListaLocalidadQuejoso();


  }


  GetListaTipoSolicitudResult(): any {
    return this.parametricasservice.GetListaTipoSolicitud().toPromise();
  }

  async GetListaTipoSolicitud() {
    try {
      this.ValorServicio = await this.GetListaTipoSolicitudResult();
      this.selectTipoSolicitud = this.ValorServicio.Result.Lista;
      var objtiposolicitud: TipoSolicitud = new TipoSolicitud();
      objtiposolicitud.idTipoSolicitud = 0;
      objtiposolicitud.descripcion = "-- Seleccione el Tipo de Solicitud --";
      this.selectTipoSolicitud.push(objtiposolicitud);


      this.queja.idTipoSolicitud = 0;
    }
    catch (error) {
      console.error('[error en GetListaTipoSolicitud] : ' + error);
    }
  }



  GetListaEntidadRemitenteResult(): any {
    return this.parametricasservice.GetListaEntidadRemitente().toPromise();
  }

  async GetListaEntidadRemitente() {
    try {
      this.ValorServicio = await this.GetListaEntidadRemitenteResult();
      this.selectEntidadRemitente = this.ValorServicio.Result.Lista;
      var objentidadremitente: EntidadRemitente = new EntidadRemitente();
      objentidadremitente.idEntidadRemitente = 0;
      objentidadremitente.descripcion = "-- Seleccione la Entidad Remitente --";
      this.selectEntidadRemitente.push(objentidadremitente);


      this.queja.idEntidadRemitente = 0;
    }
    catch (error) {
      console.error('[error en GetListaEntidad] : ' + error);
    }
  }


  GetListaTipoRecepcionQuejaResult(): any {
    return this.parametricasservice.GetListaTipoRecepcionQueja().toPromise();
  }

  async GetListaTipoRecepcionQueja() {
    try {
      this.ValorServicio = await this.GetListaTipoRecepcionQuejaResult();
      this.selectTipoRecepcionQueja = this.ValorServicio.Result.Lista;
      var objtiporecepcionqueja: TipoRecepcionQueja = new TipoRecepcionQueja();
      objtiporecepcionqueja.idTipoRecepcionQueja = 0;
      objtiporecepcionqueja.descripcion = "-- Seleccione el Tipo de Recepción --";
      this.selectTipoRecepcionQueja.push(objtiporecepcionqueja);


      this.queja.idTipoRecepcionQueja = 0;
    }
    catch (error) {
      console.error('[error en GetListaEntidad] : ' + error);
    }
  }

  /*
    GetListaPersonaQuejosoResult(): any {
      return this.parametricasservice.GetListaPersonaQuejoso().toPromise();
    }
  
    async GetListaPersonaQuejoso() {
      try {
        this.ValorServicio = await this.GetListaPersonaQuejosoResult();
        this.selectPersonaQuejoso = this.ValorServicio.Result.Lista;
        var objpersonaquejoso: PersonaQuejoso = new PersonaQuejoso(0, '');
        objpersonaquejoso.idPersona = 0;
        objpersonaquejoso.nombresApellidos = "-- Seleccione el Quejoso --";
        this.selectPersonaQuejoso.push(objpersonaquejoso);
  
  
        this.queja.idPersonaQuejoso = 0;
      }
      catch (error) {
        console.error('[error en GetListaPersonaQuejoso] : ' + error);
      }
    }
  
  
    GetListaPersonaAfectadoResult(): any {
      return this.parametricasservice.GetListaPersonaAfectado().toPromise();
    }
  
    async GetListaPersonaAfectado() {
      try {
        this.ValorServicio = await this.GetListaPersonaAfectadoResult();
        this.selectPersonaAfectado = this.ValorServicio.Result.Lista;
        var objpersonaafectado: PersonaAfectado = new PersonaAfectado(0, '');
        objpersonaafectado.idPersona = 0;
        objpersonaafectado.nombresApellidos = "-- Seleccione el Afectado --";
        this.selectPersonaAfectado.push(objpersonaafectado);
  
  
        this.queja.idPersonaAfectado = 0;
      }
      catch (error) {
        console.error('[error en GetListaPersonaAfectado] : ' + error);
      }
    }
  
  */


  CargarUPZQuejoso(idlocalidad: string) {
    this.GetListaUPZQuejoso(Number(idlocalidad));

  }

  CargarUPZAfectado(idlocalidad: string) {
    this.GetListaUPZAfectado(Number(idlocalidad));

  }

  CargarBarrioQuejoso(idUpz: string) {
    this.GetListaBarrioQuejoso(Number(idUpz));

  }
  CargarBarrioAfectado(idUpz: string) {
    this.GetListaBarrioAfectado(Number(idUpz));
  }





  GetListaTipoIdentificacionResult(): any {
    return this.parametricasservice.GetListaTipoIdentificacion().toPromise();
  }

  async GetListaTipoIdentificacionQuejoso() {
    try {
      debugger;
      this.ValorServicio = await this.GetListaTipoIdentificacionResult();
      this.selectTipoIdentificacionQuejoso = this.ValorServicio.Result.Lista;
      var objtipoidentificacion: TipoIdentificacion = new TipoIdentificacion();
      objtipoidentificacion.idTipoIdentificacion = '';
      objtipoidentificacion.descripcion = "-- Seleccione el Tipo de Identificación --";
      this.selectTipoIdentificacionQuejoso.push(objtipoidentificacion);
      this.quejoso.idTipoIdentificacion = '';
    }
    catch (error) {
      console.error('[error en GetListaTipoIdentificacion] : ' + error);
    }
  }

  async GetListaTipoIdentificacionAfectado() {
    try {
      this.ValorServicio = await this.GetListaTipoIdentificacionResult();
      this.selectTipoIdentificacionAfectado = this.ValorServicio.Result.Lista;
      var objtipoidentificacion: TipoIdentificacion = new TipoIdentificacion();
      objtipoidentificacion.idTipoIdentificacion = '';
      objtipoidentificacion.descripcion = "-- Seleccione el Tipo de Identificación --";
      this.selectTipoIdentificacionAfectado.push(objtipoidentificacion);
      this.afectado.idTipoIdentificacion = '';
    }
    catch (error) {
      console.error('[error en GetListaTipoIdentificacion] : ' + error);
    }
  }




  GetListaLocalidadResult(): any {
    return this.parametricasservice.GetListaLocalidad().toPromise();
  }

  async GetListaLocalidadQuejoso() {
    try {
      this.ValorServicio = await this.GetListaLocalidadResult();
      this.selectLocalidadQuejoso = this.ValorServicio.Result.Lista;
      var objLocalidad: Localidad = new Localidad();
      objLocalidad.idLocalidad = 0;
      objLocalidad.descripcionLocalidad = "-- Seleccione la Localidad --";
      this.selectLocalidadQuejoso.push(objLocalidad);
      this.quejoso.idLocalidad = 0;
    }
    catch (error) {
      console.error('[error en GetListaLocalidad] : ' + error);
    }
  }

  async GetListaLocalidadAfectado() {
    try {
      this.ValorServicio = await this.GetListaLocalidadResult();
      this.selectLocalidadAfectado = this.ValorServicio.Result.Lista;
      var objLocalidad: Localidad = new Localidad();
      objLocalidad.idLocalidad = 0;
      objLocalidad.descripcionLocalidad = "-- Seleccione la Localidad --";
      this.selectLocalidadAfectado.push(objLocalidad);
      this.afectado.idLocalidad = 0;
    }
    catch (error) {
      console.error('[error en GetListaLocalidad] : ' + error);
    }
  }



  GetListaUPZResult(idlocalidad: number): any {
    return this.parametricasservice.GetListaUPZ(idlocalidad).toPromise();
  }

  async GetListaUPZQuejoso(idlocalidad: number) {
    try {
      debugger;
      this.ValorServicio = await this.GetListaUPZResult(idlocalidad);
      this.selectUPZQuejoso = this.ValorServicio.Result.Lista;
      var objUPZ: UPZ = new UPZ();
      objUPZ.idUpz = 0;
      objUPZ.descripcionUpz = "-- Seleccione la UPZ --";
      this.selectUPZQuejoso.push(objUPZ);
      this.quejoso.idUpz = 0;
    }
    catch (error) {
      console.error('[error en GetListaUPZ] : ' + error);
    }
  }

  async GetListaUPZAfectado(idlocalidad: number) {
    try {
      debugger;
      this.ValorServicio = await this.GetListaUPZResult(idlocalidad);
      this.selectUPZAfectado = this.ValorServicio.Result.Lista;
      var objUPZ: UPZ = new UPZ();
      objUPZ.idUpz = 0;
      objUPZ.descripcionUpz = "-- Seleccione la UPZ --";
      this.selectUPZAfectado.push(objUPZ);
      this.afectado.idUpz = 0;
    }
    catch (error) {
      console.error('[error en GetListaUPZ] : ' + error);
    }
  }

  GetListaBarrioResult(idUpz: number): any {
    return this.parametricasservice.GetListaBarrio(idUpz).toPromise();
  }

  async GetListaBarrioQuejoso(idUpz: number) {
    try {
      debugger;
      this.ValorServicio = await this.GetListaBarrioResult(idUpz);
      this.selectBarrioQuejoso = this.ValorServicio.Result.Lista;
      var objBarrio: Barrio = new Barrio();
      objBarrio.idBarrio = 0;
      objBarrio.descripcionBarrio = "-- Seleccione el Barrio --";
      this.selectBarrioQuejoso.push(objBarrio);
      this.quejoso.idBarrio = 0;
    }
    catch (error) {
      console.error('[error en GetListaBarrio] : ' + error);
    }
  }

  async GetListaBarrioAfectado(idUpz: number) {
    try {
      debugger;
      this.ValorServicio = await this.GetListaBarrioResult(idUpz);
      this.selectBarrioAfectado = this.ValorServicio.Result.Lista;
      var objBarrio: Barrio = new Barrio();
      objBarrio.idBarrio = 0;
      objBarrio.descripcionBarrio = "-- Seleccione el Barrio --";
      this.selectBarrioAfectado.push(objBarrio);
      this.afectado.idBarrio = 0;
    }
    catch (error) {
      console.error('[error en GetListaBarrio] : ' + error);
    }
  }

  confirmarGrabacionQuejoso() {
    var r = confirm("¿Confirma grabación de datos del Quejoso ?");
    if (r == true) {
      this.GrabarDatosQuejoso();
    }
  }

  GrabarDatosQuejoso() {
    this.quejoso.usrCreado = this.publicas.loginUsuario;
    this.quejoso.usrModificado = this.publicas.loginUsuario;

    this.personasservice.addPersonaQuejoso(this.quejoso).subscribe(result => {

      if (result.OperacionExitosa == true) {
        alert('Se ha grabado correctamente los datos del Quejoso');
      }
      else {
        alert('Se presentó un error al grabar el Dato del Quejoso');
      }
    },
      error => {
        this.error = error;
        console.log(this.error.statusText);
        console.error('Error [formulario]');
        console.error(error);
      }
    );
  }


  confirmarGrabacionAfectado() {
    var r = confirm("¿Confirma grabación de datos del Afectado ?");
    if (r == true) {
      this.GrabarDatosAfectado();
    }
  }

  GrabarDatosAfectado() {
    this.afectado.usrCreado = this.publicas.loginUsuario;
    this.afectado.usrModificado = this.publicas.loginUsuario;

    this.personasservice.addPersonaAfectado(this.afectado).subscribe(result => {

      if (result.OperacionExitosa == true) {
        alert('Se ha grabado correctamente los datos del Afectado');
      }
      else {
        alert('Se presentó un error al grabar el Dato del Afectado');
      }
    },
      error => {
        this.error = error;
        console.log(this.error.statusText);
        console.error('Error [formulario]');
        console.error(error);
      }
    );
  }



  cargardatosafectadoquejoso(estado: Boolean) {
    debugger;
    this.afectado = new PersonaAfectado();
    //Datos para el Afectado
    this.GetListaTipoIdentificacionAfectado();
    this.GetListaLocalidadAfectado();

    if (estado === true) //El afectado es el mismo quejoso
    {
      this.afectado = this.quejoso;
      this.GetListaUPZAfectado(this.afectado.idLocalidad);
      this.GetListaBarrioAfectado(this.afectado.idUpz);
    }
    this.displaydatosafectado = true;
  }
}
