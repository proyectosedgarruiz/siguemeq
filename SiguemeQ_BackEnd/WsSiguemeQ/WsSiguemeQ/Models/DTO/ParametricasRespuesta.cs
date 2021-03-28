using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WsSiguemeQ.Models.EDMX;

namespace WsSiguemeQ.Models.DTO
{
    public class ParametricasRespuesta
    {
        public int idRol;
        public string descripcion;    
    }

    public class ListaRoles
    {
        public virtual ICollection<SP_LIST_ROL_Result> Lista { get; set; }

        public ListaRoles()
        {
            Lista = new HashSet<SP_LIST_ROL_Result>();
        }

       
    }


    public class ListaTipoSolicitud
    {
        public virtual ICollection<SP_LIST_TIPOSOLICITUD_Result> Lista { get; set; }

        public ListaTipoSolicitud()
        {
            Lista = new HashSet<SP_LIST_TIPOSOLICITUD_Result>();
        }


    }

    public class ListaEntidad
    {
        public virtual ICollection<SP_LIST_ENTIDAD_Result> Lista { get; set; }

        public ListaEntidad()
        {
            Lista = new HashSet<SP_LIST_ENTIDAD_Result>();
        }


    }
}