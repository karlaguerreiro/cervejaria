using Cervejaria.Domain.Base;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Enuns;

namespace Cervejaria.Domain.Common
{
    public record Contato : BaseEntity
    {
        public Contato()
        {

        }
        public TipoContato Tipo { get; init; }
        public string Descricao { get; init; }
        public int Usuarioid { get; init; }

        public virtual Usuario Usuario { get; init; }
    }
}
