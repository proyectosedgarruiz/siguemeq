import { Component, OnInit } from '@angular/core';
import { Profesiones } from 'src/models/parametricas.model';
import { EncuestaService } from 'src/services/encuesta.service';


@Component({
  selector: 'app-gestionprofesion',
  templateUrl: './gestionprofesion.component.html',
  styleUrls: ['./gestionprofesion.component.css']
})
export class GestionProfesionComponent implements OnInit {

  idProfesion: string;
  displayListProfesion: boolean;
  displayCrearProfesion: boolean;

  error: any;

  profesion: Profesiones;
  profesionLista: Array<Profesiones>;
  operacion = 'C';

  errorLabel = false;
  successLabel = false;
  errorText: string;
  successText: string;

  constructor(private encuestaservice: EncuestaService) {

    this.displayListProfesion = true;
    this.displayCrearProfesion = false;
  }

  ngOnInit() {
    this.displayListProfesion = true;
    this.ObtenerProfesion();
  }


  ObtenerProfesion() {
    this.encuestaservice.GetListaProfesiones().subscribe(
      res => {
        this.profesionLista = res.Result.Lista;
      },
      error => {
        //this._alert.showError(error.message);
      }
    );
  }


  showPanel(sw, id) { //Eventos del CRUD

    if (sw === 'C') {//Crear Profesion
      this.displayListProfesion = false;
      this.displayCrearProfesion = true;
      this.inicializarProfesion();

    }
    else if (sw === 'V') {//Volver al listado de Profesion
      this.displayListProfesion = true;
      this.displayCrearProfesion = false;
      this.ObtenerProfesion();
    }

    else if (sw === 'U') {//Actualizar Profesion

      this.inicializarProfesion();

      this.encuestaservice.GetProfesion(id).subscribe(
        result => {

          this.operacion = 'U';
          this.displayListProfesion = false;
          this.profesion = <Profesiones>result;
          this.displayCrearProfesion = true;

        },
        error => {
          this.error = error;
          if (error.statusText === 'Unauthorized') {
          }
          console.log(<any>error);
        }
      );
    }
    else if (sw === 'E') {//Eliminar Profesión

      var r = confirm("¿Confirma que desea eliminar el registro ?");
      if (r == true) {
        this.inicializarProfesion();
        this.profesion.pro_id = id;
        this.encuestaservice.delProfesion(this.profesion).subscribe(
          result => {
  
            if(result)
            {
              this.displayListProfesion = true;
              this.displayCrearProfesion = false;
              this.ObtenerProfesion();
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

    if (this.profesion.pro_nombre === '' || this.profesion.pro_nombre === undefined) {
      this.errorText = 'Por favor ingrese el nombre de la Profesión';
      this.ShowAlertsValidations();
      return false;
    }
    else
      return true;
  }


  onSubmitProfesion(isValid) {

    if (this.ValidarCampos()) {
      if (isValid) {

        if (this.operacion === 'C') {
          this.encuestaservice.addProfesion(this.profesion).subscribe(
            result => {

              if (result.OperacionExitosa) {
                alert('Se ha ingresado la Profesión correctamente');

                this.showPanel('V', 0);
              } else {
                alert('Error al ingresar la Profesión');
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

          this.encuestaservice.setProfesion(this.profesion).subscribe(
            result => {
              if (result.OperacionExitosa) {
                alert('Se ha actualizado la Profesión correctamente');
                this.operacion = 'C';
                this.showPanel('V', 0);
              } else {
                alert('Error al actualizar la Profesión');
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


  inicializarProfesion() {
    this.profesion =
    {
      pro_id: 0,
      pro_nombre: ""
    };
  }
}
