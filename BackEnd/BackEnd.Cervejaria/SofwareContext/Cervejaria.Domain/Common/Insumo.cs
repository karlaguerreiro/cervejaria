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

        }
        public string Nome { get; init; }
        public DateTime? DataCompra { get; init; }
        public DateTime? Validade { get; init; }
        public int? PrecoUnit { get; init; }
        public string UndMedida { get; init; }
        public int? IdClienteFornecedor { get; init; }

        public virtual ICollection<InsumoReceita> InsumoReceitas { get; init; }
        public virtual ClienteFornecedor ClienteFornecedores { get; init; }
    }
}
