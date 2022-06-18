using Cervejaria.Domain.Business;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Repository.BusinessRepositoy;
using Cervejaria.Domain.Contracts.Service.BusinessServices;
using Cervejaria.Service.Base;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Service.BusinessServices;

public class UsuarioService : Service<Usuario>, IUsuarioService
{
    private readonly IUsuarioRepository _usuarioRepository;
    public UsuarioService(INotificator notificator, IRepository<Usuario> repositoy, ILogger logger, IUsuarioRepository usuarioRepository) : base(notificator, repositoy, logger)
    {
        _usuarioRepository = usuarioRepository;
    }

    public override async Task<Usuario> SaveAsync(Usuario entity)
    {
        var clienteFornecedor = await base.SaveAsync(entity);

        return await _usuarioRepository.GetByIdAsync((int)clienteFornecedor.Id);
    }

    public override async Task<Usuario> GetByIdAsync(int id)
    {
        return await _usuarioRepository.GetByIdAsync(id);
    }

    public override async Task<IEnumerable<Usuario>> Get()
    {
        return await _usuarioRepository.GetAsync();
    }
}
