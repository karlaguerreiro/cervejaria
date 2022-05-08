using System;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record InfoUsuarioViewModel
    {
        public string Nome { get; init; }
        public string Cpf { get; init; }
        public DateTime? DataNasc { get; init; }
        public int IdEndereco { get; init; }
        public int IdContato { get; init; }
        public int IdEmprego { get; init; }
        public int IdCargo { get; init; }
        public int IdUsuario { get; init; }

    }
}
