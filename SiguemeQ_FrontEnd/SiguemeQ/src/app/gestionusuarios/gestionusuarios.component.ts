import { Component, Input, OnInit } from '@angular/core';
import { Roles, Usuarios, SubRedes, UsuariosLista, Publicas } from 'src/models/parametricas.model';
import { UsuarioService } from 'src/services/usuarios.service';
import { ParametricasService } from 'src/services/parametricas.service';

@Component({
  selector: 'app-gestionusuarios',
  templateUrl: './gestionusuarios.component.html',
  styleUrls: ['./gestionusuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {
  @Input() publicas: Publicas;
  public idUsuario: string;
  public DisplayCrearClave: boolean;
  public DisplayVisualizarClave: boolean;


  public displayListUsuarios: boolean;
  public displayCrearUsuarios: boolean;

  public error: any;


  public rolesLista: Array<Roles>;
  public usuarios: Usuarios;
  public usuariosLista: Array<UsuariosLista>;
  public operacion = 'C';
  public operacionEntidadUsuario = 'C';
  

  constructor(private parametricasservice: ParametricasService, private usuarioservice: UsuarioService
  ) {

    this.displayListUsuarios = true;
    this.displayCrearUsuarios = false;
  }

  ngOnInit() {
    this.displayListUsuarios = true;
    this.ObtenerUsuarios();
    this.ObtenerRoles();
   
  }



  public ObtenerRoles() {

    this.parametricasservice.GetListaRoles().subscribe(
      res => {
        this.rolesLista = res.Result.Lista;
      },
      error => {
        //this._alert.showError(error.message);
      }
    );
  }


  public ObtenerUsuarios() {

    this.usuarioservice.GetListaUsuarios().subscribe(
      res => {
        this.usuariosLista = res.Result.Lista;
      },
      error => {
        //this._alert.showError(error.message);
      }
    );
  }


  showPanel(sw, id) { //Eventos del CRUD

    if (sw === 'C') {//Crear Usuarios
      this.displayListUsuarios = false;
      this.displayCrearUsuarios = true;
      this.inicializarUsuario();
      this.ObtenerRoles();
    }
    else if (sw === 'V') {//Volver al listado de Usuarios
      this.displayListUsuarios = true;
      this.displayCrearUsuarios = false;
      this.ObtenerUsuarios();

    }

    else if (sw === 'U') {//Actualizar Usuarios

      this.inicializarUsuario();
      this.ObtenerRoles();

      this.usuarioservice.GetUsuario(id).subscribe(
        result => {

          this.operacion = 'U';
          this.displayListUsuarios = false;

          this.usuarios = <Usuarios>result;

          this.displayCrearUsuarios = true;

        },
        error => {
          this.error = error;
          if (error.statusText === 'Unauthorized') {
          }
          console.log(<any>error);
        }
      );

    }
    else if (sw === 'E') {//Eliminar Usuarios

      var r = confirm("¿Confirma que desea eliminar el registro ?");
      if (r == true) {
        this.inicializarUsuario();
        this.usuarios.idUsuario = id;
        this.usuarioservice.delUsuario(this.usuarios).subscribe(
          result => {
  
            if(result)
            {
            this.displayListUsuarios = true;
            this.displayCrearUsuarios = false;
            this.ObtenerUsuarios();
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



  visualizarcrearclave() {
    this.DisplayCrearClave = true;
    this.DisplayVisualizarClave = false;
  }


  asignarclave() {
    var ValorOriginalClave = this.usuarios.usu_asignar_clave;

    if (ValorOriginalClave == "") {
      alert('La clave no debe estar vacia');
      return;

    }
    else {

      this.usuarioservice.AsignarClaveUsuario(ValorOriginalClave).subscribe(
        result => {
          this.usuarios.password = result;
          this.DisplayCrearClave = false;
          alert('Se ha cifrado y asignado la clave al usuario');

        }
      );
    }

  }


  visualizarclave() {
    this.DisplayVisualizarClave = true;
    this.usuarioservice.VisualizarClaveUsuario(this.usuarios.password).subscribe(
      result => {
        this.usuarios.usu_visualizar_clave = result;
      });
  }



  onSubmitUsuarios(isValid) {

    if (isValid) {

      if (this.operacion === 'C') {
  
        this.usuarios.usrCreado = this.publicas.idUsuario;
        this.usuarioservice.addUsuario(this.usuarios).subscribe(
          result => {

            if (result.OperacionExitosa) {
              alert('Se ha ingresado el usuario correctamente');

              this.showPanel('V', 0);
            } else {
              alert('Error al ingresar el usuario');
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
        this.usuarios.usrModificado = this.publicas.idUsuario;
        this.usuarioservice.setUsuario(this.usuarios).subscribe(
          result => {
            if (result.OperacionExitosa) {
              alert('Se ha actualizado el usuario correctamente');
              this.operacion = 'C';
              this.showPanel('V', 0);
            } else {
              alert('Error al actualizar el usuario');
            }
          },
          error => {
            this.error = error;
            if (this.error.statusText === 'Unauthorized') {
              // this.authenticationService.logout().subscribe(response => { });
              //  this.storageService.logout();
            }
            console.log(<any>error);
          })


      }

    }
    else {
      alert('Formulario Invalido');
    }
  }


  inicializarUsuario() {
    this.usuarios =
    {
      idUsuario: '',
      nombre: '',
      estado: '',
      password: '',
      idRol: 0,
      usrCreado : '',
      usrModificado: '',
      usu_asignar_clave: '',
      usu_visualizar_clave: '',
      clave: "",
    
    };
  }


}




