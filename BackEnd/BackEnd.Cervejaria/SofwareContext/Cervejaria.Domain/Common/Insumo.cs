using Cervejaria.Domain.Business;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public partial class Insumo
    {
        public Insumo()
        {
            Receita = new HashSet<Receita>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime? Datacompra { get; set; }
        public DateTime? Datavalidade { get; set; }
        public decimal? Preco { get; set; }
        public string Unidademed { get; set; }
        public int Usuarioid { get; set; }

        public virtual Usuario Usuario { get; set; }

        public virtual ICollection<Receita> Receita { get; set; }
    }
}
