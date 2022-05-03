using Cervejaria.Domain.Base;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public record Produto : BaseEntity
    {
        public Produto()
        {

        }
        public string Nome { get; init; }
        public string Descricao { get; init; }
        public DateTime? Fabricacao { get; init; }
        public DateTime? Validade { get; init; }
        public int? Quantidade { get; init; }
        public string UndMedida { get; init; }
        public int? IdReceita { get; init; }
        public DateTime CreatedAt { get; init; }
        public DateTime? UpdatedAt { get; init; }

        public virtual Receita Receita{ get; init; }
    }
}
