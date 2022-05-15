using Cervejaria.Domain.Business;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Domain.Contracts.Repository.BusinessRepositoy
{
    public interface IClienteFornecedorRepository : IRepository<ClienteFornecedor>
    {
        Task<IEnumerable<ClienteFornecedor>> GetByType(int type);
    }
}
