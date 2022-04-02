using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Service.Base;

namespace Cervejaria.Service.CommonServices
{
    public class InsumoService : ServiceBase, IInsumoService
    {
        public InsumoService(INotificator notificator) : base(notificator)
        {

        }
    }
}
