using Cervejaria.Domain.Base;
using Cervejaria.Domain.Common;
using System.Collections.Generic;

namespace Cervejaria.Domain.Business
{
    public record Usuario : BaseEntity
    {
        public Usuario()
        {
            Contatos = new HashSet<Contato>();
            Enderecos = new HashSet<Endereco>();
            Insumos = new HashSet<Insumo>();
            Receita = new HashSet<Receita>();
        }

        public string Nome { get; init; }
        public string Cnpj { get; init; }
        public string Ie { get; init; }
        public short Tipo { get; init; }

        public virtual ICollection<Contato> Contatos { get; init; }
        public virtual ICollection<Endereco> Enderecos { get; init; }
        public virtual ICollection<Insumo> Insumos { get; init; }
        public virtual ICollection<Receita> Receita { get; init; }
        public virtual ICollection<Produto> Produtos { get; init; }
    }
}
