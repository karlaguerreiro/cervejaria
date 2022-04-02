using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Repository.Data;

namespace Cervejaria.Repository.CommonRepository
{
    public class InsumoRepository : Repository<Insumo>, IInsumoRepository
    {
        public InsumoRepository(Context context) : base(context)
        {

        }
    }
}
