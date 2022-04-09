using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public record EmpregoAnterior : BaseEntity
    {
        public EmpregoAnterior()
        {
            InfoUsuarios = new HashSet<InfoUsuario>();
        }
        public string Empresa { get; init; }
        public string Cargo { get; init; }
        public DateTime? DataEntrada { get; init; }
        public DateTime? DataSaida { get; init; }

        public virtual ICollection<InfoUsuario> InfoUsuarios { get; init; }
    }
}
