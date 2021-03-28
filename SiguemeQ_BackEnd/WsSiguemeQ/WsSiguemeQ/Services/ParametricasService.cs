using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WsSiguemeQ.Models.DTO;
using WsSiguemeQ.Models.EDMX;

namespace WsSiguemeQ.Services
{
    public class ParametricasService
    {
        SiguemeQ_DesarrolloEntities db = new SiguemeQ_DesarrolloEntities();


        #region Roles

        public async Task<ListaRoles> GetListaRoles()
        {
            ListaRoles respuesta = new ListaRoles();
            var lista = db.SP_LIST_ROL().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion

        #region TipoSolicitud

        public async Task<ListaTipoSolicitud> GetListaTipoSolicitud()
        {
            ListaTipoSolicitud respuesta = new ListaTipoSolicitud();
            var lista = db.SP_LIST_TIPOSOLICITUD().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion

        #region Entidad

        public async Task<ListaEntidad> GetListaEntidad()
        {
            ListaEntidad respuesta = new ListaEntidad();
            var lista = db.SP_LIST_ENTIDAD().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion
    }
}