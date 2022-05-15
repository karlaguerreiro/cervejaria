using System;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record InfoUsuarioViewModel
    {
        public string Nome { get; init; }
        public string Cpf { get; init; }
        public DateTime? DataNasc { get; init; }
        public virtual EnderecoViewModel Endereco { get; init; }
        public virtual ContatoViewModel Contato { get; init; }
        public virtual EmpregoAnteriorViewModel Emprego { get; init; }
        public virtual CargoViewModel Cargo { get; init; }
    }
}
