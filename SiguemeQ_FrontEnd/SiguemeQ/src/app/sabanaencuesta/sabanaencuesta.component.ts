import { Component, OnInit, Input } from '@angular/core';
import { EncuestaService } from '../../services/encuesta.service';
import { ListaEncuesta, EdicionEncuesta } from '../../models/encuesta.model';
import { DxDataGridModule } from 'devextreme-angular';
import { Publicas, Convocatoria } from 'src/models/parametricas.model';
@Component({
  selector: 'app-sabanaencuesta',
  templateUrl: './sabanaencuesta.component.html',
  styleUrls: ['./sabanaencuesta.component.css']
})
export class SabanaencuestaComponent implements OnInit {
  @Input() publicas: Publicas;
  edicion: EdicionEncuesta;

  selectEncuestas: Array<ListaEncuesta>;
  selectConvocatoria: Array<Convocatoria>;
  ValorServicio: any;
  convocatoria: number;


  tiposabana: Number = 0;
  fechainicial: String = '1900-01-01';
  fechafinal: String = '1900-01-01';
  todos: Number = 0;
  fecha: Number = 0;
  con_id: Number = 0;
  VisualizarFechas: Boolean = false;
  VisualizarSabana: Boolean = false;
  VisualizarEncuesta: Boolean = false; //Permite visualizar el formulario de Detalle de la Solicitud
  VisualizarTituloSabana: Boolean = true;
  VisualizarEditarEncuesta: Boolean = false;
  VisualizarConvocatorias: Boolean = false;

  constructor(private encuestaservice: EncuestaService) { }

  ngOnInit() {

    this.InicializarEdicion();
    this.GetListaConvocatorias();

  }


  GetListaConvocatoriasResult(): any {
    return this.encuestaservice.GetListaConvocatorias().toPromise();
  }

  async GetListaConvocatorias() {
    try {
      this.ValorServicio = await this.GetListaConvocatoriasResult();
      this.selectConvocatoria = this.ValorServicio.Result.Lista;
      var objconvocatoria: Convocatoria = new Convocatoria(0, '', null, '', null, '', '');
      objconvocatoria.con_id = 0;
      objconvocatoria.con_nombre = "-- Seleccione la Convocatoria --";
      this.selectConvocatoria.push(objconvocatoria);
      this.selectConvocatoria.sort((a, b) => (a.con_id > b.con_id) ? 1 : ((b.con_id > a.con_id) ? -1 : 0));
      this.con_id = 0;

    }
    catch (error) {
      console.error('[error en GetListaTipoDocumentos] : ' + error);
    }
  }
  addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  hoyFecha() {
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth() + 1;
    var yyyy = hoy.getFullYear();

    dd = this.addZero(dd);
    mm = this.addZero(mm);

    return dd + '/' + mm + '/' + yyyy;
  }

  AsignarFechasIniciales() {
    this.fechainicial = this.hoyFecha();
    this.fechafinal = this.hoyFecha();
  }


  Consultarsabana() {

    if (this.tiposabana == 1) {
      this.todos = 1;
      this.fecha = 0;
      this.convocatoria = 0;
      this.con_id = 0;
    }
    else if (this.tiposabana == 2) {
      this.todos = 0;
      this.fecha = 1;
      this.convocatoria = 0;
      this.con_id = 0;
    }
    else if (this.tiposabana == 3) {
      this.todos = 0;
      this.fecha = 0;
      this.convocatoria = 1;
    
    }

    if (this.tiposabana == 0) {
      alert('Debe seleccionar un criterio de consulta de la sábana');
    }
    else if (this.fecha == 1 && this.fechainicial === null && this.fechafinal === null) {
      alert('Debe indicar una fecha de inicio y una fecha final de búsqueda');
    }
    else if (this.convocatoria == 1 && this.con_id === 0) {
      alert('Debe indicar una convocatoria');
    }
    else {
      this.VisualizarSabana = true;
      this.GetListaEncuestas();
    }
  }

  GetListaEncuestas() {
    this.encuestaservice.GetListEncuestas(this.todos, this.fecha, this.fechainicial, this.fechafinal, this.convocatoria, this.con_id).subscribe(
      result => {
        if (result != null) {
  
          this.selectEncuestas = result.Result;
        }
        else
          alert('No se encontraron registros asociados a la consulta');
      },
      error => {
        // this.error = error;
        console.error('Error [GetListEncuestas]');
        console.error(error);

      }
    );
  }



  VerDetalle(id) {//Ver Detalle SOlicitud
    this.edicion.editar = true;
    this.edicion.clm_id = id;
    this.VisualizarEncuesta = true;
    this.VisualizarSabana = false;
    this.VisualizarTituloSabana = false;
    this.VisualizarEditarEncuesta = true;

  }


  finalizoedicion($event) {
    if ($event === true) //Se cierra la ventana de Formulario
    {
      this.edicion.editar = false;
      this.VisualizarEncuesta = false;
      this.VisualizarSabana = true;
      this.VisualizarTituloSabana = true;
      this.VisualizarEditarEncuesta = false;
      this.Consultarsabana();
    }
  }

  InicializarEdicion() {
    this.edicion =
    {
      editar: false,
      clm_id: 0
    };
  }
}
