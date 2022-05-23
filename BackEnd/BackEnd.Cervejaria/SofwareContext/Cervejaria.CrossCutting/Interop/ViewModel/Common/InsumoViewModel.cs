using System;
using System.Collections.Generic;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Common
{
    public record InsumoViewModel
    {
        public int? Id { get; set; }
        public string Nome { get; init; }
        public DateTime DataCompra { get; init; }
        public DateTime? Validade { get; init; }
        public int? PrecoUnit { get; init; }
        public string UndMedida { get; init; }
        public int? IdClienteFornecedor { get; init; }
        public virtual List<InsumoReceitaViewModel> InsumoReceitas { get; init; }
    }
}
