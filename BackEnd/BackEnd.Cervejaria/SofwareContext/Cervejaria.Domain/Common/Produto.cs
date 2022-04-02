using Cervejaria.Domain.Business;
using System;
using System.Collections.Generic;

namespace Cervejaria.Domain.Common
{
    public partial class Produto
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public decimal? Preco { get; set; }
        public short Tipo { get; set; }
        public int? Usuarioid { get; set; }
        public virtual Usuario Usuario { get; set; }
    }
}
