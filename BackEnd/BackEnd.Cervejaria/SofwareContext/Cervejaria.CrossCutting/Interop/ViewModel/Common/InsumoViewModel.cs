using System;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Common
{
    public record InsumoViewModel
    {
        public string Nome { get; init; }
        public DateTime? Datacompra { get; init; }
        public DateTime? Datavalidade { get; init; }
        public decimal? Preco { get; init; }
        public string Unidademed { get; init; }
    }
}
