using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Repository.CommonRepository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cervejaria.CrossCutting.IoC
{
    public static class ModuleInjection
    {
        public static IServiceCollection RegisterIoC(this IServiceCollection services) =>
            services
                .AddScoped<IInsumoRepository, InsumoRepository>()
                .AddScoped<IReceitaRepository, ReceitaRepository>()
                .AddScoped<IProdutoRepository, ProdutoRepository>();
    }
}
