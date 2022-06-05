using Cervejaria.Domain.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Domain.Contracts.Service.CommonServices
{
    public interface IInsumoService : IService<Insumo>
    {
        Task<IEnumerable<Insumo>> GetByIdReceita(int id);
    }
}
