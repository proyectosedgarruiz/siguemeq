import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publicas } from 'src/models/parametricas.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public cerrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() publicas: Publicas;
  nombreUsuario: string;
  rolUsuario: string;

  constructor() { }

  ngOnInit() {
    this.nombreUsuario = this.publicas.nombre;
    this.rolUsuario = this.publicas.descripcionRol;
  }

  cerrarsesion() {
    var r = confirm("¿Está seguro de cerrar la sesión ?");
    if (r == true) {
      //Retorna a la visualización de la autenticación.
      this.cerrar.emit(true);
    }

  }

}
