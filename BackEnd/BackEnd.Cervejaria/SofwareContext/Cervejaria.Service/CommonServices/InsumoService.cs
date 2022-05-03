using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Domain.Validations.Common;
using Cervejaria.Service.Base;
using Microsoft.Extensions.Logging;

namespace Cervejaria.Service.CommonServices
{
    public class InsumoService : Service<Insumo>, IInsumoService
    {
        public InsumoService(INotificator notificator, IRepository<Insumo> repositoy, ILogger logger) : base(notificator, repositoy, logger)
        {
            _validations = new InsumoValidation();
        }
    }
}
