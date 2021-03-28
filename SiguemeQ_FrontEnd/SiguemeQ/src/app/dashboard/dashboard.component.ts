import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Publicas } from 'src/models/parametricas.model';
import { DashboardpagesComponent } from '../dashboardpages/dashboardpages.component';
import { MenuOpcion } from '../menus/menus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(DashboardpagesComponent, { static: false }) dashboardpages; //Gestor de Paginas
  @Input() publicas: Publicas;
  @Output() public cerrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  VisualizarDashboardPage: boolean = false;

  constructor() { }

  menuopcion: MenuOpcion[];

  ngOnInit() {
  }



  opcionmenuseleccionada($event) {
    this.menuopcion = [];
    this.menuopcion.push($event);

    //alert('la opcion seleccionada es ' + this.menuopcion[0].fullName);
    this.VisualizarDashboardPage = true;

    this.dashboardpages.componenteactivo = this.menuopcion[0].componente;
  }

  cerrarsesion() {
    //Retorna a la visualización de la autenticación.
    this.cerrar.emit(true);
  }
}
