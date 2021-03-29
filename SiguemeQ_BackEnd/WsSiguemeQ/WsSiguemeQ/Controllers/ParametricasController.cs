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
    [RoutePrefix("parametricas")]
    public class ParametricasController : ApiController
    {
        private ParametricasService srvParametricas;
        private string keyToken = "97221cdc42-8661-4ab9-a04e-51785baa88da39";
        public ParametricasController()
        {
            srvParametricas = new ParametricasService();
        }



        #region Roles


        //Obtener Lista Roles
        [Route("GetListaRoles")]
        [HttpGet]
        [ResponseType(typeof(ListaRoles))]
        public async Task<IHttpActionResult> GetListaRoles(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaRoles();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaRoles" + e.Message;
                return Ok(error);
            }
        }




        #endregion

        #region TipoSolicitud


        //Obtener Lista TipoSolicitud
        [Route("GetListaTipoSolicitud")]
        [HttpGet]
        [ResponseType(typeof(ListaTipoSolicitud))]
        public async Task<IHttpActionResult> GetListaTipoSolicitud(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaTipoSolicitud();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaTipoSolicitud" + e.Message;
                return Ok(error);
            }
        }




        #endregion



    


        #region Tipo Recepcion Queja


        //Obtener Lista Tipo Recepcion Queja
        [Route("GetListaTipoRecepcionQueja")]
        [HttpGet]
        [ResponseType(typeof(ListaTipoRecepcionQueja))]
        public async Task<IHttpActionResult> GetListaTipoRecepcionQueja(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaTipoRecepcionQueja();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaTipoRecepcionQueja" + e.Message;
                return Ok(error);
            }
        }




        #endregion




        #region Entidad Involucrada


        //Obtener Lista Entidad Involucrada
        [Route("GetListaEntidadInvolucrada")]
        [HttpGet]
        [ResponseType(typeof(ListaEntidadInvolucrada))]
        public async Task<IHttpActionResult> GetListaEntidadInvolucrada(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaEntidadInvolucrada();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaEntidadInvolucrada" + e.Message;
                return Ok(error);
            }
        }




        #endregion

        #region Entidad Remitente


        //Obtener Lista Entidad Remitente
        [Route("GetListaEntidadRemitente")]
        [HttpGet]
        [ResponseType(typeof(ListaEntidadRemitente))]
        public async Task<IHttpActionResult> GetListaEntidadRemitente(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaEntidadRemitente();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaEntidadRemitente" + e.Message;
                return Ok(error);
            }
        }




        #endregion



        #region TipoIdentificacion


        //Obtener Lista TipoIdentificacion
        [Route("GetListaTipoIdentificacion")]
        [HttpGet]
        [ResponseType(typeof(ListaTipoIdentificacion))]
        public async Task<IHttpActionResult> GetListaTipoIdentificacion(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaTipoIdentificacion();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaTipoIdentificacion" + e.Message;
                return Ok(error);
            }
        }




        #endregion




        #region ListaLocalidad


        //Obtener Lista Localidad
        [Route("GetListaLocalidad")]
        [HttpGet]
        [ResponseType(typeof(ListaLocalidad))]
        public async Task<IHttpActionResult> GetListaLocalidad(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaLocalidad();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaLocalidad" + e.Message;
                return Ok(error);
            }
        }




        #endregion

        #region ListaUPZ
        //Obtener Lista UPZ
        [Route("GetListaUPZ")]
        [HttpGet]
        [ResponseType(typeof(ListaUPZ))]
        public async Task<IHttpActionResult> GetListaUPZ(string token, int idlocalidad)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaUPZ(idlocalidad);
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaUPZ" + e.Message;
                return Ok(error);
            }
        }




        #endregion


        #region ListaBarrio
        //Obtener Lista Barrio
        [Route("GetListaBarrio")]
        [HttpGet]
        [ResponseType(typeof(ListaBarrio))]
        public async Task<IHttpActionResult> GetListaBarrio(string token, int idupz)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaBarrio(idupz);
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaBarrio" + e.Message;
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