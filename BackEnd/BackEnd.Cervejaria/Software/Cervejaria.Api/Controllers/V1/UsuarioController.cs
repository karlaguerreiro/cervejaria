using AutoMapper;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.ViewModel.Business;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class UsuarioController : MainController
    {
        private readonly IService<Usuario> _service;
        public UsuarioController(INotificator notificator, IService<Usuario> service, IMapper mapper) : base(notificator, mapper)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(UsuarioViewModel viewModel) =>
            CustomResponse(_mapper.Map<Usuario>(await _service.SaveAsync(_mapper.Map<Usuario>(viewModel))));

        [HttpPut]
        public async Task<IActionResult> Put(UsuarioViewModel viewModel) =>
            CustomResponse(await _service.UpdateAsync(_mapper.Map<Usuario>(viewModel)));

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) =>
            CustomResponse(_mapper.Map<Usuario>(await _service.GetByIdAsync(id)));

        [HttpGet]
        public async Task<IActionResult> Get() =>
            CustomResponse(_mapper.Map<IEnumerable<Usuario>>(await _service.Get()));

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return CustomResponse();
        }
    }
}
