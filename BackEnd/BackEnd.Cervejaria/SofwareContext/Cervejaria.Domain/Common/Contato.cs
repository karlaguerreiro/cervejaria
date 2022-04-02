using Cervejaria.Domain.Business;
using Cervejaria.Domain.Enuns;

namespace Cervejaria.Domain.Common
{
    public partial class Contato
    {
        public int Id { get; set; }
        public TipoContato Tipo { get; set; }
        public string Descricao { get; set; }
        public int Usuarioid { get; set; }

        public virtual Usuario Usuario { get; set; }
    }
}
