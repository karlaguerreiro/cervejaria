using Cervejaria.Domain.Enuns;

namespace Cervejaria.Domain.Common
{
    public record Usuario
    {
        public Usuario()
        {

        }
        public int Id { get; init; }
        public string Nome { get; init; }
        public string CNPJ { get; init; }
        public string IE { get; init; }
        public TipoUsuario? Tipo { get; init; }
        public int? EnderecoId { get; init; }
    }
}
