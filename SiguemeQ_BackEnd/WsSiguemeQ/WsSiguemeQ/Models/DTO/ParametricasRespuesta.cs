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

    public class ListaEntidadRemitente
    {
        public virtual ICollection<SP_LIST_ENTIDADREMITENTE_Result> Lista { get; set; }

        public ListaEntidadRemitente()
        {
            Lista = new HashSet<SP_LIST_ENTIDADREMITENTE_Result>();
        }


    }

    public class ListaEntidadInvolucrada
    {
        public virtual ICollection<SP_LIST_ENTIDAD_Result> Lista { get; set; }

        public ListaEntidadInvolucrada()
        {
            Lista = new HashSet<SP_LIST_ENTIDAD_Result>();
        }


    }

    public class ListaTipoRecepcionQueja  
    {
        public virtual ICollection<SP_LIST_TIPORECEPCIONQUEJA_Result> Lista { get; set; }

        public ListaTipoRecepcionQueja()
        {
            Lista = new HashSet<SP_LIST_TIPORECEPCIONQUEJA_Result>();
        }


    }

 

    public class ListaTipoIdentificacion
    {
        public virtual ICollection<SP_LIST_TIPOIDENTIFICACION_Result> Lista { get; set; }

        public ListaTipoIdentificacion()
        {
            Lista = new HashSet<SP_LIST_TIPOIDENTIFICACION_Result>();
        }


    }

    public class ListaLocalidad
    {
        public virtual ICollection<SP_LIST_LOCALIDAD_Result> Lista { get; set; }

        public ListaLocalidad()
        {
            Lista = new HashSet<SP_LIST_LOCALIDAD_Result>();
        }


    }

    public class ListaUPZ
    {
        public virtual ICollection<SP_LIST_UPZ_Result> Lista { get; set; }

        public ListaUPZ()
        {
            Lista = new HashSet<SP_LIST_UPZ_Result>();
        }


    }
    public class ListaBarrio
    {
        public virtual ICollection<SP_LIST_BARRIO_Result> Lista { get; set; }

        public ListaBarrio()
        {
            Lista = new HashSet<SP_LIST_BARRIO_Result>();
        }


    }

}