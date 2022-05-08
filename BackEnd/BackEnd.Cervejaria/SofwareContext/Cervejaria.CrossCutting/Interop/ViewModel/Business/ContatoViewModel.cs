using System.Collections.Generic;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record ContatoViewModel
    {
        public ContatoViewModel()
        {
            ClienteFornecedors = new HashSet<ClienteFornecedorViewModel>();
            InfoUsuarios = new HashSet<InfoUsuarioViewModel>();
        }

        public string Telefone { get; init; }
        public string Contato1 { get; init; }
        public string Email { get; init; }

        public virtual ICollection<ClienteFornecedorViewModel> ClienteFornecedors { get; init; }
        public virtual ICollection<InfoUsuarioViewModel> InfoUsuarios { get; init; }
    }
}
