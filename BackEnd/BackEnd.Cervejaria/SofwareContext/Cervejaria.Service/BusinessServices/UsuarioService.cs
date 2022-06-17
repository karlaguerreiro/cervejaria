using Cervejaria.Domain.Business;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Repository.BusinessRepositoy;
using Cervejaria.Domain.Contracts;
using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cervejaria.Domain.Contracts.Service.BusinessServices;
using Cervejaria.Service.Base;

namespace Cervejaria.Service.BusinessServices;

public class UsuarioService : Service<Usuario>, IUsuarioService
{
    private readonly IUsuarioRepository _usuarioRepository;
    public UsuarioService(INotificator notificator, IRepository<Usuario> repositoy, ILogger logger, IUsuarioRepository usuarioRepository) : base(notificator, repositoy, logger)
    {
        _usuarioRepository = usuarioRepository;
    }

    public override async Task<Usuario> GetByIdAsync(int id)
    {
        return await _usuarioRepository.GetByIdAsync(id);
    }
}
