using Cervejaria.Domain.Base;
using Cervejaria.Domain.Common;
using System;

namespace Cervejaria.Domain.Business
{
    public record InfoUsuario : BaseEntity
    {
        public string Nome { get; init; }
        public string Cpf { get; init; }
        public DateTime? DataNasc { get; init; }
        public int IdEndereco { get; init; }
        public int IdContato { get; init; }
        public int IdEmprego { get; init; }
        public int IdCargo { get; init; }
        public int IdUsuario { get; init; }

        public virtual Cargo Cargo { get; init; }
        public virtual Contato Contato { get; init; }
        public virtual EmpregoAnterior Emprego { get; init; }
        public virtual Endereco Endereco { get; init; }
        public virtual Usuario Usuario { get; init; }
    }
}
