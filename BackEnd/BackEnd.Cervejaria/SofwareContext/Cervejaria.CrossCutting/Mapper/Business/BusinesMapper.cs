using AutoMapper;
using Cervejaria.CrossCutting.Interop.Dto;
using Cervejaria.CrossCutting.Interop.ViewModel.Business;
using Cervejaria.Domain.Business;
using Cervejaria.Domain.Common;

namespace Cervejaria.CrossCutting.Mapper.Common
{
    public class BusinesMapper : Profile
    {
        public BusinesMapper()
        {
            CreateMap<ClienteFornecedorViewModel, ClienteFornecedor>().ReverseMap();
            CreateMap<ClienteFornecedor, ClienteFornecedorDto>()
                .ForMember(dest => dest.Contato1, opt => opt.MapFrom(e => e.Contato.Contato1))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(e => e.Contato.Email))
                .ForMember(dest => dest.Telefone, opt => opt.MapFrom(e => e.Contato.Telefone))
                .ForMember(dest => dest.Cep, opt => opt.MapFrom(e => e.Endereco.Cep))
                .ForMember(dest => dest.Complemento, opt => opt.MapFrom(e => e.Endereco.Complemento))
                .ForMember(dest => dest.Numero, opt => opt.MapFrom(e => e.Endereco.Numero))
                .ReverseMap();

            CreateMap<ContatoViewModel, Contato>().ReverseMap();
            CreateMap<EnderecoViewModel, Endereco>().ReverseMap();
            CreateMap<InfoUsuarioViewModel, InfoUsuario>().ReverseMap();
            CreateMap<EmpregoAnteriorViewModel, EmpregoAnterior>().ReverseMap();
            CreateMap<CargoViewModel, Cargo>().ReverseMap();
            CreateMap<UsuarioViewModel, Usuario>().ReverseMap();
            CreateMap<Usuario, UsuarioDto>().ReverseMap();
        }
    }
}
