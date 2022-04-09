using AutoMapper;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class InsumoReceitaMapper : Profile
    {
        public InsumoReceitaMapper()
        {
            CreateMap<InsumoReceitaViewModel, InsumoReceita>().ReverseMap();
        }
    }
}
