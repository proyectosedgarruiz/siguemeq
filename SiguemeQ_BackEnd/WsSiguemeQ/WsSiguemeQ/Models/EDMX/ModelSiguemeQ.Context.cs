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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class SiguemeQ_DesarrolloEntities : DbContext
    {
        public SiguemeQ_DesarrolloEntities()
            : base("name=SiguemeQ_DesarrolloEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<DEntidadRemitente> DEntidadRemitente { get; set; }
        public virtual DbSet<DModulos> DModulos { get; set; }
        public virtual DbSet<DPrivilegioRol> DPrivilegioRol { get; set; }
        public virtual DbSet<DPrivilegios> DPrivilegios { get; set; }
        public virtual DbSet<DRoles> DRoles { get; set; }
        public virtual DbSet<DServicio> DServicio { get; set; }
        public virtual DbSet<Entidad> Entidad { get; set; }
        public virtual DbSet<Entidad_Servicio> Entidad_Servicio { get; set; }
        public virtual DbSet<Persona> Persona { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }
        public virtual DbSet<Visita> Visita { get; set; }
        public virtual DbSet<DBarrio> DBarrio { get; set; }
        public virtual DbSet<DFechaFestiva> DFechaFestiva { get; set; }
        public virtual DbSet<DLocalidad> DLocalidad { get; set; }
        public virtual DbSet<DTipoIdentificacion> DTipoIdentificacion { get; set; }
        public virtual DbSet<DTipoRecepcionQueja> DTipoRecepcionQueja { get; set; }
        public virtual DbSet<DTipoSolicitud> DTipoSolicitud { get; set; }
        public virtual DbSet<DUpz> DUpz { get; set; }
    
        public virtual int SP_ADD_PERSONA(Nullable<long> idPersona, string idTipoIdentificacion, string numeroIdentificacion, Nullable<int> digitoVerificacion, string primerNombre, string segundoNombre, string primerApellido, string segundoApellido, string direccion, Nullable<int> idTipoDireccion, Nullable<int> idLocalidad, string idBarrio, Nullable<int> idUpz, string telefono1, string telefono2, string correoElectronico, string usrCreado, string usrModificado)
        {
            var idPersonaParameter = idPersona.HasValue ?
                new ObjectParameter("idPersona", idPersona) :
                new ObjectParameter("idPersona", typeof(long));
    
            var idTipoIdentificacionParameter = idTipoIdentificacion != null ?
                new ObjectParameter("idTipoIdentificacion", idTipoIdentificacion) :
                new ObjectParameter("idTipoIdentificacion", typeof(string));
    
            var numeroIdentificacionParameter = numeroIdentificacion != null ?
                new ObjectParameter("numeroIdentificacion", numeroIdentificacion) :
                new ObjectParameter("numeroIdentificacion", typeof(string));
    
            var digitoVerificacionParameter = digitoVerificacion.HasValue ?
                new ObjectParameter("digitoVerificacion", digitoVerificacion) :
                new ObjectParameter("digitoVerificacion", typeof(int));
    
            var primerNombreParameter = primerNombre != null ?
                new ObjectParameter("primerNombre", primerNombre) :
                new ObjectParameter("primerNombre", typeof(string));
    
            var segundoNombreParameter = segundoNombre != null ?
                new ObjectParameter("segundoNombre", segundoNombre) :
                new ObjectParameter("segundoNombre", typeof(string));
    
            var primerApellidoParameter = primerApellido != null ?
                new ObjectParameter("primerApellido", primerApellido) :
                new ObjectParameter("primerApellido", typeof(string));
    
            var segundoApellidoParameter = segundoApellido != null ?
                new ObjectParameter("segundoApellido", segundoApellido) :
                new ObjectParameter("segundoApellido", typeof(string));
    
            var direccionParameter = direccion != null ?
                new ObjectParameter("direccion", direccion) :
                new ObjectParameter("direccion", typeof(string));
    
            var idTipoDireccionParameter = idTipoDireccion.HasValue ?
                new ObjectParameter("idTipoDireccion", idTipoDireccion) :
                new ObjectParameter("idTipoDireccion", typeof(int));
    
            var idLocalidadParameter = idLocalidad.HasValue ?
                new ObjectParameter("idLocalidad", idLocalidad) :
                new ObjectParameter("idLocalidad", typeof(int));
    
            var idBarrioParameter = idBarrio != null ?
                new ObjectParameter("idBarrio", idBarrio) :
                new ObjectParameter("idBarrio", typeof(string));
    
            var idUpzParameter = idUpz.HasValue ?
                new ObjectParameter("idUpz", idUpz) :
                new ObjectParameter("idUpz", typeof(int));
    
            var telefono1Parameter = telefono1 != null ?
                new ObjectParameter("telefono1", telefono1) :
                new ObjectParameter("telefono1", typeof(string));
    
            var telefono2Parameter = telefono2 != null ?
                new ObjectParameter("telefono2", telefono2) :
                new ObjectParameter("telefono2", typeof(string));
    
            var correoElectronicoParameter = correoElectronico != null ?
                new ObjectParameter("correoElectronico", correoElectronico) :
                new ObjectParameter("correoElectronico", typeof(string));
    
            var usrCreadoParameter = usrCreado != null ?
                new ObjectParameter("usrCreado", usrCreado) :
                new ObjectParameter("usrCreado", typeof(string));
    
            var usrModificadoParameter = usrModificado != null ?
                new ObjectParameter("usrModificado", usrModificado) :
                new ObjectParameter("usrModificado", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_ADD_PERSONA", idPersonaParameter, idTipoIdentificacionParameter, numeroIdentificacionParameter, digitoVerificacionParameter, primerNombreParameter, segundoNombreParameter, primerApellidoParameter, segundoApellidoParameter, direccionParameter, idTipoDireccionParameter, idLocalidadParameter, idBarrioParameter, idUpzParameter, telefono1Parameter, telefono2Parameter, correoElectronicoParameter, usrCreadoParameter, usrModificadoParameter);
        }
    
        public virtual int SP_ADD_PRIVILEGIO(string descripcion, string componente, Nullable<int> idModulo, Nullable<int> orden)
        {
            var descripcionParameter = descripcion != null ?
                new ObjectParameter("descripcion", descripcion) :
                new ObjectParameter("descripcion", typeof(string));
    
            var componenteParameter = componente != null ?
                new ObjectParameter("componente", componente) :
                new ObjectParameter("componente", typeof(string));
    
            var idModuloParameter = idModulo.HasValue ?
                new ObjectParameter("idModulo", idModulo) :
                new ObjectParameter("idModulo", typeof(int));
    
            var ordenParameter = orden.HasValue ?
                new ObjectParameter("orden", orden) :
                new ObjectParameter("orden", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_ADD_PRIVILEGIO", descripcionParameter, componenteParameter, idModuloParameter, ordenParameter);
        }
    
        public virtual int SP_ADD_PRIVILEGIOROL(Nullable<int> idPrivilegio, Nullable<int> idRol)
        {
            var idPrivilegioParameter = idPrivilegio.HasValue ?
                new ObjectParameter("idPrivilegio", idPrivilegio) :
                new ObjectParameter("idPrivilegio", typeof(int));
    
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("idRol", idRol) :
                new ObjectParameter("idRol", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_ADD_PRIVILEGIOROL", idPrivilegioParameter, idRolParameter);
        }
    
        public virtual int SP_ADD_ROL(string descripcion)
        {
            var descripcionParameter = descripcion != null ?
                new ObjectParameter("descripcion", descripcion) :
                new ObjectParameter("descripcion", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_ADD_ROL", descripcionParameter);
        }
    
        public virtual int SP_ADD_USUARIO(string idUsuario, string password, string nombre, string estado, string usrCreado, Nullable<int> idRol)
        {
            var idUsuarioParameter = idUsuario != null ?
                new ObjectParameter("idUsuario", idUsuario) :
                new ObjectParameter("idUsuario", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            var nombreParameter = nombre != null ?
                new ObjectParameter("nombre", nombre) :
                new ObjectParameter("nombre", typeof(string));
    
            var estadoParameter = estado != null ?
                new ObjectParameter("estado", estado) :
                new ObjectParameter("estado", typeof(string));
    
            var usrCreadoParameter = usrCreado != null ?
                new ObjectParameter("usrCreado", usrCreado) :
                new ObjectParameter("usrCreado", typeof(string));
    
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("idRol", idRol) :
                new ObjectParameter("idRol", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_ADD_USUARIO", idUsuarioParameter, passwordParameter, nombreParameter, estadoParameter, usrCreadoParameter, idRolParameter);
        }
    
        public virtual ObjectResult<SP_FIND_PRIVILEGIOROL_Result> SP_FIND_PRIVILEGIOROL(Nullable<int> idPrivilegioRol)
        {
            var idPrivilegioRolParameter = idPrivilegioRol.HasValue ?
                new ObjectParameter("idPrivilegioRol", idPrivilegioRol) :
                new ObjectParameter("idPrivilegioRol", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_FIND_PRIVILEGIOROL_Result>("SP_FIND_PRIVILEGIOROL", idPrivilegioRolParameter);
        }
    
        public virtual ObjectResult<SP_FIND_ROL_Result> SP_FIND_ROL(Nullable<int> idRol)
        {
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("idRol", idRol) :
                new ObjectParameter("idRol", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_FIND_ROL_Result>("SP_FIND_ROL", idRolParameter);
        }
    
        public virtual ObjectResult<SP_FIND_USUARIO_Result> SP_FIND_USUARIO(string idUsuario)
        {
            var idUsuarioParameter = idUsuario != null ?
                new ObjectParameter("idUsuario", idUsuario) :
                new ObjectParameter("idUsuario", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_FIND_USUARIO_Result>("SP_FIND_USUARIO", idUsuarioParameter);
        }
    
        public virtual ObjectResult<SP_FIND_USUARIO_AUTORIZADO_Result> SP_FIND_USUARIO_AUTORIZADO(string idUsuario, string password)
        {
            var idUsuarioParameter = idUsuario != null ?
                new ObjectParameter("idUsuario", idUsuario) :
                new ObjectParameter("idUsuario", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_FIND_USUARIO_AUTORIZADO_Result>("SP_FIND_USUARIO_AUTORIZADO", idUsuarioParameter, passwordParameter);
        }
    
        public virtual ObjectResult<SP_LIST_BARRIO_Result> SP_LIST_BARRIO(Nullable<int> idupz)
        {
            var idupzParameter = idupz.HasValue ?
                new ObjectParameter("idupz", idupz) :
                new ObjectParameter("idupz", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_BARRIO_Result>("SP_LIST_BARRIO", idupzParameter);
        }
    
        public virtual ObjectResult<SP_LIST_ENTIDAD_Result> SP_LIST_ENTIDAD()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_ENTIDAD_Result>("SP_LIST_ENTIDAD");
        }
    
        public virtual ObjectResult<SP_LIST_ENTIDADREMITENTE_Result> SP_LIST_ENTIDADREMITENTE()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_ENTIDADREMITENTE_Result>("SP_LIST_ENTIDADREMITENTE");
        }
    
        public virtual ObjectResult<SP_LIST_LOCALIDAD_Result> SP_LIST_LOCALIDAD()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_LOCALIDAD_Result>("SP_LIST_LOCALIDAD");
        }
    
        public virtual ObjectResult<SP_LIST_PERSONAAFECTADO_Result> SP_LIST_PERSONAAFECTADO()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_PERSONAAFECTADO_Result>("SP_LIST_PERSONAAFECTADO");
        }
    
        public virtual ObjectResult<SP_LIST_PERSONAQUEJOSO_Result> SP_LIST_PERSONAQUEJOSO()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_PERSONAQUEJOSO_Result>("SP_LIST_PERSONAQUEJOSO");
        }
    
        public virtual ObjectResult<SP_LIST_PRIVILEGIO_Result> SP_LIST_PRIVILEGIO()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_PRIVILEGIO_Result>("SP_LIST_PRIVILEGIO");
        }
    
        public virtual ObjectResult<SP_LIST_PRIVILEGIOROL_Result> SP_LIST_PRIVILEGIOROL()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_PRIVILEGIOROL_Result>("SP_LIST_PRIVILEGIOROL");
        }
    
        public virtual ObjectResult<SP_LIST_PRIVILEGIOSBYROL_Result> SP_LIST_PRIVILEGIOSBYROL(Nullable<int> idRol)
        {
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("idRol", idRol) :
                new ObjectParameter("idRol", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_PRIVILEGIOSBYROL_Result>("SP_LIST_PRIVILEGIOSBYROL", idRolParameter);
        }
    
        public virtual ObjectResult<SP_LIST_ROL_Result> SP_LIST_ROL()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_ROL_Result>("SP_LIST_ROL");
        }
    
        public virtual ObjectResult<SP_LIST_TIPOIDENTIFICACION_Result> SP_LIST_TIPOIDENTIFICACION()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_TIPOIDENTIFICACION_Result>("SP_LIST_TIPOIDENTIFICACION");
        }
    
        public virtual ObjectResult<SP_LIST_TIPORECEPCIONQUEJA_Result> SP_LIST_TIPORECEPCIONQUEJA()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_TIPORECEPCIONQUEJA_Result>("SP_LIST_TIPORECEPCIONQUEJA");
        }
    
        public virtual ObjectResult<SP_LIST_TIPOSOLICITUD_Result> SP_LIST_TIPOSOLICITUD()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_TIPOSOLICITUD_Result>("SP_LIST_TIPOSOLICITUD");
        }
    
        public virtual ObjectResult<SP_LIST_UPZ_Result> SP_LIST_UPZ(Nullable<int> idlocalidad)
        {
            var idlocalidadParameter = idlocalidad.HasValue ?
                new ObjectParameter("idlocalidad", idlocalidad) :
                new ObjectParameter("idlocalidad", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_UPZ_Result>("SP_LIST_UPZ", idlocalidadParameter);
        }
    
        public virtual ObjectResult<SP_LIST_USUARIO_Result> SP_LIST_USUARIO()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SP_LIST_USUARIO_Result>("SP_LIST_USUARIO");
        }
    
        public virtual int SP_UPD_CLAVE_USUARIO(string idUsuario, string clave)
        {
            var idUsuarioParameter = idUsuario != null ?
                new ObjectParameter("idUsuario", idUsuario) :
                new ObjectParameter("idUsuario", typeof(string));
    
            var claveParameter = clave != null ?
                new ObjectParameter("clave", clave) :
                new ObjectParameter("clave", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UPD_CLAVE_USUARIO", idUsuarioParameter, claveParameter);
        }
    
        public virtual int SP_UPD_PRIVILEGIO(Nullable<int> idPrivilegio, string descripcion, string componente, Nullable<int> idModulo, Nullable<int> orden)
        {
            var idPrivilegioParameter = idPrivilegio.HasValue ?
                new ObjectParameter("idPrivilegio", idPrivilegio) :
                new ObjectParameter("idPrivilegio", typeof(int));
    
            var descripcionParameter = descripcion != null ?
                new ObjectParameter("descripcion", descripcion) :
                new ObjectParameter("descripcion", typeof(string));
    
            var componenteParameter = componente != null ?
                new ObjectParameter("componente", componente) :
                new ObjectParameter("componente", typeof(string));
    
            var idModuloParameter = idModulo.HasValue ?
                new ObjectParameter("idModulo", idModulo) :
                new ObjectParameter("idModulo", typeof(int));
    
            var ordenParameter = orden.HasValue ?
                new ObjectParameter("orden", orden) :
                new ObjectParameter("orden", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UPD_PRIVILEGIO", idPrivilegioParameter, descripcionParameter, componenteParameter, idModuloParameter, ordenParameter);
        }
    
        public virtual int SP_UPD_PRIVILEGIOROL(Nullable<int> idPrivilegioRol, Nullable<int> idPrivilegio, Nullable<int> idRol)
        {
            var idPrivilegioRolParameter = idPrivilegioRol.HasValue ?
                new ObjectParameter("idPrivilegioRol", idPrivilegioRol) :
                new ObjectParameter("idPrivilegioRol", typeof(int));
    
            var idPrivilegioParameter = idPrivilegio.HasValue ?
                new ObjectParameter("idPrivilegio", idPrivilegio) :
                new ObjectParameter("idPrivilegio", typeof(int));
    
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("idRol", idRol) :
                new ObjectParameter("idRol", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UPD_PRIVILEGIOROL", idPrivilegioRolParameter, idPrivilegioParameter, idRolParameter);
        }
    
        public virtual int SP_UPD_ROL(Nullable<int> idRol, string descripcion)
        {
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("idRol", idRol) :
                new ObjectParameter("idRol", typeof(int));
    
            var descripcionParameter = descripcion != null ?
                new ObjectParameter("descripcion", descripcion) :
                new ObjectParameter("descripcion", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UPD_ROL", idRolParameter, descripcionParameter);
        }
    
        public virtual int SP_UPD_USUARIO(string idUsuario, string password, string nombre, string estado, string usrModificado, Nullable<int> idRol)
        {
            var idUsuarioParameter = idUsuario != null ?
                new ObjectParameter("idUsuario", idUsuario) :
                new ObjectParameter("idUsuario", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            var nombreParameter = nombre != null ?
                new ObjectParameter("nombre", nombre) :
                new ObjectParameter("nombre", typeof(string));
    
            var estadoParameter = estado != null ?
                new ObjectParameter("estado", estado) :
                new ObjectParameter("estado", typeof(string));
    
            var usrModificadoParameter = usrModificado != null ?
                new ObjectParameter("usrModificado", usrModificado) :
                new ObjectParameter("usrModificado", typeof(string));
    
            var idRolParameter = idRol.HasValue ?
                new ObjectParameter("idRol", idRol) :
                new ObjectParameter("idRol", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SP_UPD_USUARIO", idUsuarioParameter, passwordParameter, nombreParameter, estadoParameter, usrModificadoParameter, idRolParameter);
        }
    }
}
