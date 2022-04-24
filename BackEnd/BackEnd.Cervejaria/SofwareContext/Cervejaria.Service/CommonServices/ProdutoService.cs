using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Validations.Common;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Service.Base;
using FluentValidation;

namespace Cervejaria.Service.CommonServices
{
    public class ProdutoService : Service<Produto>, IProdutoService
    {
        public ProdutoService(INotificator notificador, IRepository<Produto> repository) : base(notificador, repository)
        {
            _validations = new ProdutoValidation();
        }
    }
}
