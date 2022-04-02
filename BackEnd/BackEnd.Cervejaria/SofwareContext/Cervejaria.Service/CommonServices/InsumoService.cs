using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Service.Base;

namespace Cervejaria.Service.CommonServices
{
    public class InsumoService : ServiceBase, IInsumoService
    {
        private readonly IInsumoRepository _repository;
        public InsumoService(INotificator notificator,
            IInsumoRepository repository) : base(notificator)
        {
            this._repository = repository;
        }
    }
}
