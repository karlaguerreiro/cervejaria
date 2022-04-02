using Cervejaria.Domain.Common;
using System.Collections.Generic;

namespace Cervejaria.Domain.Business
{
    public partial class Usuario
    {
        public Usuario()
        {
            Contatos = new HashSet<Contato>();
            Enderecos = new HashSet<Endereco>();
            Insumos = new HashSet<Insumo>();
            Receita = new HashSet<Receita>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cnpj { get; set; }
        public string Ie { get; set; }
        public short Tipo { get; set; }

        public virtual ICollection<Contato> Contatos { get; set; }
        public virtual ICollection<Endereco> Enderecos { get; set; }
        public virtual ICollection<Insumo> Insumos { get; set; }
        public virtual ICollection<Receita> Receita { get; set; }
        public virtual ICollection<Produto> Produtos { get; set; }
    }
}
