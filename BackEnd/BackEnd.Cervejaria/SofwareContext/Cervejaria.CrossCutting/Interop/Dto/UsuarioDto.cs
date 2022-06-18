using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Enuns;
using System.Collections.Generic;
using System;
using Cervejaria.CrossCutting.Interop.ViewModel.Business;

namespace Cervejaria.CrossCutting.Interop.Dto
{
    public record UsuarioDto
    {
        public int Id { get; init; } 
        public string NomeUsuario { get; init; }
        public string Senha { get; init; }
        public NivelDeAcesso? NivelAcesso { get; init; }
        public DateTime CreatedAt { get; init; }
        public DateTime? UpdatedAt { get; init; }
        public DateTime? DeletedAt { get; init; }

        public virtual ICollection<InfoUsuarioViewModel> InfoUsuarios { get; init; }

    }
}
