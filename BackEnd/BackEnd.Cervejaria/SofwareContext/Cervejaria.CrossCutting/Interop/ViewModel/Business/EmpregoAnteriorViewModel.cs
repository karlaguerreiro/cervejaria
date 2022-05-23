using System;

namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record EmpregoAnteriorViewModel
    {
        public int? Id { get; init; }
        public string Empresa { get; init; }
        public string Cargo { get; init; }
        public DateTime? DataEntrada { get; init; }
        public DateTime? DataSaida { get; init; }
    }
}
