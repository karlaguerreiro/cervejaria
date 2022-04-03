using System.Collections.Generic;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Common
{
    public record ReceitaViewModel
    {
        public int? Id { get; set; }
        public string Nome { get; init; }
        public string Descricao { get; init; }
        public List<InsumoViewModel> insumos { get; init; }
    }
}
