using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public record Endereco : BaseEntity
    {
        public Endereco()
        {
            ClienteFornecedors = new HashSet<ClienteFornecedor>();
            InfoUsuarios = new HashSet<InfoUsuario>();
        }

        public string Cep { get; init; }
        public byte? Numero { get; init; }
        public string Complemento { get; init; }

        public virtual ICollection<ClienteFornecedor> ClienteFornecedors { get; init; }
        public virtual ICollection<InfoUsuario> InfoUsuarios { get; init; }
    }
}
