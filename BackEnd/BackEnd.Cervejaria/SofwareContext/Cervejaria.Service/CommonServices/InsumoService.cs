using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Domain.Validations.Common;
using Cervejaria.Service.Base;
using Microsoft.Extensions.Logging;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Service.CommonServices
{
    public class InsumoService : Service<Insumo>, IInsumoService
    {
        private readonly IInsumoRepository _insumoRepository;

        public InsumoService(INotificator notificator, IInsumoRepository repositoy, ILogger logger) : base(notificator, repositoy, logger)
        {
            _insumoRepository = repositoy;
            _validations = new InsumoValidation();
        }
        public async Task<IEnumerable<Insumo>> GetByIdReceita(int id) => await _insumoRepository.GetByIdReceita(id);
    }
}
