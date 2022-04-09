using System;
using System.Collections.Generic;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Common
{
    public record InsumoViewModel
    {
        public int? Id { get; set; }
        public string Nome { get; init; }
        public DateTime? Datacompra { get; init; }
        public DateTime? DataValidade { get; init; }
        public decimal? Preco { get; init; }
        public string Unidademed { get; init; }
        public int? IdClienteFornecedor { get; init; }
        public virtual List<InsumoReceitaViewModel> InsumoReceitas { get; init; }
    }
}
