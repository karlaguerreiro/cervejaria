using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public record Insumo : BaseEntity
    {
        public Insumo()
        {
            Receita = new HashSet<Receita>();
        }

        public string Nome { get; init; }
        public DateTime? Datacompra { get; init; }
        public DateTime? Datavalidade { get; init; }
        public decimal? Preco { get; init; }
        public string Unidademed { get; init; }
        public int Usuarioid { get; init; }

        public virtual Usuario Usuario { get; init; }

        public virtual ICollection<Receita> Receita { get; init; }
    }
}
