using AutoMapper;
using Cervejaria.CrossCutting.Interop.Dto;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class InsumoMapper : Profile
    {
        public InsumoMapper()
        {
            CreateMap<InsumoViewModel, Insumo>();

            CreateMap<Insumo, InsumoDto>()
                .ForMember(dest => dest.DataCompra, opt => opt.MapFrom(e => e.DataCompra.Value.ToShortDateString()))
                .ForMember(dest => dest.Validade, opt => opt.MapFrom(e => e.Validade.Value.ToShortDateString()));
        }
    }
}
