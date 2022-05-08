namespace Cervejaria.CrossCutting.Interop.ViewModel.Common
{
    public record InsumoReceitaViewModel
    {
        public int? IdInsumo { get; init; }
        public int? IdReceita { get; init; }
        public byte? QuantidadeInsumo { get; init; }

        public InsumoViewModel Insumo { get; init; }
        public ReceitaViewModel Receita { get; init; }
    }
}