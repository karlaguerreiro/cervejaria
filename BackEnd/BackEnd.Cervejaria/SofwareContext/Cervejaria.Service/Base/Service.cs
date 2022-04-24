﻿using Cervejaria.Domain.Base;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using FluentValidation;
using FluentValidation.Results;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Service.Base
{
    public class Service<T> : IService<T> where T : BaseEntity
    {
        protected readonly INotificator _notificador;
        protected readonly IRepository<T> _repository;
        public AbstractValidator<T> _validations;

        public Service(INotificator notificador, IRepository<T> repository)
        {
            _notificador = notificador;
            _repository = repository;
        }

        protected void Notify(ValidationResult validationResult) =>
            validationResult.Errors.ForEach(error => _notificador.Handle(error));

        protected virtual bool IsValid<TV>(TV validations, T entidade) where TV : AbstractValidator<T>
        {
            var validator = validations.Validate(entidade);

            if (validator.IsValid) return true;

            Notify(validator);

            return false;
        }

        public virtual async Task<T> GetByIdAsync(int id)
        {
            try 
            { 
                var result = await _repository.GetByIdAsync(id);

                if (result is null)
                    _notificador.Handle(new ValidationFailure(null, $"{typeof(T)} não encontrado!"));

                return result;
            }
            catch
            {
                throw;
            }
        }

        public virtual async Task<T> SaveAsync(T entity)
        {
            try
            {
                if (!_notificador.HasNotifications())
                    return await _repository.SaveAsync(entity);

                return await Task.FromResult<T>(null);
            }
            catch
            {
                throw;
            }
        }

        public virtual async Task<T> UpdateAsync(T entity)
        {
            try
            {
                if (!_notificador.HasNotifications())
                    return await _repository.UpdateAsync(entity);

                return await Task.FromResult<T>(null);
            }
            catch
            {
                throw;
            }
        }

        public virtual async Task<IEnumerable<T>> Get()
        {
            try
            {
                var result = await _repository.GetAsync();

                if (result is null)
                    _notificador.Handle(new ValidationFailure(null, $"{typeof(T)} não encontrado!"));

                return result;
            }
            catch
            {
                throw;
            }
        }

        public virtual async Task Delete(int id)
        {
            try
            {
                await _repository.DeleteAsync(id);
            }
            catch
            {
                throw;
            }
        }
    }
}
