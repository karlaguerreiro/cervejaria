using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Domain.Contracts.Service
{
    public interface IService<T> where T : class
    {
        Task<T> SaveAsync(T entity);
        Task<T> UpdateAsync(T entity);
        Task<T> GetByIdAsync(int id);
        Task<IEnumerable<T>> Get();
        Task Delete(int id);
    }
}
