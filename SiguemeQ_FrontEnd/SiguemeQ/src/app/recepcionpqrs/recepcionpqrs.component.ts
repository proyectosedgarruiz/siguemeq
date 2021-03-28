import { Component, OnInit } from '@angular/core';
import { Entidad, Queja, TipoSolicitud } from '../../models/parametricas.model';
import { ParametricasService } from '../../services/parametricas.service';


@Component({
  selector: 'app-recepcionpqrs',
  templateUrl: './recepcionpqrs.component.html',
  styleUrls: ['./recepcionpqrs.component.css']
})
export class RecepcionpqrsComponent implements OnInit {
  //@Input() publicas: Publicas;

  queja : Queja;
  ValorServicio: any;
  selectTipoSolicitud: Array<TipoSolicitud>;
  selectEntidad: Array<Entidad>;

  constructor(private parametricasservice: ParametricasService
  ) {

  }

  ngOnInit() {
    this.inicializarQueja();
    this.GetListaTipoSolicitud();
    this.GetListaEntidad();
    
  }


  GetListaTipoSolicitudResult(): any {
    return this.parametricasservice.GetListaTipoSolicitud().toPromise();
  }

  async GetListaTipoSolicitud() {
    try {
      this.ValorServicio = await this.GetListaTipoSolicitudResult();
      this.selectTipoSolicitud = this.ValorServicio.Result.Lista;
      var objtiposolicitud: TipoSolicitud = new TipoSolicitud(0, '');
      objtiposolicitud.idTipoSolicitud = 0;
      objtiposolicitud.descripcion = "-- Seleccione el Tipo de Solicitud --";
      this.selectTipoSolicitud.push(objtiposolicitud);


      this.queja.idQueja = 0;
    }
    catch (error) {
      console.error('[error en GetListaTipoSolicitud] : ' + error);
    }
  }



  GetListaEntidadResult(): any {
    return this.parametricasservice.GetListaEntidad().toPromise();
  }

  async GetListaEntidad() {
    try {
      this.ValorServicio = await this.GetListaEntidadResult();
      this.selectEntidad = this.ValorServicio.Result.Lista;
      var objentidad: Entidad = new Entidad(0, '');
      objentidad.idEntidad = 0;
      objentidad.nombreEntidad = "-- Seleccione la Entidad --";
      this.selectEntidad.push(objentidad);


      this.queja.idEntidadRemitente = 0;
    }
    catch (error) {
      console.error('[error en GetListaEntidad] : ' + error);
    }
  }
  inicializarQueja() {
    this.queja =
    {
      idQueja: 0,
      idTipoSolicitud: 0,
      numeroRadicadoQueja : '',
      fechaRadicadoQueja : '',
      fechaLimiteRespuesta : '',
      idEntidadRemitente: 0
    

    };
  }


}
