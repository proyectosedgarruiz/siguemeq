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
    
    public partial class DPrivilegioRol
    {
        public int idPrivilegioRol { get; set; }
        public int idPrivilegio { get; set; }
        public int idRol { get; set; }
    
        public virtual DRoles DRoles { get; set; }
        public virtual DPrivilegios DPrivilegios { get; set; }
    }
}
