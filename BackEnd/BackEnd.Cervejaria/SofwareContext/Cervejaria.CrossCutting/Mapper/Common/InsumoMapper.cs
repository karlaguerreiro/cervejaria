using AutoMapper;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class InsumoMapper : Profile
    {
        public InsumoMapper()
        {
            CreateMap<InsumoViewModel, Insumo>().ReverseMap();
        }
    }
}
