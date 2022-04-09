using AutoMapper;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class InsumoReceitaViewModel : Profile
    {
        public InsumoReceitaViewModel()
        {
            CreateMap<InsumoReceitaViewModel, InsumoReceita>().ReverseMap();
        }
    }
}
