using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Repository.Data;

namespace Cervejaria.Repository.CommonRepository
{
    public class ReceitaRepository : Repository<Receita>, IReceitaRepository
    {
        public ReceitaRepository(Context context) : base(context)
        {
        }
    }
}
