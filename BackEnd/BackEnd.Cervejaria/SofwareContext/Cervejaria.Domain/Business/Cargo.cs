using Cervejaria.Domain.Base;
using System.Collections.Generic;

namespace Cervejaria.Domain.Business
{
    public record Cargo : BaseEntity
    {
        public Cargo()
        {
            InfoUsuarios = new HashSet<InfoUsuario>();
        }

        public string Funcao { get; init; }
        public string Descricao { get; init; }

        public virtual ICollection<InfoUsuario> InfoUsuarios { get; init; }
    }
}
