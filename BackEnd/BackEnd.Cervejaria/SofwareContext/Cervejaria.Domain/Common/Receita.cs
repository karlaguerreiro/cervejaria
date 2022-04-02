using Cervejaria.Domain.Business;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public partial class Receita
    {
        public Receita()
        {
            Insumos = new HashSet<Insumo>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int Usuarioid { get; set; }

        public virtual Usuario Usuario { get; set; }

        public virtual ICollection<Insumo> Insumos { get; set; }
    }
}
