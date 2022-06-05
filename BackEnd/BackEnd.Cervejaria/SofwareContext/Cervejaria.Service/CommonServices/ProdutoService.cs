using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Validations.Common;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Service.Base;
using FluentValidation;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Cervejaria.Domain.Contracts.CommonRepository;

namespace Cervejaria.Service.CommonServices
{
    public class ProdutoService : Service<Produto>, IProdutoService
    {
        private readonly IProdutoRepository _produtoRepository;
        public ProdutoService(INotificator notificador,
            IRepository<Produto> repository,
            ILogger logger,
            IProdutoRepository produtoRepository) : base(notificador, repository, logger)
        {
            _validations = new ProdutoValidation();
            _produtoRepository = produtoRepository;
        }

        public override async Task<Produto> GetByIdAsync(int id)
        {
            return await _produtoRepository.GetByIdAsync(id);
        }
    }
}
