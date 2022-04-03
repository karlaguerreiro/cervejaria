using Cervejaria.Domain.Base;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Models;
using FluentValidation;
using FluentValidation.Results;

namespace Cervejaria.Service.Base
{
    public abstract class ServiceBase
    {
        protected readonly INotificator _notificador;

        protected ServiceBase(INotificator notificador)
        {
            _notificador = notificador;
        }

        protected void Notify(ValidationResult validationResult) =>
            validationResult.Errors.ForEach(error => _notificador.Handle(error));

        protected bool IsValid<TV, TE>(TV validacao, TE entidade) where TV : AbstractValidator<TE> where TE : BaseEntity
        {
            var validator = validacao.Validate(entidade);

            if (validator.IsValid) return true;

            Notify(validator);

            return false;
        }
    }
}
