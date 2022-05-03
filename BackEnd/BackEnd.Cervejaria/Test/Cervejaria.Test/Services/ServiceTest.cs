using Cervejaria.Api.Controllers.V1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Cervejaria.Test.Services
{
    public class ServiceTest
    {
        [Fact]
        public void WhereTeste()
        {
            Wheretest();
        }

        [Fact]
        public void FirstTest()
        {
            firsttest();
        }
        public List<Operador> operadors { get; set; } = new List<Operador>()
        {
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(3,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
        };

        public Operador Wheretest()
        => operadors.Where(e => e.id == 3).First();

        public Operador firsttest()
        => operadors.First(e => e.id == 3);
    }
    public record Operador(int id, int list);
}

