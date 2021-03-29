import { Component, ViewChild } from '@angular/core';
import { Publicas, Convocatoria } from '../models/parametricas.model';
import { EdicionEncuesta, InitialValues } from 'src/models/encuesta.model';
import { EncuestaService } from 'src/services/encuesta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('encuesta', null) encuesta;
  title = 'AutorizacionHomenaje';
  VisualizarLogin: boolean = false;
  VisualizarFormulario: boolean = false;
  VisualizarDashboard: boolean = false;
  publicas: Publicas;
  edicion: EdicionEncuesta;


  initialValues: InitialValues;
  jsonObj: any;
  error: any;
  selectConvocatorias: Array<Convocatoria>;

  constructor(private encuestaservice: EncuestaService) { }

  ngOnInit() {
    // this.edicion.editar = false;
    this.inicializarPublicas();
    this.VisualizarLogin = true;
    this.VisualizarFormulario = false;
  }




  usuarioAutorizado($event) {
    this.publicas = $event;

    if (this.publicas.autorized === true) //Esta autorizado
    {
      this.VisualizarLogin = false;
      this.VisualizarFormulario = false;
      this.VisualizarDashboard = true;
    }
  }


  cerrarsesion($event) {
    if ($event === true) //Se cierra sesión
    {
      this.publicas.autorized = false;
      this.publicas.idUsuario = '';
      this.publicas.idRol = 0;
      this.publicas.descripcionRol ='';
      this.publicas.nombre = '';

      this.VisualizarLogin = true;
      this.VisualizarDashboard = false;

    }
  }





  inicializarPublicas() {
    this.publicas =
    {
      autorized: false,
      idUsuario: '',
      loginUsuario : '',
      idRol: 0,
      nombre : '',
      descripcionRol: ''

    };
  }

}
