namespace Cervejaria.Domain.Base
{
    public record BaseEntity
    {
        public BaseEntity()
        {

        }
        public int? Id { get; init; }
    }
}
