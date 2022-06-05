using Cervejaria.Domain.Common;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Domain.Contracts.CommonRepository
{
    public interface IInsumoRepository : IRepository<Insumo>
    {
        Task<IEnumerable<Insumo>> GetByIdReceita(int id);
    }
}
