﻿using Cervejaria.Domain.Common;
using Cervejaria.Domain.Contracts;
using Cervejaria.Domain.Contracts.Notificator;
using Cervejaria.Domain.Contracts.Service.CommonServices;
using Cervejaria.Domain.Validations.Common;
using Cervejaria.Service.Base;

namespace Cervejaria.Service.CommonServices
{
    public class InsumoService : Service<Insumo>, IInsumoService
    {
        public InsumoService(INotificator notificator, IRepository<Insumo> repositoy) : base(notificator, repositoy)
        {
            _validations = new InsumoValidation();
        }
    }
}
