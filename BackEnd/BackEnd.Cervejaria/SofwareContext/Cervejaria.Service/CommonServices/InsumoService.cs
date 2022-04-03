using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Domain.Validations.Common;
using Cervejaria.Service.Base;
using System.Threading.Tasks;

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

        public Task<Insumo> GetByIdAsync(int id)
        {
            return _repository.GetByIdAsync(id);
        }

        public async Task SaveAsync(Insumo insumo)
        {
            if (!IsValid(new InsumoValidation(), insumo)) return;

            if (!_notificador.HasNotifications())
                await _repository.SaveAsync(insumo);
        }
    }
}
