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
    [RoutePrefix("personas")]
    public class PersonasController : ApiController
    {
        private PersonasService srvPersonas;
        private string keyToken = "97221cdc42-8661-4ab9-a04e-51785baa88da39";
        public PersonasController()
        {
            srvPersonas = new PersonasService();
        }



        #region Personas


        [Route("addPersona")]
        [HttpPost]
        [ResponseType(typeof(PersonasRespuesta))]
        public IHttpActionResult addPersona(string token, PersonasRespuesta persona)
        {
            try
            {
                if (token.Equals(keyToken))
                {
                    var respuesta = srvPersonas.addPersona(persona);
                    return Ok(respuesta);
                }
                else
                    return null;
            }
            catch (Exception e)
            {
                string error = "Error desde el servicio addPersona" + e.Message;
                return Ok(error);
            }
        }


        #endregion
    }
}