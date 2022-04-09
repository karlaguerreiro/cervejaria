using Cervejaria.Domain.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Domain.Contracts.Service.CommonServices
{
    public interface IInsumoService
    {
        Task<Insumo> SaveAsync(Insumo insumo);
        Task<Insumo> UpdateAsync(Insumo insumo);
        Task<Insumo> GetByIdAsync(int id);
        Task<IEnumerable<Insumo>> Get();
    }
}
