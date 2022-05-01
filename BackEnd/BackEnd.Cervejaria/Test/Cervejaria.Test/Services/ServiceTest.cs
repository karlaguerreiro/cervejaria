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
            var controller = new InsumoController(null, null, null);

            controller.Wheretest();
        }

        [Fact]
        public void FirstTest()
        {
            var controller = new InsumoController(null, null, null);

            controller.firsttest();
        }
    }
}
