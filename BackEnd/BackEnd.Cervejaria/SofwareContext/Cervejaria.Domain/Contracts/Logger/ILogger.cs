using System;

namespace Cervejaria.Domain.Contracts.Log
{
    public interface ILogger
    {
        void Log(string message, string action, Type type);
    }
}
