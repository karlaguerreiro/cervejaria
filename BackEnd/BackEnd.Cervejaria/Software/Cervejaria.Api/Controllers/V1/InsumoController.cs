using AutoMapper;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1")]
    [ApiController]
    public class InsumoController : MainController
    {
        private readonly IInsumoService _service;
        public InsumoController(INotificator notificator, IInsumoService service, IMapper mapper) : base(notificator, mapper)
        {
            this._service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(InsumoViewModel viewModel) =>
            CustomResponse(await _service.SaveAsync(_mapper.Map<Insumo>(viewModel)));

        [HttpPut]
        public async Task<IActionResult> Put(InsumoViewModel viewModel) =>
            CustomResponse(await _service.UpdateAsync(_mapper.Map<Insumo>(viewModel)));

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) =>
            CustomResponse(_mapper.Map<InsumoViewModel>(await _service.GetByIdAsync(id)));

        [HttpGet]
        public async Task<IActionResult> Get() =>
            CustomResponse(await _service.Get());
        
    }
}
