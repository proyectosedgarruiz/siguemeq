using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WsSiguemeQ.Models.EDMX;

namespace WsSiguemeQ.Models.DTO
{
    public class UsuariosRespuesta : RespuestaBase
    {
        public string idUsuario;
        public string password;
        public string nombre;
        public string estado;
        public DateTime? fechaCreado;
        public DateTime? fechaActualizado;
        public string usrCreado;
        public string usrModificado;
        public int idRol;
    }
    public class ClavesRespuesta : RespuestaBase
    {
        public string idUsuario;
        public string clave_nueva;
        public string clave_anterior;
        public string clave_confirmada;
    }
    public class MenuOpcion
    {
        public int id;
        public string fullName;
        public bool? expanded;
        public string componente;
        public MenuOpcion[] items;
    }

    public class ListaUsuarios
    {
        public virtual ICollection<SP_LIST_USUARIO_Result> Lista { get; set; }

        public ListaUsuarios()
        {
            Lista = new HashSet<SP_LIST_USUARIO_Result>();
        }
    }

    public class ListaUsuariosAutorizado
    {
        public virtual ICollection<SP_FIND_USUARIO_AUTORIZADO_Result> Lista { get; set; }

        public ListaUsuariosAutorizado()
        {
            Lista = new HashSet<SP_FIND_USUARIO_AUTORIZADO_Result>();
        }
    }

    public class ListaPrivilegiosByRol
    {
        public virtual ICollection<SP_LIST_PRIVILEGIOSBYROL_Result> Lista { get; set; }

        public ListaPrivilegiosByRol()
        {
            Lista = new HashSet<SP_LIST_PRIVILEGIOSBYROL_Result>();
        }
    }

}