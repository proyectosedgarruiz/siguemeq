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

        #region EntidadRemitente

        public async Task<ListaEntidadRemitente> GetListaEntidadRemitente()
        {
            ListaEntidadRemitente respuesta = new ListaEntidadRemitente();
            var lista = db.SP_LIST_ENTIDADREMITENTE().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion

        #region Entidad Involucrada

        public async Task<ListaEntidadInvolucrada> GetListaEntidadInvolucrada()
        {
            ListaEntidadInvolucrada respuesta = new ListaEntidadInvolucrada();
            var lista = db.SP_LIST_ENTIDAD().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion


        #region Tipo Recepcion Queja

        public async Task<ListaTipoRecepcionQueja> GetListaTipoRecepcionQueja()
        {
            ListaTipoRecepcionQueja respuesta = new ListaTipoRecepcionQueja();
            var lista = db.SP_LIST_TIPORECEPCIONQUEJA().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion


        #region Persona Quejoso

        public async Task<ListaPersonaQuejoso> GetListaPersonaQuejoso()
        {
            ListaPersonaQuejoso respuesta = new ListaPersonaQuejoso();
            var lista = db.SP_LIST_PERSONAQUEJOSO().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion

        #region Persona Afectado
        public async Task<ListaPersonaAfectado> GetListaPersonaAfectado()
        {
            ListaPersonaAfectado respuesta = new ListaPersonaAfectado();
            var lista = db.SP_LIST_PERSONAAFECTADO().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion

        #region ListaTipoIdentificacion

        public async Task<ListaTipoIdentificacion> GetListaTipoIdentificacion()
        {
            ListaTipoIdentificacion respuesta = new ListaTipoIdentificacion();
            var lista = db.SP_LIST_TIPOIDENTIFICACION().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion


        #region ListaLocalidad

        public async Task<ListaLocalidad> GetListaLocalidad()
        {
            ListaLocalidad respuesta = new ListaLocalidad();
            var lista = db.SP_LIST_LOCALIDAD().ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion

        #region ListaUPZ

        public async Task<ListaUPZ> GetListaUPZ(int idlocalidad)
        {
            ListaUPZ respuesta = new ListaUPZ();
            var lista = db.SP_LIST_UPZ(idlocalidad).ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion

        #region ListaBarrio

        public async Task<ListaBarrio> GetListaBarrio(int idupz)
        {
            ListaBarrio respuesta = new ListaBarrio();
            var lista = db.SP_LIST_BARRIO(idupz).ToList();
            respuesta.Lista = lista;
            return respuesta;
        }


        #endregion

    }
}