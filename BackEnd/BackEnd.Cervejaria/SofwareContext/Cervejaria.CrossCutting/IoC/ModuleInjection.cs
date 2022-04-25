using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Repository;
using Cervejaria.Repository.CommonRepository;
using Cervejaria.Service.Base;
using Cervejaria.Service.CommonServices;
using Cervejaria.Service.Notificator;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace Cervejaria.CrossCutting.IoC
{
    public static class ModuleInjection
    {
        public static IServiceCollection RegisterDI(this IServiceCollection services) =>
            services
                .AddScoped(typeof(IRepository<>), typeof(Repository<>))
                .AddScoped(typeof(IService<>), typeof(Service<>))
                .AddScoped<IInsumoRepository, InsumoRepository>()
                .AddScoped<IReceitaRepository, ReceitaRepository>()
                .AddScoped<IProdutoRepository, ProdutoRepository>()
                .AddScoped<IInsumoService, InsumoService>()
                .AddScoped<IProdutoService, ProdutoService>()
                .AddScoped<IReceitaService, ReceitaService>()
                .AddScoped<INotificator, Notificator>();
    }
}
