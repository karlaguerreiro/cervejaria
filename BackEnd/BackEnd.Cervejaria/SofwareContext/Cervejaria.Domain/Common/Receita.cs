using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public record Receita : BaseEntity
    {
        public Receita()
        {
            Insumos = new HashSet<Insumo>();
        }

        public string Nome { get; init; }
        public string Descricao { get; init; }
        public int Usuarioid { get; init; }

        public virtual Usuario Usuario { get; init; }

        public virtual ICollection<Insumo> Insumos { get; init; }
    }
}
