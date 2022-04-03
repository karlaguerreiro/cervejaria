using AutoMapper;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Models;
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

        protected bool IsValid()
        {
            return !_notificator.HasNotifications();
        }

        protected ActionResult CustomResponse(object result = null)
        {
            if (IsValid())
            {
                return Ok(new
                {
                    success = true,
                    data = result
                });
            }

            return BadRequest(new
            {
                success = false,
                errors = _notificator.GetNotifications().Select(n => n.Message)
            });
        }

        protected ActionResult CustomResponse(ModelStateDictionary modelState)
        {
            if (!modelState.IsValid) NotifyErrorModelInvalid(modelState);
            return CustomResponse();
        }

        protected void NotifyErrorModelInvalid(ModelStateDictionary modelState)
        {
            var erros = modelState.Values.SelectMany(e => e.Errors);
            foreach (var erro in erros)
            {
                var errorMsg = erro.Exception == null ? erro.ErrorMessage : erro.Exception.Message;
                NotifyError(errorMsg);
            }
        }

        protected void NotifyError(string mensagem)
        {
            _notificator.Handle(new Notification(mensagem));
        }
    }
}
