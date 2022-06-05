using Cervejaria.Domain.Business;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Repository.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
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
                .Where(e => e.Id == id).FirstOrDefaultAsync();

        public async Task<IEnumerable<Insumo>> GetByIdReceita(int id)
        {
            return await DbSet.Include(e => e.InsumoReceitas).Select(e => new Insumo()
            {
                Id = e.Id,
                DataCompra = e.DataCompra,
                Nome = e.Nome,
                PrecoUnit = e.PrecoUnit,
                UndMedida = e.UndMedida,
                Validade = e.Validade,
                IdClienteFornecedor = e.IdClienteFornecedor,
                InsumoReceitas = e.InsumoReceitas.Select(ir => new InsumoReceita()
                {
                    IdReceita = ir.IdReceita
                }).ToList()
            }).Where(e => e.InsumoReceitas.Any(e => e.IdReceita == id)).ToListAsync();
        }
    }
}
