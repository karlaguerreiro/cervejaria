using Cervejaria.Domain.Base;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Enuns;
using System.Collections.Generic;

namespace Cervejaria.Domain.Business
{
    public record ClienteFornecedor : BaseEntity
    {
        public ClienteFornecedor()
        {
            Insumos = new HashSet<Insumo>();
        }

        public string Nome { get; init; }
        public string CnpjCpf { get; init; }
        public string Ie { get; init; }
        public TipoUsuario? Tipo { get; init; }
        public int? IdEndereco { get; init; }
        public int? IdContato { get; init; }

        public virtual Contato Contato { get; init; }
        public virtual Endereco Endereco { get; init; }
        public virtual ICollection<Insumo> Insumos { get; init; }
    }
}
