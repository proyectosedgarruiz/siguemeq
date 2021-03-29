using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WsSiguemeQ.Models.DTO;
using WsSiguemeQ.Models.EDMX;


namespace WsSiguemeQ.Services
{
    public class PersonasService
    {
        SiguemeQ_DesarrolloEntities db = new SiguemeQ_DesarrolloEntities();

        #region Personas

        public PersonasRespuesta addPersona(PersonasRespuesta persona)
        {

            PersonasRespuesta respuesta = new PersonasRespuesta();

              try
              {
                  var accion = db.SP_ADD_PERSONA(
                      persona.idPersona,
                      persona.idTipoIdentificacion,
                      persona.numeroIdentificacion,
                      persona.digitoVerificacion,
                      persona.primerNombre,
                      persona.segundoNombre,
                      persona.primerApellido,
                      persona.segundoApellido,
                      persona.direccion,
                      persona.idTipoDireccion,
                      persona.idLocalidad,
                      persona.idBarrio,
                      persona.idUpz,
                      persona.telefono1,
                      persona.telefono2,
                      persona.correoElectronico,
                      persona.usrCreado,
                      persona.usrModificado
                      );


                respuesta.idPersona = db.Persona.OrderByDescending(x => x.idPersona).First().idPersona;
                respuesta.OperacionExitosa = true;

              }
              catch (Exception ex)
              {
                  respuesta.Mensaje = "Error al Ingresar Datos Persona -" + ex.ToString() + "-";
                  respuesta.OperacionExitosa = false;
              }
              return respuesta;
            

           
        }



        #endregion
    }
}