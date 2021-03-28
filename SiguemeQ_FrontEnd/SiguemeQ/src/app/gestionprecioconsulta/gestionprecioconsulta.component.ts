import { Component, OnInit } from '@angular/core';
import { PrecioConsulta } from 'src/models/parametricas.model';
import { EncuestaService } from 'src/services/encuesta.service';


@Component({
  selector: 'app-gestionprecioconsulta',
  templateUrl: './gestionprecioconsulta.component.html',
  styleUrls: ['./gestionprecioconsulta.component.css']
})
export class GestionPrecioConsultaComponent implements OnInit {

  idPrecioConsulta: string;
  displayListPrecioConsulta: boolean;
  displayCrearPrecioConsulta: boolean;

  error: any;

  precioconsulta: PrecioConsulta;
  precioconsultaLista: Array<PrecioConsulta>;
  operacion = 'C';

  errorLabel = false;
  successLabel = false;
  errorText: string;
  successText: string;

  constructor(private encuestaservice: EncuestaService) {

    this.displayListPrecioConsulta = true;
    this.displayCrearPrecioConsulta = false;
  }

  ngOnInit() {
    this.displayListPrecioConsulta = true;
    this.ObtenerPrecioConsulta();
  }


  ObtenerPrecioConsulta() {

    this.encuestaservice.GetListaPrecioConsulta().subscribe(
      res => {
        this.precioconsultaLista = res.Result.Lista;
      },
      error => {
        //this._alert.showError(error.message);
      }
    );
  }


  showPanel(sw, id) { //Eventos del CRUD

    if (sw === 'C') {//Crear PrecioConsulta
      this.displayListPrecioConsulta = false;
      this.displayCrearPrecioConsulta = true;
      this.inicializarPrecioConsulta();

    }
    else if (sw === 'V') {//Volver al listado de PrecioConsulta
      this.displayListPrecioConsulta = true;
      this.displayCrearPrecioConsulta = false;
      this.ObtenerPrecioConsulta();
    }

    else if (sw === 'U') {//Actualizar PrecioConsulta

      this.inicializarPrecioConsulta();

      this.encuestaservice.GetPrecioConsulta(id).subscribe(
        result => {

          this.operacion = 'U';
          this.displayListPrecioConsulta = false;
          this.precioconsulta = <PrecioConsulta>result;
          this.displayCrearPrecioConsulta = true;

        },
        error => {
          this.error = error;
          if (error.statusText === 'Unauthorized') {
          }
          console.log(<any>error);
        }
      );
    }
    else if (sw === 'E') {//Eliminar Precio Consulta

      var r = confirm("¿Confirma que desea eliminar el registro ?");
      if (r == true) {
        this.inicializarPrecioConsulta();
        this.precioconsulta.pre_id = id;
        this.encuestaservice.delPrecioConsulta(this.precioconsulta).subscribe(
          result => {

            if (result) {
              this.displayListPrecioConsulta = true;
              this.displayCrearPrecioConsulta = false;
              this.ObtenerPrecioConsulta();
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

    if (this.precioconsulta.pre_nombre === '' || this.precioconsulta.pre_nombre === undefined) {
      this.errorText = 'Por favor ingrese el nombre de Precio Consulta';
      this.ShowAlertsValidations();
      return false;
    }
    else
      return true;
  }


  onSubmitPrecioConsulta(isValid) {

    if (this.ValidarCampos()) {
      if (isValid) {

        if (this.operacion === 'C') {
          this.encuestaservice.addPrecioConsulta(this.precioconsulta).subscribe(
            result => {

              if (result.OperacionExitosa) {
                alert('Se ha ingresado el Precio Consulta correctamente');

                this.showPanel('V', 0);
              } else {
                alert('Error al ingresar Precio Consulta');
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

          this.encuestaservice.setPrecioConsulta(this.precioconsulta).subscribe(
            result => {
              if (result.OperacionExitosa) {
                alert('Se ha actualizado el Precio Consulta correctamente');
                this.operacion = 'C';
                this.showPanel('V', 0);
              } else {
                alert('Error al actualizar el Precio Consulta');
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


  inicializarPrecioConsulta() {
    this.precioconsulta =
    {
      pre_id: 0,
      pre_nombre: ""
    };
  }
}
