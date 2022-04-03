using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public record Receita : BaseEntity
    {
        public Receita()
        {
            Insumos = new List<Insumo>();
        }

        public string Nome { get; init; }
        public string Descricao { get; init; }
        public int? UsuarioId { get; init; }

        public virtual Usuario Usuario { get; init; }

        public virtual List<Insumo> Insumos { get; init; }
    }
}
