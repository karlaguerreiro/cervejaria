using Cervejaria.Domain.Common;
using System;

namespace Cervejaria.Domain.Models
{
    public record Insumo
    {
        public Insumo()
        {

        }

        public int Id { get; init; }
        public string Name { get; init; }
        public DateOnly DataCompra { get; init; }
        public DateOnly DataValidade { get; init; }
        public decimal Preco { get; init; }
        public string UnidadeMed { get; init; }
        public int UnidadeId { get; init; }
        public int UsuarioId { get; init; }
        public virtual Usuario Usuario { get; init; }
        public int ReceitaId { get; init; }
        public virtual Receita Receita { get; init; }
    }
}
