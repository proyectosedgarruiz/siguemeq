using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WsSiguemeQ.Models.DTO
{
    public abstract class RespuestaBase
    {
        public bool OperacionExitosa { get; set; }
        public string Mensaje { get; set; }

    }
}