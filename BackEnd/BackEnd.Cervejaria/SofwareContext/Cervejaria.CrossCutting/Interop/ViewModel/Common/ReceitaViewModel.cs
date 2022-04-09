using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Common
{
    public record ReceitaViewModel
    {
        public int? Id { get; set;}
        public string Nome { get; init; }
        public string Descricao { get; init; }

        public virtual List<InsumoReceitaViewModel> InsumoReceitas { get; init; }
    }
}
