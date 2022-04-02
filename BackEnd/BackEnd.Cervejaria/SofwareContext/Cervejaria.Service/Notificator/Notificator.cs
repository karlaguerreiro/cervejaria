using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace Cervejaria.Service.Notificator
{
    public class Notificator : INotificator
    {
        private readonly List<Notification> _notifications;

        public Notificator()
        {
            _notifications = new List<Notification>();
        }

        public void Handle(Notification Notification)
        {
            _notifications.Add(Notification);
        }

        public List<Notification> GetNotifications()
        {
            return _notifications;
        }

        public bool HasNotifications()
        {
            return _notifications.Any();
        }
    }
}
