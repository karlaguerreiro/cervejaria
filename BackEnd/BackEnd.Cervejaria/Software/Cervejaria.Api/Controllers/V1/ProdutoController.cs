using AutoMapper;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class ProdutoController : MainController
    {
        private readonly IService<Produto> _service;
        public ProdutoController(INotificator notificator, IService<Produto> service, IMapper mapper) : base(notificator, mapper)
        {
            this._service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ProdutoViewModel viewModel) =>
            CustomResponse(await _service.SaveAsync(_mapper.Map<Produto>(viewModel)));

        [HttpPut]
        public async Task<IActionResult> Put(ProdutoViewModel viewModel) =>
            CustomResponse(await _service.UpdateAsync(_mapper.Map<Produto>(viewModel)));

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) =>
            CustomResponse(_mapper.Map<ProdutoViewModel>(await _service.GetByIdAsync(id)));

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
