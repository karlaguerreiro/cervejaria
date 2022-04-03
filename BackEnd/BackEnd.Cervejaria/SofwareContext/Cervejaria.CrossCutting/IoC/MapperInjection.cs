using Microsoft.Extensions.DependencyInjection;
using System;
using AutoMapper;

namespace Cervejaria.CrossCutting.IoC
{
    public static class MapperInjection
    {
        public static IServiceCollection AutoMapperModule(this IServiceCollection services) =>
             services.AddSingleton(new MapperConfiguration(mc => mc.AddMaps(AppDomain.CurrentDomain.GetAssemblies())).CreateMapper());    
    }
}
