using Cervejaria.CrossCutting.Interop.ViewModel.Business;
using Swashbuckle.AspNetCore.Filters;

namespace Cervejaria.Api.Config.CustomRequests
{

    public record CFViewModelPostExample : IExamplesProvider<ClienteFornecedorViewModel>
    {
        public ClienteFornecedorViewModel GetExamples() =>
             new ()
             {
                 Nome = "Arthur Pereira",
                 CnpjCpf = "191.000.000-00",
                 Tipo = Domain.Enuns.TipoUsuario.Cliente,
                 Ie = "aa",
                 Contato = new() { Contato1 = "arthur ct", Email = "arthur@lindo.com", Telefone = "(35) 99916-9523" },
                 Endereco = new() { Complemento = "arthur end", Cep = "37495-000", Numero = 12 },
             };
    }
}
