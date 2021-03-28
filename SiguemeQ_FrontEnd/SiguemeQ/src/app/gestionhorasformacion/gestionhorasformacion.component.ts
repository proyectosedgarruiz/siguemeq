import { Component, OnInit } from '@angular/core';
import { HorasFormacion } from 'src/models/parametricas.model';
import { EncuestaService } from 'src/services/encuesta.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-gestionhorasformacion',
  templateUrl: './gestionhorasformacion.component.html',
  styleUrls: ['./gestionhorasformacion.component.css']
})
export class GestionHorasFormacionComponent implements OnInit {

  idHorasFormacion: string;
  displayListHorasFormacion: boolean;
  displayCrearHorasFormacion: boolean;

  error: any;

  horasformacion: HorasFormacion;
  horasformacionsLista: Array<HorasFormacion>;
  operacion = 'C';

  errorLabel = false;
  successLabel = false;
  errorText: string;
  successText: string;

  constructor(private encuestaservice: EncuestaService) {

    this.displayListHorasFormacion = true;
    this.displayCrearHorasFormacion = false;
  }

  ngOnInit() {
    this.displayListHorasFormacion = true;
    this.ObtenerHorasFormacion();
  }


  ObtenerHorasFormacion() {

    this.encuestaservice.GetListaHorasFormacion().subscribe(
      res => {
        this.horasformacionsLista = res.Result.Lista;
      },
      error => {
        //this._alert.showError(error.message);
      }
    );
  }


  showPanel(sw, id) { //Eventos del CRUD

    if (sw === 'C') {//Crear HorasFormacion
      this.displayListHorasFormacion = false;
      this.displayCrearHorasFormacion = true;
      this.inicializarHorasFormacion();

    }
    else if (sw === 'V') {//Volver al listado de HorasFormacion
      this.displayListHorasFormacion = true;
      this.displayCrearHorasFormacion = false;
      this.ObtenerHorasFormacion();
    }

    else if (sw === 'U') {//Actualizar HorasFormacion

      this.inicializarHorasFormacion();

      this.encuestaservice.GetHorasFormacion(id).subscribe(
        result => {

          this.operacion = 'U';
          this.displayListHorasFormacion = false;
          this.horasformacion = <HorasFormacion>result;
          this.displayCrearHorasFormacion = true;

        },
        error => {
          this.error = error;
          if (error.statusText === 'Unauthorized') {
          }
          console.log(<any>error);
        }
      );
    }
    else if (sw === 'E') {//Eliminar Horsa Formación

      var r = confirm("¿Confirma que desea eliminar el registro ?");
      if (r == true) {
        this.inicializarHorasFormacion();
        this.horasformacion.hor_id = id;
        this.encuestaservice.delHorasFormacion(this.horasformacion).subscribe(
          result => {

            if (result) {
              this.displayListHorasFormacion = true;
              this.displayCrearHorasFormacion = false;
              this.ObtenerHorasFormacion();
            }
          },
          error => {
            this.error = error;
            if (error.statusText === 'Unauthorized') {
            }
            console.log(<any>error);
          }
        );
      }
    }
  }



  ShowAlertsValidations() {
    this.errorLabel = true;
    setTimeout(() => {
      this.errorLabel = false;
    }, 2500);
  }

  ValidarCampos() {

    if (this.horasformacion.hor_nombre === '' || this.horasformacion.hor_nombre === undefined) {
      this.errorText = 'Por favor ingrese el nombre de la Hora Formacion';
      this.ShowAlertsValidations();
      return false;
    }
    else
      return true;
  }


  onSubmitHorasFormacion(isValid) {

    if (this.ValidarCampos()) {
      if (isValid) {

        if (this.operacion === 'C') {
          this.encuestaservice.addHorasFormacion(this.horasformacion).subscribe(
            result => {

              if (result.OperacionExitosa) {
                alert('Se ha ingresado la Hora Formación correctamente');

                this.showPanel('V', 0);
              } else {
                alert('Error al ingresar la Hora Formación');
              }
            },
            error => {
              this.error = error;
              if (this.error.statusText === 'Unauthorized') {
              }
              console.log(<any>error);
            })
        }
        else if (this.operacion === 'U') {

          this.encuestaservice.setHorasFormacion(this.horasformacion).subscribe(
            result => {
              if (result.OperacionExitosa) {
                alert('Se ha actualizado la Hora Formación correctamente');
                this.operacion = 'C';
                this.showPanel('V', 0);
              } else {
                alert('Error al actualizar la Hora Formación');
              }
            },
            error => {
              this.error = error;
              if (this.error.statusText === 'Unauthorized') {
              }
              console.log(<any>error);
            })
        }
      }
      else {
        alert('Formulario Invalido');
      }
    }
  }


  inicializarHorasFormacion() {
    this.horasformacion =
    {
      hor_id: 0,
      hor_nombre: ""
    };
  }
}
