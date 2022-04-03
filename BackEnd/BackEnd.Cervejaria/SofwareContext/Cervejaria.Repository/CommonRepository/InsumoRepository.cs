using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Repository.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Cervejaria.Repository.CommonRepository
{
    public class InsumoRepository : Repository<Insumo>, IInsumoRepository
    {
        public InsumoRepository(Context context) : base(context)
        {
        }

        public override async Task<Insumo> GetByIdAsync(int id) =>
            await DbSet.AsNoTracking()
                .Include(e => e.Receitas)
                .Where(e => e.Id == id).FirstOrDefaultAsync();

        public override async Task<Insumo> SaveAsync(Insumo entity)
        {
            await DbSet.AddAsync(entity);
            return await this.GetByIdAsync(await SaveChangesAsync());
        }
    }
}
