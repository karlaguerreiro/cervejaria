using Cervejaria.Domain.Business;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Repository.BusinessRepositoy;
using Cervejaria.Domain.Contracts.Service.BusinessServices;
using Cervejaria.Service.Base;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Service.BusinessServices
{
    public class ClienteFornecedorService : Service<ClienteFornecedor>, IClienteFornecedorService
    {
        private readonly IClienteFornecedorRepository _clienteFornecedorRepository;
        public ClienteFornecedorService(INotificator notificator, IRepository<ClienteFornecedor> repositoy, ILogger logger, IClienteFornecedorRepository clienteFornecedorRepository) : base(notificator, repositoy, logger)
        {
            _clienteFornecedorRepository = clienteFornecedorRepository;
        }

        public override async Task<ClienteFornecedor> SaveAsync(ClienteFornecedor entity)
        {
            var clienteFornecedor = await base.SaveAsync(entity);

            return await _clienteFornecedorRepository.GetByIdAsync((int)clienteFornecedor.Id);
        }
        public override async Task<ClienteFornecedor> GetByIdAsync(int id)
        {
            return await _clienteFornecedorRepository.GetByIdAsync(id);
        }

        public async Task<IEnumerable<ClienteFornecedor>> GetByType(int type)
        {
            return await _clienteFornecedorRepository.GetByType(type);
        }
    }
}
