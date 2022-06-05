using Cervejaria.Domain.Base;
using Cervejaria.Domain.Contracts;
using Cervejaria.Repository.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Cervejaria.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity, new()
    {
        protected readonly Context Db;
        protected readonly DbSet<TEntity> DbSet;

        public Repository(Context db)
        {
            Db = db;
            DbSet = db.Set<TEntity>();
        }

        public async Task<IEnumerable<TEntity>> GetByExpressionAsync(Expression<Func<TEntity, bool>> predicate) =>
            await DbSet.AsNoTracking().Where(predicate).ToListAsync();

        public virtual async Task<TEntity> GetByIdAsync(int id) =>
            await DbSet.AsNoTracking().Where(e => e.Id == id).FirstOrDefaultAsync();

        public virtual async Task<List<TEntity>> GetAsync() =>
            await DbSet.ToListAsync();

        public virtual async Task<TEntity> SaveAsync(TEntity entity)
        {
            await DbSet.AddAsync(entity);
            await SaveChangesAsync();
            return await this.GetByIdAsync((int)entity.Id);
        }

        public virtual async Task<TEntity> UpdateAsync(TEntity entity)
        {
            DbSet.Update(entity);
            await SaveChangesAsync();
            return await this.GetByIdAsync((int)entity.Id);
        }

        public virtual async Task DeleteAsync(int id)
        {
            DbSet.Remove(new TEntity { Id = id });
            await SaveChangesAsync();
        }

        public async Task<int> SaveChangesAsync()
        {
            return await Db.SaveChangesAsync();
           
        }

        public void Dispose() 
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing) =>
            Db?.Dispose();
    }
}
