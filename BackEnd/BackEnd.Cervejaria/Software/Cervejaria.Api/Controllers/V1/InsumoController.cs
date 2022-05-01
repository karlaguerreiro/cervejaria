using AutoMapper;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class InsumoController : MainController
    {
        private readonly IService<Insumo> _service;
        public InsumoController(INotificator notificator, IService<Insumo> service, IMapper mapper) : base(notificator, mapper)
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

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id) 
        {
            await _service.Delete(id);
            return CustomResponse();
        }

        public List<Operador> operadors { get; set; } = new List<Operador>() 
        { 
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(3,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
            new Operador(1,2),
        };

        public Operador Wheretest()
        => operadors.Where(e => e.id == 3).First();
        
        public Operador firsttest()
        => operadors.First(e => e.id == 3);
    }
    public record Operador(int id, int list);
}
