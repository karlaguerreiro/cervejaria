using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public record Contato : BaseEntity
    {
        public Contato()
        {
            ClienteFornecedors = new HashSet<ClienteFornecedor>();
            InfoUsuarios = new HashSet<InfoUsuario>();
        }

        public string Telefone { get; init; }
        public string Contato1 { get; init; }
        public string Email { get; init; }

        public virtual ICollection<ClienteFornecedor> ClienteFornecedors { get; init; }
        public virtual ICollection<InfoUsuario> InfoUsuarios { get; init; }
    }
}
