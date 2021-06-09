using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models.City;

namespace WebApi.Interface.city
{
  public  interface ICityRespository
    {
        Task<IEnumerable<City>> GetCitiesAsync();
       void AddCity(City city);
        void DeleteCity(int CityId);
        Task<City> UpdateCity(int id);
        

    }
}
