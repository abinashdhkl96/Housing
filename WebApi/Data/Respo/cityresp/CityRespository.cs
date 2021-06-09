using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data.DC;
using WebApi.Interface.city;
using WebApi.Models.City;

namespace WebApi.Data.Respo.cityresp
{
    public class CityRespository : ICityRespository
    {
        private readonly DataContext dc;

        public CityRespository(DataContext dc)
        {
            this.dc = dc;
        }

        public void AddCity(City city)
        {
            dc.Cities.AddAsync(city);
        }

        public void DeleteCity(int CityId)
        {
            var city = dc.Cities.Find(CityId);
            dc.Cities.Remove(city);
        }

       

        public async Task<IEnumerable<City>> GetCitiesAsync()
        {
            return await dc.Cities.ToListAsync();
        }

        public async Task<City> UpdateCity(int id)
        {
            return await dc.Cities.FindAsync(id);
        }
    }
}
