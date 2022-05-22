using Cervejaria.Domain.Enuns;
using System;
using System.Collections.Generic;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record UsuarioViewModel
    {
        public UsuarioViewModel()
        {
            InfoUsuarios = new HashSet<InfoUsuarioViewModel>();
        }

        public string NomeUsuario { get; init; }
        public string Senha { get; init; }
        public NivelDeAcesso? NivelAcesso { get; init; }
        public DateTime CreatedAt { get; init; }
        public DateTime? UpdatedAt { get; init; }
        public DateTime? DeletedAt { get; init; }

        public virtual ICollection<InfoUsuarioViewModel> InfoUsuarios { get; init; }
    }
}
