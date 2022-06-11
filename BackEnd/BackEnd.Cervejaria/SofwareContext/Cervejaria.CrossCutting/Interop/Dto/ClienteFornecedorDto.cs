using Cervejaria.Domain.Enuns;

namespace Cervejaria.CrossCutting.Interop.Dto
{
    public record ClienteFornecedorDto
    {
        public int? Id { get; init; }
        public string Nome { get; init; }
        public string CnpjCpf { get; init; }
        public string Ie { get; init; }
        public TipoUsuario? Tipo { get; init; }
        public int? IdEndereco { get; init; }
        public int? IdContato { get; init; }

        public string Telefone { get; init; }
        public string Contato1 { get; init; }
        public string Email { get; init; }

        public string Cep { get; init; }
        public byte? Numero { get; init; }
        public string Complemento { get; init; }
        public string Descricao => $"O {Tipo} com telefone {Telefone} e Email {Email}, no complemento {Complemento + " numero " + Numero + " e no cep " + Cep}";
    }
}
