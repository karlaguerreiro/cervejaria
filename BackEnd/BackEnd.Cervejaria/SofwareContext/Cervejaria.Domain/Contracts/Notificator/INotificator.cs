using FluentValidation.Results;
using System.Collections.Generic;

namespace Cervejaria.Domain.Contracts.Notificator
{
    public interface INotificator
    {
        bool HasNotifications();
        List<ValidationFailure> GetNotifications();
        void Handle(ValidationFailure notification);
    }
}
