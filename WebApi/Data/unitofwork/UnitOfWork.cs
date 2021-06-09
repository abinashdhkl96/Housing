using System.Threading.Tasks;
using WebApi.Data.DC;
using WebApi.Data.Respo.cityresp;
using WebApi.Data.Respo.user;
using WebApi.Interface.city;
using WebApi.Interface.unitofwork;
using WebApi.Interface.user;

namespace WebApi.Data.unitofwork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;

        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
        }
        public ICityRespository CityRespository => new CityRespository(dc);

        IUserResponsitoru IUnitOfWork.UserResponsitory =>  new UserResponsitory(dc);

        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}
