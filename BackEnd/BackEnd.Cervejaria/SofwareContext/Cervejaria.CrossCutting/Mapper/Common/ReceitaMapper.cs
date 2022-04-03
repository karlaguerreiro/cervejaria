using AutoMapper;
using Cervejaria.CrossCutting.Interop.ViewModel.Common;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class ReceitaMapper : Profile
    {
        public ReceitaMapper()
        {
            CreateMap<ReceitaViewModel, Receita>();
        }
    }
}
