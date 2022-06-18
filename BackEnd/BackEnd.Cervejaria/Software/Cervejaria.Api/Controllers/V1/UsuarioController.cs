using AutoMapper;

using Cervejaria.Api.Config.CustomRequests;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.Dto;
using Cervejaria.CrossCutting.Interop.ViewModel.Business;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using Cervejaria.Domain.Contracts.Service.BusinessServices;
using Microsoft.AspNetCore.Mvc;

using Swashbuckle.AspNetCore.Filters;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class UsuarioController : MainController
    {
        private readonly IUsuarioService _usuarioService;
        private readonly IService<Usuario> _service;
        public UsuarioController(INotificator notificator, IService<Usuario> service, IMapper mapper, IUsuarioService usuarioService) : base(notificator, mapper)
        {
            _service = service;
            _usuarioService = usuarioService;
        }

        [HttpPost]
        [SwaggerRequestExample(typeof(UViewModelPostExample), typeof(UViewModelPostExample))]
        public async Task<IActionResult> Post(UsuarioViewModel viewModel) =>
            CustomResponse(_mapper.Map<UsuarioDto>(await _service.SaveAsync(_mapper.Map<Usuario>(viewModel))));

        [HttpPut]
        [SwaggerRequestExample(typeof(UViewModelPostExample), typeof(UViewModelPostExample))]
        public async Task<IActionResult> Put(UsuarioViewModel viewModel) =>
            CustomResponse(await _service.UpdateAsync(_mapper.Map<Usuario>(viewModel)));

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) =>
            CustomResponse(_mapper.Map<UsuarioDto>(await _service.GetByIdAsync(id)));

        [HttpGet]
        public async Task<IActionResult> Get() =>
            CustomResponse(_mapper.Map<IEnumerable<UsuarioDto>>(await _usuarioService.Get()));

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return CustomResponse();
        }
    }
}
