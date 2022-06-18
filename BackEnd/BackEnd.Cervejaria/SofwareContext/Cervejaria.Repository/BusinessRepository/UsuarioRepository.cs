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
        public UsuarioRepository(Context context) : base(context) { }


        public override async Task<List<Usuario>> GetAsync() =>
            await DbSet.Select(u => new Usuario()
            {
                CreatedAt = u.CreatedAt,
                DeletedAt = u.DeletedAt,
                NivelAcesso = u.NivelAcesso,
                UpdatedAt = u.UpdatedAt,
                Id = u.Id,
                NomeUsuario = u.NomeUsuario,
                Senha = u.Senha,
                InfoUsuarios = u.InfoUsuarios.Select(e => new InfoUsuario()
                {
                    Cargo = e.Cargo,
                    Contato = e.Contato,
                    Emprego = e.Emprego,
                    Endereco = e.Endereco
                }).ToList()
            }).ToListAsync();

        public override async Task<Usuario> GetByIdAsync(int id) =>
            await DbSet.Select(u => new Usuario()
            {
                CreatedAt = u.CreatedAt,
                DeletedAt = u.DeletedAt,
                NivelAcesso = u.NivelAcesso,
                UpdatedAt = u.UpdatedAt,
                Id = u.Id,
                NomeUsuario = u.NomeUsuario,
                Senha = u.Senha,
                InfoUsuarios = u.InfoUsuarios.Select(e => new InfoUsuario()
                {
                    Cargo = e.Cargo,
                    Contato = e.Contato,
                    Emprego = e.Emprego,
                    Endereco = e.Endereco
                }).ToList()
            }).FirstOrDefaultAsync(e => e.Id == id); 
    }
}
