using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Enuns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record ClienteFornecedorViewModel
    {
        public ClienteFornecedorViewModel()
        {
        }

        public int? Id { get; init; }
        public string Nome { get; init; }
        public string CnpjCpf { get; init; }
        public string Ie { get; init; }
        public TipoUsuario? Tipo { get; init; }
        public int? IdEndereco { get; init; }
        public int? IdContato { get; init; }

        public virtual ContatoViewModel Contato { get; init; }
        public virtual EnderecoViewModel Endereco { get; init; }
    }
}
