using AutoMapper;
using Cervejaria.Domain.Contracts.Notificator;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Linq;

namespace Cervejaria.Api.Controllers.Main
{
    [ApiController]
    public abstract class MainController : ControllerBase
    {
        private readonly INotificator _notificator;
        protected readonly IMapper _mapper;
        protected MainController(INotificator notificator, IMapper mapper)
        {
            _mapper = mapper;
            _notificator = notificator;
        }

        protected bool IsValid() =>
            !_notificator.HasNotifications();
        
        protected ActionResult CustomResponse(object result = null) =>
            IsValid() ? Ok(new { success = true, data = result}) :
             BadRequest(new { success = false, errors = _notificator.GetNotifications().Select(n => n.ErrorMessage) });
    }
}
