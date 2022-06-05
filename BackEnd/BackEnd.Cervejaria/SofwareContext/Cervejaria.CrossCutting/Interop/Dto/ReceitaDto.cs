using System.Collections.Generic;

namespace Cervejaria.CrossCutting.Interop.Dto
{
    public record ReceitaDto
    {
        public int? Id { get; set; }
        public string Nome { get; init; }
        public string Descricao { get; init; }

        public virtual List<InsumoDto> Insumos { get; init; }
    }
}
