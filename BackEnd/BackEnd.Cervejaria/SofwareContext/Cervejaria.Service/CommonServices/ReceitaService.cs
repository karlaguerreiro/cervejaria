using System.Threading.Tasks;

using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.CommonRepository;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Domain.Validations.Common;
using Cervejaria.Service.Base;
using Microsoft.Extensions.Logging;

namespace Cervejaria.Service.CommonServices
{
    public class ReceitaService : Service<Receita>, IReceitaService
    {
        private readonly IReceitaRepository _receitaRepository;
        public ReceitaService(INotificator notificador, IRepository<Receita> repository, ILogger logger, IReceitaRepository receitaRepository) : base(notificador, repository, logger)
        {
            _validations = new ReceitaValidation();
            _receitaRepository = receitaRepository;
            
        }

        public override async Task<Receita> GetByIdAsync(int id) => await _receitaRepository.GetByIdAsync(id);
    }
}
