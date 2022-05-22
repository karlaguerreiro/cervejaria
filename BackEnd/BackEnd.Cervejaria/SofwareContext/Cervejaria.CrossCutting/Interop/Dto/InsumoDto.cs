namespace Cervejaria.CrossCutting.Interop.Dto
{
    public record InsumoDto
    {
        public int? Id { get; set; }
        public string Nome { get; init; }
        public string DataCompra { get; init; }
        public string Validade { get; init; }
        public int? PrecoUnit { get; init; }
        public string UndMedida { get; init; }
    }
}
