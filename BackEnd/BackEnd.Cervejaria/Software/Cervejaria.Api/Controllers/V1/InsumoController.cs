using AutoMapper;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.Dto;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class InsumoController : MainController
    {
        private readonly IInsumoService _insumoService;

        public InsumoController(INotificator notificator,IMapper mapper, IInsumoService insumoService) : base(notificator, mapper)
        {
            this._insumoService = insumoService;
            _insumoService = insumoService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(InsumoViewModel viewModel) =>
            CustomResponse(_mapper.Map<InsumoDto>(await _insumoService.SaveAsync(_mapper.Map<Insumo>(viewModel))) );

        [HttpPut]
        public async Task<IActionResult> Put(InsumoViewModel viewModel) =>
            CustomResponse(_mapper.Map<InsumoDto>(await _insumoService.UpdateAsync(_mapper.Map<Insumo>(viewModel))));


        [HttpGet("byReceita/{id:int}")]
        public async Task<IActionResult> GetByIdReceita(int id) =>
            CustomResponse(_mapper.Map<IEnumerable<InsumoDto>>(await _insumoService.GetByIdReceita(id)));
        
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) =>
            CustomResponse(_mapper.Map<InsumoDto>(await _insumoService.GetByIdAsync(id)));

        [HttpGet]
        public async Task<IActionResult> Get() =>
            CustomResponse(_mapper.Map<IEnumerable<InsumoDto>>(await _insumoService.Get()));

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _insumoService.Delete(id);
            return CustomResponse();
        }
    }
}
