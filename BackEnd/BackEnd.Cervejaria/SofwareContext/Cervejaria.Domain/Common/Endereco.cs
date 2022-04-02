using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Enuns;

namespace Cervejaria.Domain.Common
{
    public record Endereco : BaseEntity
    {
        public Endereco()
        {

        }

        public string Cep { get; init; }
        public string Nome { get; init; }
        public TipoEndereco? Tipo { get; init; }
        public string Complemento { get; init; }
        public string Bairro { get; init; }
        public string Cidade { get; init; }
        public string Uf { get; init; }
        public string Pais { get; init; }
        public int Usuarioid { get; init; }

        public virtual Usuario Usuario { get; init; }
    }
}
