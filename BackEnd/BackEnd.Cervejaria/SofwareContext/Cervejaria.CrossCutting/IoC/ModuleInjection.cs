using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Repository.BusinessRepositoy;
using Cervejaria.Domain.Contracts.Service;
using Cervejaria.Domain.Contracts.Service.BusinessServices;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Repository;
using Cervejaria.Repository.BusinessRepository;
using Cervejaria.Repository.CommonRepository;
using Cervejaria.Service.Base;
using Cervejaria.Service.BusinessServices;
using Cervejaria.Service.CommonServices;
using Cervejaria.Service.Notificator;

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
                .AddScoped<IUsuarioRepository, UsuarioRepository>()
                .AddScoped<IClienteFornecedorRepository, ClienteFornecedorRepository>()
                .AddScoped<IInsumoService, InsumoService>()
                .AddScoped<IUsuarioService, UsuarioService>()
                .AddScoped<IProdutoService, ProdutoService>()
                .AddScoped<IClienteFornecedorService, ClienteFornecedorService>()
                .AddScoped<IReceitaService, ReceitaService>()
                .AddScoped<INotificator, Notificator>();
    }
}
