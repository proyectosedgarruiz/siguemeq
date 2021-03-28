import { Component, OnInit } from '@angular/core';
import { Convocatoria } from 'src/models/parametricas.model';
import { EncuestaService } from 'src/services/encuesta.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-gestionconvocatorias',
  templateUrl: './gestionconvocatorias.component.html',
  styleUrls: ['./gestionconvocatorias.component.css']
})
export class GestionConvocatoriasComponent implements OnInit {

  public idConvocatoria: string;

  public displayListConvocatorias: boolean;
  public displayCrearConvocatorias: boolean;

  public error: any;

  public convocatoria: Convocatoria;
  public convocatoriasLista: Array<Convocatoria>;
  public operacion = 'C';

  public FechaInicio: string;
  public FechaFinal: string;


  errorLabel = false;
  successLabel = false;
  errorText: string;
  successText: string;



  constructor(private encuestaservice: EncuestaService) {

    this.displayListConvocatorias = true;
    this.displayCrearConvocatorias = false;
  }

  ngOnInit() {
    this.displayListConvocatorias = true;
    this.ObtenerConvocatorias();
  }


  public ObtenerConvocatorias() {

    this.encuestaservice.GetListaConvocatorias().subscribe(
      res => {
        this.convocatoriasLista = res.Result.Lista;
      },
      error => {
        //this._alert.showError(error.message);
      }
    );
  }


  showPanel(sw, id) { //Eventos del CRUD

    if (sw === 'C') {//Crear Convocatorias
      this.displayListConvocatorias = false;
      this.displayCrearConvocatorias = true;
      this.inicializarConvocatoria();

      this.FechaInicio = formatDate(new Date, 'yyyy-MM-dd', 'en-US');
      this.FechaFinal = formatDate(new Date, 'yyyy-MM-dd', 'en-US');

    }
    else if (sw === 'V') {//Volver al listado de Convocatorias
      this.displayListConvocatorias = true;
      this.displayCrearConvocatorias = false;
      this.ObtenerConvocatorias();
    }

    else if (sw === 'U') {//Actualizar Convocatorias

      this.inicializarConvocatoria();

      this.encuestaservice.GetConvocatoria(id).subscribe(
        result => {

          this.operacion = 'U';
          this.displayListConvocatorias = false;

     
          this.convocatoria = <Convocatoria>result;
          this.FechaInicio = formatDate(this.convocatoria.con_fechainicio, 'yyyy-MM-dd', 'en-US');
          this.FechaFinal = formatDate(this.convocatoria.con_fechafinal, 'yyyy-MM-dd', 'en-US');


          this.displayCrearConvocatorias = true;

        },
        error => {
          this.error = error;
          if (error.statusText === 'Unauthorized') {
          }
          console.log(<any>error);
        }
      );

    }
    else if (sw === 'E') {//Eliminar Convocatoria

      var r = confirm("¿Confirma que desea eliminar el registro ?");
      if (r == true) {
        this.inicializarConvocatoria();
        this.convocatoria.con_id = id;
        this.encuestaservice.delConvocatoria(this.convocatoria).subscribe(
          result => {

            if (result) {
              this.displayListConvocatorias = true;
              this.displayCrearConvocatorias = false;
              this.ObtenerConvocatorias();
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
    this.convocatoria.con_fechainicio = new Date(this.FechaInicio);
    this.convocatoria.con_fechafinal = new Date(this.FechaFinal);

    if (this.convocatoria.con_nombre === '' || this.convocatoria.con_nombre === undefined) {
      this.errorText = 'Por favor ingrese el nombre de la Convocatoria';
      this.ShowAlertsValidations();
      return false;
    }
    else if (this.convocatoria.con_fechainicio === null || this.convocatoria.con_fechainicio === undefined) {
      this.errorText = 'Por favor seleccione la Fecha de Inicio';
      this.ShowAlertsValidations();
      return false;
    }
    else if (this.convocatoria.con_fechafinal === null || this.convocatoria.con_fechafinal === undefined) {
      this.errorText = 'Por favor seleccione la Fecha Final';
      this.ShowAlertsValidations();
      return false;
    }

    else if (this.FechaInicio > this.FechaFinal) {
      this.errorText = 'Por favor la Fecha de Inicio no puede ser superior a la Fecha Final';
      this.ShowAlertsValidations();
    }

    else if (this.convocatoria.con_horainicio === '' || this.convocatoria.con_horainicio === undefined) {
      this.errorText = 'Por favor ingrese la hora de inicio';
      this.ShowAlertsValidations();
      return false;
    }
    else if (this.convocatoria.con_horafinal === '' || this.convocatoria.con_horafinal === undefined) {
      this.errorText = 'Por favor ingrese la hora de finalización';
      this.ShowAlertsValidations();
      return false;
    }

    else if (this.convocatoria.con_estado === "" || this.convocatoria.con_estado === undefined) {
      this.errorText = 'Por favor seleccione el estado';
      this.ShowAlertsValidations();
      return false;
    }
    else
      return true;

  }


  onSubmitConvocatorias(isValid) {

    if (this.ValidarCampos()) {
      if (isValid) {

        if (this.operacion === 'C') {
          this.encuestaservice.addConvocatoria(this.convocatoria).subscribe(
            result => {

              if (result.OperacionExitosa) {
                alert('Se ha ingresado la Convocatoria correctamente');

                this.showPanel('V', 0);
              } else {
                alert('Error al ingresar la Convocatoria');
              }
            },
            error => {
              this.error = error;
              if (this.error.statusText === 'Unauthorized') {
                // this.authenticationService.logout().subscribe(response => { });
                // this.storageService.logout();
              }
              console.log(<any>error);
            })





        }
        else if (this.operacion === 'U') {

          this.encuestaservice.setConvocatoria(this.convocatoria).subscribe(
            result => {
              if (result.OperacionExitosa) {
                alert('Se ha actualizado la Convocatoria correctamente');
                this.operacion = 'C';
                this.showPanel('V', 0);
              } else {
                alert('Error al actualizar la Convocatoria');
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


  inicializarConvocatoria() {
    this.convocatoria =
    {
      con_id: 0,
      con_nombre: "",
      con_fechainicio: null,
      con_horainicio: "00:00:00",
      con_fechafinal: null,
      con_horafinal: "23:59:00",
      con_estado: ""
    };
  }


}




