using AutoMapper;
using Cervejaria.Api.Config.CustomRequests;
using Cervejaria.Api.Controllers.Main;
using Cervejaria.CrossCutting.Interop.Dto;
using Cervejaria.CrossCutting.Interop.ViewModel.Business;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.BusinessServices;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Filters;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cervejaria.Api.Controllers.V1
{
    [Route("api/V1/[controller]")]
    [ApiController]
    public class ClienteFornecedorController : MainController
    {
        private readonly IClienteFornecedorService _service;
        public ClienteFornecedorController(INotificator notificator, IClienteFornecedorService service, IMapper mapper) : base(notificator, mapper)
        {
            _service = service;
        }

        /// <summary>
        /// Salva o objeto 
        /// </summary>
        /// <param name="viewModel"></param>
        /// <returns></returns>
        [HttpPost]
        [SwaggerRequestExample(typeof(CFViewModelPostExample), typeof(CFViewModelPostExample))]
        public async Task<IActionResult> Post(ClienteFornecedorViewModel viewModel) =>
            CustomResponse(_mapper.Map<ClienteFornecedorDto>(await _service.SaveAsync(_mapper.Map<ClienteFornecedor>(viewModel))));

        /// <summary>
        /// Altera o objeto 
        /// </summary>
        /// <param name="viewModel"></param>
        /// <returns></returns>     
        [HttpPut]
        [SwaggerRequestExample(typeof(CFViewModelPostExample), typeof(CFViewModelPostExample))]
        public async Task<IActionResult> Put(ClienteFornecedorViewModel viewModel) =>
            CustomResponse(await _service.UpdateAsync(_mapper.Map<ClienteFornecedor>(viewModel)));

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id) =>
            CustomResponse(_mapper.Map<ClienteFornecedorDto>(await _service.GetByIdAsync(id)));

        [HttpGet]
        public async Task<IActionResult> Get() =>
            CustomResponse(_mapper.Map<IEnumerable<ClienteFornecedorDto>>(await _service.Get()));

        [HttpGet("type/{type:int}")]
        public async Task<IActionResult> GetByType(int type) =>
            CustomResponse(_mapper.Map<IEnumerable<ClienteFornecedorDto>>(await _service.GetByType(type)));

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return CustomResponse();
        }
    }

}
