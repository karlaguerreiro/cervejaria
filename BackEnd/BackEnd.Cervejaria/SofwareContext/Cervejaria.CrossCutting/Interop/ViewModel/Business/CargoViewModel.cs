namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record CargoViewModel
    {
        public int? Id { get; init; }
        public string Funcao { get; init; }
        public string Descricao { get; init; }
    }
}
