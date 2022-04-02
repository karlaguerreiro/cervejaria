namespace Cervejaria.Domain.RelationShip
{
    public record ReceitaInsumo
    {
        public int ReceitaId { get; init; }
        public int InsumoId { get; init; }
    }
}
