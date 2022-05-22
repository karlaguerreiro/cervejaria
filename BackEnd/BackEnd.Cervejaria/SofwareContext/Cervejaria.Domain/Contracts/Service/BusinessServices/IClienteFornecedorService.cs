using Cervejaria.Domain.Business;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Domain.Contracts.Service.BusinessServices
{
    public interface IClienteFornecedorService : IService<ClienteFornecedor>
    {
        Task<IEnumerable<ClienteFornecedor>> GetByType(int type);
    }
}
