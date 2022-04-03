using Cervejaria.Domain.Common;
using System.Threading.Tasks;

namespace Cervejaria.Domain.Contracts.Service.CommonServices
{
    public interface IInsumoService
    {
        Task SaveAsync(Insumo insumo);
        Task<Insumo> GetByIdAsync(int id);
    }
}
