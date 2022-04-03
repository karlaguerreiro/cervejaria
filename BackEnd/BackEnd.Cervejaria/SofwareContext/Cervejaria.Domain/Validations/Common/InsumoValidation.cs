using Cervejaria.Domain.Common;
using FluentValidation;

namespace Cervejaria.Domain.Validations.Common
{
    public class InsumoValidation : AbstractValidator<Insumo>
    {
        public InsumoValidation()
        {
            RuleFor(f => f.Nome)
                .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido")
                .Length(2, 100)
                .WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");
        }
    }
}
