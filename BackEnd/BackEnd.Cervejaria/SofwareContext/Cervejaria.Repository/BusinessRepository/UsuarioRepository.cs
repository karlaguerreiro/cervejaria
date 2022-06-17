using Cervejaria.Domain.Business;
using Cervejaria.Domain.Contracts.Repository.BusinessRepositoy;
using Cervejaria.Repository.Data;

using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cervejaria.Repository.BusinessRepository
{
    public class UsuarioRepository : Repository<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(Context context) : base(context) {}


        public override async Task<List<Usuario>> GetAsync()
        {
            return await DbSet.Include(e => e.InfoUsuarios)
                   .Include(e => e.InfoUsuarios.Select(e => new InfoUsuario()
                   {
                       Cargo = e.Cargo,
                       Contato = e.Contato,
                       Emprego = e.Emprego,
                       Endereco = e.Endereco
                   })).ToListAsync();

        }
    }
}
