using Cervejaria.CrossCutting.Interop.ViewModel.Business;
using Swashbuckle.AspNetCore.Filters;

using System;
using System.Collections.Generic;

namespace Cervejaria.Api.Config.CustomRequests
{
    public record UViewModelPostExample : IExamplesProvider<UsuarioViewModel>
    {
        public UsuarioViewModel GetExamples() =>
             new()
             {
                 NomeUsuario = "Arthur Pereira",
                 Senha = "191.000.000-00",
                 NivelAcesso = Domain.Enuns.NivelDeAcesso.Rh,
                 DeletedAt = DateTime.UtcNow,
                 UpdatedAt = DateTime.Now,
                 CreatedAt = DateTime.Now,
                 InfoUsuarios = new List<InfoUsuarioViewModel>() 
                 {
                    new InfoUsuarioViewModel()
                    {
                        Cargo = new () { Descricao = "trabalho", Funcao = "gerente" },
                        Contato = new() { Contato1 = "arthur ct", Email = "arthur@lindo.com", Telefone = "(35) 99916-9523" },
                        Endereco = new() { Complemento = "arthur end", Cep = "37495-000", Numero = 12 },
                        Emprego = new() {Cargo = "gerente", DataEntrada = DateTime.Now, DataSaida = DateTime.Now.AddHours(8), Empresa = "linda"}
                    }
                 }
             };
    }
}
