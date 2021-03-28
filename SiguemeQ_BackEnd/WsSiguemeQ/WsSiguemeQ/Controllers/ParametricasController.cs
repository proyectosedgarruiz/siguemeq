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



        #region Entidad


        //Obtener Lista Entidad
        [Route("GetListaEntidad")]
        [HttpGet]
        [ResponseType(typeof(ListaEntidad))]
        public async Task<IHttpActionResult> GetListaEntidad(string token)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvParametricas.GetListaEntidad();
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio GetListaEntidad" + e.Message;
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