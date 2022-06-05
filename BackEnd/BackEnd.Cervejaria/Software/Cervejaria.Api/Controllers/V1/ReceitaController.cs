using AutoMapper;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.Dto;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using Cervejaria.Domain.Contracts.Service.CommonServices;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class ReceitaController : MainController
    {
        private readonly IReceitaService _service;
        public ReceitaController(INotificator notificator, IReceitaService service, IMapper mapper) : base(notificator, mapper)
        {
            this._service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ReceitaViewModel viewModel) =>
            CustomResponse(_mapper.Map<ReceitaDto>(await _service.SaveAsync(_mapper.Map<Receita>(viewModel))));

        [HttpPut]
        public async Task<IActionResult> Put(ReceitaViewModel viewModel) =>
            CustomResponse(await _service.UpdateAsync(_mapper.Map<Receita>(viewModel)));

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) =>
            CustomResponse(_mapper.Map<ReceitaDto>(await _service.GetByIdAsync(id)));

        [HttpGet]
        public async Task<IActionResult> Get() =>
            CustomResponse(_mapper.Map<IEnumerable<ReceitaDto>>(await _service.Get()));

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return CustomResponse();
        }
    }
}
