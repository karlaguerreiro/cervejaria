using AutoMapper;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.ViewModel.Business;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class ClienteFornecedorController : MainController
    {
        private readonly IService<ClienteFornecedor> _service;
        public ClienteFornecedorController(INotificator notificator, IService<ClienteFornecedor> service, IMapper mapper) : base(notificator, mapper)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ClienteFornecedorViewModel viewModel) =>
            CustomResponse(await _service.SaveAsync(_mapper.Map<ClienteFornecedor>(viewModel)));

        [HttpPut]
        public async Task<IActionResult> Put(ClienteFornecedorViewModel viewModel) =>
            CustomResponse(await _service.UpdateAsync(_mapper.Map<ClienteFornecedor>(viewModel)));

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) =>
            CustomResponse(_mapper.Map<ClienteFornecedorViewModel>(await _service.GetByIdAsync(id)));

        [HttpGet]
        public async Task<IActionResult> Get() =>
            CustomResponse(await _service.Get());

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return CustomResponse();
        }
    }
}
