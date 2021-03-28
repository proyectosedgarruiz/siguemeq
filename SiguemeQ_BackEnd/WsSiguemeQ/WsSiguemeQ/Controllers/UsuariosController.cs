using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WsSiguemeQ.Models.DTO;
using WsSiguemeQ.Services;
using System.Net.Http;
using System.Net;
using System.Web.Configuration;
using System.IO;
using System.Web;
using System.Configuration;

namespace WsSiguemeQ.Controllers
{
    [RoutePrefix("usuarios")]
    public class UsuariosController : ApiController
    {
        private UsuariosService srvParametricas;
        private string keyToken = "97221cdc42-8661-4ab9-a04e-51785baa88da39";
        public UsuariosController()
        {
            srvParametricas = new UsuariosService();
        }

       

        #region Usuarios


        //Obtener Lista Usuarios
        [Route("GetListaUsuarios")]
        [HttpGet]
        [ResponseType(typeof(ListaUsuarios))]
        public async Task<IHttpActionResult> GetListaUsuarios(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaUsuarios();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaUsuarios" + e.Message;
                return Ok(error);
            }
        }


        [Route("addUsuario")]
        [HttpPost]
        [ResponseType(typeof(UsuariosRespuesta))]
        public IHttpActionResult addUsuario(string token, UsuariosRespuesta usuario)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.addUsuario(usuario);
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio addUsuario" + e.Message;
                return Ok(error);
            }
        }


        [Route("setUsuario")]
        [HttpPost]
        [ResponseType(typeof(UsuariosRespuesta))]
        public IHttpActionResult setUsuario(string token, UsuariosRespuesta usuario)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.setUsuario(usuario);
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio setUsuario" + e.Message;
                return Ok(error);
            }
        }


        //Obtener Lista UsuarioAutorizado
        [Route("GetUsuarioAutorizado")]
        [HttpGet]
        [ResponseType(typeof(ListaUsuariosAutorizado))]
        public async Task<IHttpActionResult> GetUsuarioAutorizado(string login, string password, string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetUsuarioAutorizado(login, password);
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetUsuarioAutorizado" + e.Message;
                return Ok(error);
            }
        }

        [HttpGet]
        [Route("GetUsuario")]
        [ResponseType(typeof(UsuariosRespuesta))]
        public async Task<IHttpActionResult> GetUsuario(string idUsuario, string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    UsuariosRespuesta infoUsuario = new UsuariosRespuesta();
                    infoUsuario = await srvParametricas.GetUsuario(idUsuario);
                    return Ok(infoUsuario);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetUsuario" + e.Message;
                return Ok(error);
            }

        }

        [Route("setClave")] //Actualizar los Datos del Usuario
        [HttpPost]
        [ResponseType(typeof(ClavesRespuesta))]
        public IHttpActionResult setClave(ClavesRespuesta clave, string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.setClave(clave);
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio setClave" + e.Message;
                return Ok(error);
            }

        }



        [Route("AsignarClaveUsuario")]
        [HttpGet]
        [ResponseType(typeof(string))]
        public IHttpActionResult AsignarClaveUsuario(string nuevaclave)
        {
            try
            {
                var respuesta = srvParametricas.AsignarClaveUsuario(nuevaclave);
                return Ok(respuesta);
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio AsignarClaveUsuario" + e.Message;
                return Ok(error);
            }
        }

        [Route("VisualizarClaveUsuario")]
        [HttpGet]
        [ResponseType(typeof(string))]
        public IHttpActionResult VisualizarClaveUsuario(string clave)
        {
            try
            {
                clave = clave.Replace(" ", "+");

                var respuesta = srvParametricas.VisualizarClaveUsuario(clave);
                return Ok(respuesta);
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio VisualizarClaveUsuario" + e.Message;
                return Ok(error);
            }
        }




        //Obtener Lista PrivilegiosByRol
        [Route("GetListaPrivilegiosByRol")]
        [HttpGet]
        [ResponseType(typeof(ListaPrivilegiosByRol))]
        public async Task<IHttpActionResult> GetListaPrivilegiosByRol(int idRol, string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaPrivilegiosByRol(idRol);
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaPrivilegiosByRol" + e.Message;
                return Ok(error);
            }
        }

        #endregion


        // GET: api/[controller]/getTree
        [Route("test")]
        [HttpGet]
        public string test()
        {
            return "Servidor responde";
        }


        
    }


}