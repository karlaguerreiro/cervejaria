using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cervejaria.Domain.Models
{
    public record Notification
    {
        public Notification(string message)
        {
            Message = message;
        }

        public string Message { get; private init; }
    }
}
