using AutoMapper;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class ProdutoMapper : Profile
    {
        public ProdutoMapper()
        {
            CreateMap<ProdutoViewModel, Produto>().ReverseMap();
        }
    }
}
