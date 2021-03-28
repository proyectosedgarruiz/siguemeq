import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Publicas } from '../../models/parametricas.model';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  @Input() publicas: Publicas;
  @Output() public cerrar: EventEmitter<boolean> = new EventEmitter<boolean>();


  VisualizarSabana: boolean = false;
  VisualizarGestionUsuarios: boolean = false;
  VisualizarGestionConvocatorias : boolean = false;
  VisualizarGestionHorasFormacion : boolean = false;
  VisualizarGestionPreciosConsulta : boolean = false;
  VisualizarGestionProfesiones : boolean = false;
  opcion: string;

  constructor() { }

  ngOnInit() {
    this.opcion= "0";
  }


  EjecutarAccion() {
   
    switch (this.opcion) {
      case "1": this.DescargarSabana(); break;
      case "2": this.GestionUsuarios(); break;
      case "3": this.GestionConvocatorias(); break;
      case "4": this.GestionHorasFormacion(); break;
      case "5": this.GestionPreciosConsulta(); break;
      case "6": this.GestionProfesiones(); break;
    
      
    }
  }

  DescargarSabana() {
    this.VisualizarSabana = true;
    this.VisualizarGestionUsuarios = false;
    this.VisualizarGestionConvocatorias = false;
    this.VisualizarGestionHorasFormacion = false;
    this.VisualizarGestionPreciosConsulta = false;
    this.VisualizarGestionProfesiones = false;
  }

  GestionUsuarios() {
    this.VisualizarSabana = false;
    this.VisualizarGestionUsuarios = true;
    this.VisualizarGestionConvocatorias = false;
    this.VisualizarGestionHorasFormacion = false;
    this.VisualizarGestionPreciosConsulta = false;
    this.VisualizarGestionProfesiones = false;
  }

  GestionConvocatorias() {
    this.VisualizarSabana = false;
    this.VisualizarGestionUsuarios = false;
    this.VisualizarGestionConvocatorias = true;
    this.VisualizarGestionHorasFormacion = false;
    this.VisualizarGestionPreciosConsulta = false;
    this.VisualizarGestionProfesiones = false;

  }

  GestionHorasFormacion() {
    this.VisualizarSabana = false;
    this.VisualizarGestionUsuarios = false;
    this.VisualizarGestionConvocatorias = false;
    this.VisualizarGestionHorasFormacion = true;
    this.VisualizarGestionPreciosConsulta = false;
    this.VisualizarGestionProfesiones = false;

  }

  GestionPreciosConsulta() {
    this.VisualizarSabana = false;
    this.VisualizarGestionUsuarios = false;
    this.VisualizarGestionConvocatorias = false;
    this.VisualizarGestionHorasFormacion = false;
    this.VisualizarGestionPreciosConsulta = true;
    this.VisualizarGestionProfesiones = false;
  }

  
  GestionProfesiones() {
    this.VisualizarSabana = false;
    this.VisualizarGestionUsuarios = false;
    this.VisualizarGestionConvocatorias = false;
    this.VisualizarGestionHorasFormacion = false;
    this.VisualizarGestionPreciosConsulta = false;
    this.VisualizarGestionProfesiones = true;

  }

  cerrarsesion() {
    //Retorna a la visualización de la autenticación.
    this.cerrar.emit(true);
  }
}
