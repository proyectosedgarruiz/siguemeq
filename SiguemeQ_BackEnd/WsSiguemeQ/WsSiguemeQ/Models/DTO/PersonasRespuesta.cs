using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WsSiguemeQ.Models.EDMX;

namespace WsSiguemeQ.Models.DTO
{
    public class PersonasRespuesta : RespuestaBase
    {
        public Int64 idPersona;
        public string idTipoIdentificacion;
        public string numeroIdentificacion;
        public int? digitoVerificacion;
        public string primerNombre;
        public string segundoNombre;
        public string primerApellido;
        public string segundoApellido;
        public string nombresApellidos;
        public string direccion;
        public int? idTipoDireccion;
        public int? idLocalidad;
        public string idBarrio;
        public int? idUpz;
        public string telefono1;
        public string telefono2;
        public string correoElectronico;
        public string usrCreado;
        public string usrModificado;
    }




    public class ListaPersonaQuejoso
    {
        public virtual ICollection<SP_LIST_PERSONAQUEJOSO_Result> Lista { get; set; }

        public ListaPersonaQuejoso()
        {
            Lista = new HashSet<SP_LIST_PERSONAQUEJOSO_Result>();
        }


    }

    public class ListaPersonaAfectado
    {
        public virtual ICollection<SP_LIST_PERSONAAFECTADO_Result> Lista { get; set; }

        public ListaPersonaAfectado()
        {
            Lista = new HashSet<SP_LIST_PERSONAAFECTADO_Result>();
        }


    }
}