using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Domain.Validations.Common;
using Cervejaria.Service.Base;
using Microsoft.Extensions.Logging;

namespace Cervejaria.Service.CommonServices
{
    public class ReceitaService : Service<Receita>, IReceitaService
    {
        public ReceitaService(INotificator notificador, IRepository<Receita> repository, ILogger logger) : base(notificador, repository, logger)
        {
            _validations = new ReceitaValidation();
        }
    }
}
