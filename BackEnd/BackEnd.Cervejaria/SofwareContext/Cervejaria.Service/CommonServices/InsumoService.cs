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

        public async Task<Insumo> GetByIdAsync(int id)
        {
            var result = await _repository.GetByIdAsync(id);

            if (result is null)
                _notificador.Handle(new FluentValidation.Results.ValidationFailure(null, "Insumo não encontrado!"));

            return result;
        }

        public async Task<Insumo> SaveAsync(Insumo insumo)
        {
            if (!IsValid(new InsumoValidation(), insumo)) return null;

            if (!_notificador.HasNotifications())
                return await _repository.SaveAsync(insumo);

            return null;
        }
    }
}
