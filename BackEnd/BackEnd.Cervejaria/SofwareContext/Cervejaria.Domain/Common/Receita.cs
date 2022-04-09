using Cervejaria.Domain.Base;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public record Receita : BaseEntity
    {
        public Receita()
        {
            Produtos = new HashSet<Produto>();
        }

        public string Nome { get; init; }
        public string Descricao { get; init; }


        public virtual ICollection<InsumoReceita> InsumoReceitas { get; init; }
        public virtual ICollection<Produto> Produtos { get; init; }
    }
}
