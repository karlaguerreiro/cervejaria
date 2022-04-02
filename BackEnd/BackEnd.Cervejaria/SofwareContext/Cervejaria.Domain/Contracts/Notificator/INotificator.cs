using Cervejaria.Domain.Models;
using System.Collections.Generic;

namespace Cervejaria.Domain.Contracts.Notificator
{
    public interface INotificator
    {
        bool HasNotifications();
        List<Notification> GetNotifications();
        void Handle(Notification notificacao);
    }
}
