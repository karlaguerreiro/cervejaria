using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System;
using System.IO;
using System.Reflection;

namespace Cervejaria.Api.Config
{
    public static class SwaggerOptions
    {
        public static IServiceCollection AddSwaggerOptions(this IServiceCollection services)
            =>
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Cervejaria.Api", Version = "v1" });
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
                c.ExampleFilters();
            })
            .AddSwaggerExamplesFromAssemblies(Assembly.GetEntryAssembly());

        public static IApplicationBuilder SwaggerBuilder(this IApplicationBuilder app) =>
            app.UseSwagger()
            .UseSwaggerUI(c => 
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Cervejaria.Api v1");
                c.RoutePrefix = string.Empty;
            });

    }
}
