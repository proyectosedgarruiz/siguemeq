using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WsSiguemeQ.Models.DTO;
using WsSiguemeQ.Models.EDMX;

namespace WsSiguemeQ.Services
{
    public class UsuariosService
    {
        SiguemeQ_DesarrolloEntities db = new SiguemeQ_DesarrolloEntities();
     

        #region Usuarios

        public async Task<ListaUsuarios> GetListaUsuarios()
        {
            ListaUsuarios respuesta = new ListaUsuarios();
            var lista = db.SP_LIST_USUARIO().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        public async Task<ListaUsuariosAutorizado> GetUsuarioAutorizado(string usu_login, string usu_password)
        {
            string strLlave = "098#7UI#OPPDFG";

            Symmetric objSymetric = new Symmetric();
            string strClaveEncriptada = objSymetric.EncryptData(strLlave, usu_password);

            ListaUsuariosAutorizado respuesta = new ListaUsuariosAutorizado();
            var lista = db.SP_FIND_USUARIO_AUTORIZADO(usu_login, strClaveEncriptada).ToList();
            respuesta.Lista = lista;
            return respuesta;
        }
        public async Task<UsuariosRespuesta> GetUsuario(string idUsuario)
        {
            UsuariosRespuesta respuesta = new UsuariosRespuesta();
            var info = db.SP_FIND_USUARIO(idUsuario).FirstOrDefault();
            respuesta.idUsuario = info.idUsuario;
            respuesta.password = info.password;
            respuesta.nombre = info.nombre;
            respuesta.fechaCreado = info.fechaCreado;
            respuesta.fechaActualizado = info.fechaActualizado;
            respuesta.usrCreado = info.usrCreado;
            respuesta.usrModificado = info.usrModificado;
            respuesta.idRol = info.idRol;
            respuesta.estado = info.estado;
            
            return respuesta;
        }

        public UsuariosRespuesta addUsuario(UsuariosRespuesta usuario)
        {

            UsuariosRespuesta respuesta = new UsuariosRespuesta();
            try
            {
                var accion = db.SP_ADD_USUARIO(
                    usuario.idUsuario,
                    usuario.password,
                    usuario.nombre,
                    usuario.estado,
                    usuario.usrCreado,
                    usuario.idRol

                    );
                respuesta.OperacionExitosa = true;

            }
            catch (Exception ex)
            {
                respuesta.Mensaje = "Error al Ingresar el Usuario -" + ex.ToString() + "-";
                respuesta.OperacionExitosa = false;
            }
            return respuesta;
        }


        public UsuariosRespuesta setUsuario(UsuariosRespuesta usuario)
        {

            UsuariosRespuesta respuesta = new UsuariosRespuesta();
            try
            {
                var accion = db.SP_UPD_USUARIO(
                     usuario.idUsuario,
                    usuario.password,
                    usuario.nombre,
                    usuario.estado,
                    usuario.usrModificado,
                    usuario.idRol

                    );
                respuesta.OperacionExitosa = true;

            }
            catch (Exception ex)
            {
                respuesta.Mensaje = "Error al Actualizar el Usuario -" + ex.ToString() + "-";
                respuesta.OperacionExitosa = false;
            }
            return respuesta;
        }

        public ClavesRespuesta setClave(ClavesRespuesta clave)
        {
            string strLlave = "098#7UI#OPPDFG";

            Symmetric objSymetric = new Symmetric();
            string strClaveEncriptada = objSymetric.EncryptData(strLlave, clave.clave_nueva);

            ClavesRespuesta respuesta = new ClavesRespuesta();
            try
            {
                var accion = db.SP_UPD_CLAVE_USUARIO(clave.idUsuario, strClaveEncriptada);
                respuesta.OperacionExitosa = true;

            }
            catch (Exception ex)
            {
                respuesta.Mensaje = "Error al Actualizar la clave de usuario -" + ex.ToString() + "-";
                respuesta.OperacionExitosa = false;
            }
            return respuesta;
        }


        public string AsignarClaveUsuario(string nuevaclave)
        {

            string strClaveEncriptada, strLlave;
            strLlave = "098#7UI#OPPDFG";

            Symmetric objSymetric = new Symmetric();
            strClaveEncriptada = objSymetric.EncryptData(strLlave, nuevaclave);

            return strClaveEncriptada;

        }


        public string VisualizarClaveUsuario(string clave)
        {
            string strClaveDesencriptada, strLlave;
            strLlave = "098#7UI#OPPDFG";

            Symmetric objSymetric = new Symmetric();
            strClaveDesencriptada = objSymetric.DecryptData(strLlave, clave);

            return strClaveDesencriptada;
        }



        public async Task<ListaPrivilegiosByRol> GetListaPrivilegiosByRol(int idRol)
        {
            ListaPrivilegiosByRol respuesta = new ListaPrivilegiosByRol();
            var lista = db.SP_LIST_PRIVILEGIOSBYROL(idRol).ToList();
            respuesta.Lista = lista;
            return respuesta;
        }
        #endregion



    }
}