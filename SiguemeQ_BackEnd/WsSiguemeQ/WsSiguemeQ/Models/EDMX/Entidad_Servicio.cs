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
    
    public partial class Entidad_Servicio
    {
        public long idEntidadServicio { get; set; }
        public long idEntidad { get; set; }
        public int idServicio { get; set; }
    
        public virtual DServicio DServicio { get; set; }
        public virtual Entidad Entidad { get; set; }
    }
}
