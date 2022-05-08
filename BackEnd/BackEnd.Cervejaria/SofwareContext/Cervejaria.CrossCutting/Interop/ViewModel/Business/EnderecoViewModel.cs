namespace Cervejaria.CrossCutting.Interop.ViewModel.Business
{
    public record EnderecoViewModel
    {
        public string Cep { get; init; }
        public byte? Numero { get; init; }
        public string Complemento { get; init; }
    }
}
