using Cervejaria.Domain.Business;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.Repository.BusinessRepositoy;
using Cervejaria.Repository.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cervejaria.Repository.BusinessRepository
{
    public class ClienteFornecedorRepository : Repository<ClienteFornecedor>, IClienteFornecedorRepository
    {
        public ClienteFornecedorRepository(Context context) : base(context) {}

        public override async Task<ClienteFornecedor> GetByIdAsync(int id) =>
            await DbSet.AsNoTracking()
                .Include(e => e.Contato)
                .Include(e => e.Endereco)
                .Include(e => e.Insumos)
                .Where(e => e.Id == id).FirstOrDefaultAsync();

        public async Task<IEnumerable<ClienteFornecedor>> GetByType(int type) => 
            await DbSet
                .Include(e => e.Contato)
                .Include(e => e.Endereco)
                .Include(e => e.Insumos).Where(e => (int)e.Tipo == type).ToListAsync();
    }
}
