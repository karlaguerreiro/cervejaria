using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Repository.CommonRepository;
using Cervejaria.Service.CommonServices;
using Cervejaria.Service.Notificator;
using Microsoft.Extensions.DependencyInjection;

namespace Cervejaria.CrossCutting.IoC
{
    public static class ModuleInjection
    {
        public static IServiceCollection RegisterDI(this IServiceCollection services) =>
            services
                .AddScoped<IInsumoRepository, InsumoRepository>()
                .AddScoped<IReceitaRepository, ReceitaRepository>()
                .AddScoped<IProdutoRepository, ProdutoRepository>()
                .AddScoped<IInsumoService, InsumoService>()
                .AddScoped<INotificator, Notificator>();
    }
}
