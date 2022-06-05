using Cervejaria.Domain.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

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

        [NotMapped]
        public virtual ICollection<Insumo> Insumos { get; init; }
        public virtual ICollection<InsumoReceita> InsumoReceitas { get; init; }
        public virtual ICollection<Produto> Produtos { get; init; }
    }
}
