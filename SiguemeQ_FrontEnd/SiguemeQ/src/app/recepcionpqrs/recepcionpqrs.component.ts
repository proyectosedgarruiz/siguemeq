import { Component, Input, OnInit } from '@angular/core';
import { Barrio, EntidadRemitente, Localidad, PersonaAfectado, PersonaQuejoso, Publicas, Queja, TipoIdentificacion, TipoRecepcionQueja, TipoSolicitud, UPZ } from '../../models/parametricas.model';
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

  ValorServicio: any;
  selectTipoSolicitud: Array<TipoSolicitud>;
  selectTipoIdentificacion: Array<TipoIdentificacion>;
  selectEntidadRemitente: Array<EntidadRemitente>;
  selectTipoRecepcionQueja: Array<TipoRecepcionQueja>;
  selectPersonaQuejoso: Array<PersonaQuejoso>;
  selectPersonaAfectado: Array<PersonaAfectado>;
  selectLocalidad: Array<Localidad>;
  selectUPZ: Array<UPZ>;
  selectBarrio: Array<Barrio>;

  error: any;

  constructor(private parametricasservice: ParametricasService, private personasservice: PersonasService
  ) {

  }

  ngOnInit() {

    this.GetListaTipoSolicitud();
    this.GetListaEntidadRemitente();
    this.GetListaTipoRecepcionQueja();
    //    this.GetListaPersonaQuejoso();
    //   this.GetListaPersonaAfectado();
    //Datos para el Quejoso   
    this.GetListaTipoIdentificacion();
    this.GetListaLocalidad();
  }

  CargarUPZ(idlocalidad: string) {
    this.GetListaUPZ(Number(idlocalidad));

  }

  CargarBarrio(idUpz: string) {
    this.GetListaBarrio(Number(idUpz));

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


      this.queja.idQueja = 0;
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


  GetListaTipoIdentificacionResult(): any {
    return this.parametricasservice.GetListaTipoIdentificacion().toPromise();
  }

  async GetListaTipoIdentificacion() {
    try {
      this.ValorServicio = await this.GetListaTipoIdentificacionResult();
      this.selectTipoIdentificacion = this.ValorServicio.Result.Lista;
      var objtipoidentificacion: TipoIdentificacion = new TipoIdentificacion();
      objtipoidentificacion.idTipoIdentificacion = 0;
      objtipoidentificacion.descripcion = "-- Seleccione el Tipo de Identificación --";
      this.selectTipoIdentificacion.push(objtipoidentificacion);


      this.quejoso.idTipoIdentificacion = '';
    }
    catch (error) {
      console.error('[error en GetListaTipoIdentificacion] : ' + error);
    }
  }




  GetListaLocalidadResult(): any {
    return this.parametricasservice.GetListaLocalidad().toPromise();
  }

  async GetListaLocalidad() {
    try {
      this.ValorServicio = await this.GetListaLocalidadResult();
      this.selectLocalidad = this.ValorServicio.Result.Lista;
      var objLocalidad: Localidad = new Localidad();
      objLocalidad.idLocalidad = 0;
      objLocalidad.descripcionLocalidad = "-- Seleccione la Localidad --";
      this.selectLocalidad.push(objLocalidad);


      this.quejoso.idLocalidad = 0;
    }
    catch (error) {
      console.error('[error en GetListaLocalidad] : ' + error);
    }
  }



  GetListaUPZResult(idlocalidad: number): any {
    return this.parametricasservice.GetListaUPZ(idlocalidad).toPromise();
  }

  async GetListaUPZ(idlocalidad: number) {
    try {
      debugger;
      this.ValorServicio = await this.GetListaUPZResult(idlocalidad);
      this.selectUPZ = this.ValorServicio.Result.Lista;
      var objUPZ: UPZ = new UPZ();
      objUPZ.idUpz = 0;
      objUPZ.descripcionUpz = "-- Seleccione la UPZ --";
      this.selectUPZ.push(objUPZ);


      this.quejoso.idUpz = 0;
    }
    catch (error) {
      console.error('[error en GetListaUPZ] : ' + error);
    }
  }


  GetListaBarrioResult(idUpz: number): any {
    return this.parametricasservice.GetListaBarrio(idUpz).toPromise();
  }

  async GetListaBarrio(idUpz: number) {
    try {
      debugger;
      this.ValorServicio = await this.GetListaBarrioResult(idUpz);
      this.selectBarrio = this.ValorServicio.Result.Lista;
      var objBarrio: Barrio = new Barrio();
      objBarrio.idBarrio = 0;
      objBarrio.descripcionBarrio = "-- Seleccione el Barrio --";
      this.selectBarrio.push(objBarrio);


      this.quejoso.idBarrio = 0;
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

        // this.ErrorToast('Error al guardar el formulario de datos iniciales.')
      }
    );
  }


}
