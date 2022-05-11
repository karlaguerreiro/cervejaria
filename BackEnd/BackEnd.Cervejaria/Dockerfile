#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Software/Cervejaria.Api/Cervejaria.Api.csproj", "Software/Cervejaria.Api/"]
COPY ["SofwareContext/Cervejaria.Repository/Cervejaria.Repository.csproj", "SofwareContext/Cervejaria.Repository/"]
COPY ["SofwareContext/Cervejaria.Domain/Cervejaria.Domain.csproj", "SofwareContext/Cervejaria.Domain/"]
COPY ["SofwareContext/Cervejaria.CrossCutting/Cervejaria.CrossCutting.csproj", "SofwareContext/Cervejaria.CrossCutting/"]
COPY ["SofwareContext/Cervejaria.Service/Cervejaria.Service.csproj", "SofwareContext/Cervejaria.Service/"]
RUN dotnet restore "Software/Cervejaria.Api/Cervejaria.Api.csproj"
COPY . .
WORKDIR "/src/Software/Cervejaria.Api"
RUN dotnet build "Cervejaria.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Cervejaria.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS="http://*:$PORT" dotnet Cervejaria.Api.dll