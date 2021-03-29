import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioAutorizado,  Publicas  } from '../../models/parametricas.model';
import { UsuarioService } from '../../services/usuarios.service';
import { EncuestaService } from '../../services/encuesta.service';


@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {
  @Input() publicas: Publicas;
  @Output() public usuarioAutorizado: EventEmitter<Publicas> = new EventEmitter<Publicas>();

  //EMRO: Se adicionan dos nuevos atributos para el manejo de usuarios
  public loginUser: string;
  public passwordUser: string;

  public error: any;

  public StartedProcess: boolean = false;
  public AlertaClaveAnterior: boolean;
  public AlertaClaveErrada: boolean;
  public AlertaClaveNueva: boolean;
  public AlertaClaveConfirmada: boolean;
  public AlertaClaveDesiguales: boolean;
  public AlertaSistema: boolean;
  //EMRO: Se adiciona objeto para redireccionar al Login

  public VisualizarContenido: boolean;
  public VisualizarLogin: boolean = true;
  public VisualizarDashboard: boolean;
  public VisualizarCambioClave: boolean;
  public displayVisualizarSistema: boolean;
  public VisualizarSistema: boolean;


  selectUsuarios: Array<UsuarioAutorizado>;

  public _loginForm: LoginObject;
  constructor(private usuarioservice: UsuarioService 
  ) {
  
    this._loginForm = new LoginObject("", "", false);
  }

  ngOnInit() {
  
  }



  //EMRO: Nuevo Metodo para obtener los datos de autenticación del usuario
  onLogin() {

    this.loginUser = this._loginForm.username;
    this.passwordUser = this._loginForm.password;
    this.getUsuario(this.loginUser, this.passwordUser);

  }





  public getUsuario(login, password) {

    this.usuarioservice.GetUsuarioAutorizado(login, password).subscribe(
      result => {
        this.selectUsuarios = result.Result.Lista;

        if (this.selectUsuarios.length > 0  ) {
         
     debugger;
            this.publicas.autorized = true;
            this.publicas.idUsuario = this.selectUsuarios[0].idUsuario;
            this.publicas.loginUsuario = login;
            this.publicas.idRol = this.selectUsuarios[0].idRol;
            this.publicas.nombre = this.selectUsuarios[0].nombre;
            this.publicas.descripcionRol = this.selectUsuarios[0].descripcionRol;
            
            this.usuarioAutorizado.emit(this.publicas);
          
        }
        else {
          alert('Usuario No Valido. Intente nuevamente');
          
        }

      },
      error => {
   
        this.error = error;
        console.error('Error [GetUsuarioAutorizado]');
        console.error(error);

      }
    );
  }

}

export class LoginObject {

  constructor(public username: string,
    public password: string, public recordar: boolean
  ) { }
}