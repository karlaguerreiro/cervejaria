using AutoMapper;
using Cervejaria.CrossCutting.Interop.ViewModel.Business;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class ClienteFornecedorMapper : Profile
    {
        public ClienteFornecedorMapper()
        {
            CreateMap<ClienteFornecedorViewModel, ClienteFornecedor>().ReverseMap();
            CreateMap<ContatoViewModel, Contato>().ReverseMap();
            CreateMap<EnderecoViewModel, Endereco>().ReverseMap();
            CreateMap<InfoUsuarioViewModel, InfoUsuario>().ReverseMap();
        }
    }
}
