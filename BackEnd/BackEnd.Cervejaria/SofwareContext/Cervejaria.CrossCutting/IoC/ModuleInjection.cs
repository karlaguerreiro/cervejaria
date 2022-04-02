using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Cervejaria.CrossCutting.IoC
{
    public static class ModuleInjection
    {
        public static IServiceCollection RegisterIoC(this IServiceCollection services, IConfiguration configuration) =>
            services;
    }
}
