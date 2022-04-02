namespace Cervejaria.Domain.Common
{
    public partial class Endereco
    {
        public int Id { get; set; }
        public string Cep { get; set; }
        public string Nome { get; set; }
        public short? Tipo { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Uf { get; set; }
        public string Pais { get; set; }
        public int Usuarioid { get; set; }

        public virtual Usuario Usuario { get; set; }
    }
}
