//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WsSiguemeQ.Models.EDMX
{
    using System;
    using System.Collections.Generic;
    
    public partial class Usuarios
    {
        public string idUsuario { get; set; }
        public string password { get; set; }
        public string nombre { get; set; }
        public string estado { get; set; }
        public Nullable<System.DateTime> fechaCreado { get; set; }
        public Nullable<System.DateTime> fechaActualizado { get; set; }
        public string usrCreado { get; set; }
        public string usrModificado { get; set; }
        public int idRol { get; set; }
    
        public virtual DRoles DRoles { get; set; }
    }
}
