using Cervejaria.Domain.Contracts.Notificator;
using FluentValidation.Results;
using System.Collections.Generic;
using System.Linq;

namespace Cervejaria.Service.Notificator
{
    public class Notificator : INotificator
    {
        private readonly ValidationResult _notifications;

        public Notificator()
        {
            _notifications = new ValidationResult();
        }

        public void Handle(ValidationFailure notification) =>
            _notifications.Errors.Add(notification);
        
        public List<ValidationFailure> GetNotifications() =>
            _notifications.Errors;
        
        public bool HasNotifications() =>
            _notifications.Errors.Any();
    }
}
