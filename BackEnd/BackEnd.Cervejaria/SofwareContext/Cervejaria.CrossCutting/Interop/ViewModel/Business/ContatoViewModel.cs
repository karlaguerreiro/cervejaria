using System.Collections.Generic;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record ContatoViewModel
    {
        public int? Id { get; init; }
        public string Telefone { get; init; }
        public string Contato1 { get; init; }
        public string Email { get; init; }
    }
}
