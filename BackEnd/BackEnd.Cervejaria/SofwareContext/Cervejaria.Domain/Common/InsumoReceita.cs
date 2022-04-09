using Microsoft.EntityFrameworkCore;

namespace Cervejaria.Domain.Common
{
    [Keyless]
    public record InsumoReceita
    {
        public int IdInsumo { get; init; }
        public int IdReceita { get; init; }
        public byte? QuantidadeInsumo { get; init; }

        public virtual Insumo Insumo { get; init; }
        public virtual Receita Receita { get; init; }
    }
}
