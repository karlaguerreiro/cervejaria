using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Enuns;

namespace Cervejaria.Domain.Common
{
    public record Produto : BaseEntity
    {
        public Produto()
        {

        }
        public string Descricao { get; init; }
        public decimal? Preco { get; init; }
        public TipoProduto Tipo { get; init; }
        public int? Usuarioid { get; init; }
        public virtual Usuario Usuario { get; init; }
    }
}
