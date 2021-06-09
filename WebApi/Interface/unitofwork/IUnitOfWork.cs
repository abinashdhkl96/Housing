using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Interface.city;
using WebApi.Interface.user;

namespace WebApi.Interface.unitofwork
{
   public interface IUnitOfWork
    {
        ICityRespository  CityRespository { get;  }
        IUserResponsitoru UserResponsitory { get; }
        Task<bool> SaveAsync();
    }
}
