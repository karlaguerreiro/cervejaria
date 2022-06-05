using System.Threading.Tasks;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Repository.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Cervejaria.Repository.CommonRepository
{
    public class ProdutoRepository : Repository<Produto>, IProdutoRepository
    {
        public ProdutoRepository(Context context) : base(context)
        {

        }
        public override Task<Produto> GetByIdAsync(int id) =>
            DbSet.Include(e => e.Receita).Where(e => e.Id == id).FirstOrDefaultAsync();
        
    }
}
