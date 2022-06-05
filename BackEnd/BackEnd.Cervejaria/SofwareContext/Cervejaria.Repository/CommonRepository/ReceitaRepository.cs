using System.Linq;
using System.Threading.Tasks;

using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Repository.Data;

using Microsoft.EntityFrameworkCore;

namespace Cervejaria.Repository.CommonRepository
{
    public class ReceitaRepository : Repository<Receita>, IReceitaRepository
    {
        public ReceitaRepository(Context context) : base(context)
        {
        }
        public override async Task<Receita> GetByIdAsync(int id)
        {
            return await DbSet.Select(e => new Receita()
            {
                Id = e.Id,
                Descricao = e.Descricao,
                Insumos = e.InsumoReceitas.Select(ir => new InsumoReceita()
                {
                    IdInsumo = ir.IdInsumo,
                    IdReceita = ir.IdReceita,
                    Insumo = ir.Insumo
                }.Insumo).ToList()
            }).Where(e => e.Id == id).FirstOrDefaultAsync();
        }
    }
}
