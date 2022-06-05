using AutoMapper;

using Cervejaria.CrossCutting.Interop.Dto;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class ReceitaMapper : Profile
    {
        public ReceitaMapper()
        {
            CreateMap<ReceitaViewModel, Receita>().ReverseMap();
            CreateMap<Receita, ReceitaDto>()
                .ForMember(dest => dest.Insumos, opt => opt.MapFrom(e => e.Insumos))
                .ReverseMap();
        }
    }
}
