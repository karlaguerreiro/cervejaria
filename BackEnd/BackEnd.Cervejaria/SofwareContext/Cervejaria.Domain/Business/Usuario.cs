using Cervejaria.Domain.Base;
using Cervejaria.Domain.Enuns;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Business
{
    public record Usuario : BaseEntity
    { 
        public Usuario()
        {
            InfoUsuarios = new HashSet<InfoUsuario>();
        }

        public string NomeUsuario { get; init; }
        public string Senha { get; init; }
        public NivelDeAcesso? NivelAcesso { get; init; }
        public DateTime CreatedAt { get; init; }
        public DateTime? UpdatedAt { get; init; }
        public DateTime? DeletedAt { get; init; }

        public virtual ICollection<InfoUsuario> InfoUsuarios { get; init; }
    }
}
