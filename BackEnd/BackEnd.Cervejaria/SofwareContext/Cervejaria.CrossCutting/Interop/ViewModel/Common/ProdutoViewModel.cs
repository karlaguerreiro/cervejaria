using System;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Common
{
    public record ProdutoViewModel
    {
        public int? Id { get; init; }
        public string Nome { get; init; }
        public string Descricao { get; init; }
        public DateTime? Fabricacao { get; init; }
        public DateTime? Validade { get; init; }
        public int? Quantidade { get; init; }
        public string UndMedida { get; init; }
        public int? IdReceita { get; init; }
        public DateTime CreatedAt { get; init; }
        public DateTime? UpdatedAt { get; init; }

        public virtual ReceitaViewModel Receita { get; init; }
    }
}
