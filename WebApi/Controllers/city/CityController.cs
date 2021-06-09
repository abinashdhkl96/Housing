using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebApi.Models.City;
using WebApi.Interface.unitofwork;
using WebApi.Dtos.city;
using System;
using AutoMapper;
using System.Collections.Generic;
using WebApi.Controllers.basecontroller;

namespace WebApi.Controllers.city
{
   
    public class CityController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CityController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }
      
        //GET api/city
        [HttpGet]
        public async Task<IActionResult> GetCitites()
        {
            throw new UnauthorizedAccessException();
            var cities = await uow.CityRespository.GetCitiesAsync();
            var CitiesDto = mapper.Map<IEnumerable<CityDtos>>(cities);
            //var CitiesDto = from c in cities
            //                select new CityDtos()
            //                {
            //                    Id = c.Id,
            //                    name = c.name
            //                };
            return Ok(CitiesDto);
        }
        //POST api/city

        [HttpPost("post")]
        public async Task<IActionResult> AddCity(CityDtos citydtos)
        {
           var city = mapper.Map<City>(citydtos);
           city.LastUpdatedBy = 1;
           city.LastUpated = DateTime.Now;
            //var city = new City { 
            //  name = citydtos.name,
            //   LastUpdatedBy=1,
            //   LastUpated= DateTime.Now
            //};
           
            uow.CityRespository.AddCity(city);
           await uow.SaveAsync();
            return Ok(city);

        }
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCities(int id, CityDtos citydtos)

        {
            if (id != citydtos.Id)
                return BadRequest("update not allowed");
            var cityFromdb = await uow.CityRespository.UpdateCity(id);
            if (cityFromdb == null)
                return BadRequest("updated are not allowed ");
            cityFromdb.LastUpdatedBy = 1;
            cityFromdb.LastUpated = DateTime.Now;
            mapper.Map(citydtos, cityFromdb);
            throw new Exception("Exception occure");
            await uow.SaveAsync();
            return Ok(200);
        }
        //[HttpPatch("update/{id}")]
        //public async Task<IActionResult> UpdateCitiesPatch(int id,JsonPatchDocument<City> cityTOPatch)
        //{
        //    var cityFromdb = await uow.CityRespository.UpdateCity(id);
        //    cityFromdb.LastUpdatedBy = 1;
        //    cityFromdb.LastUpated = DateTime.Now;
        //    cityTOPatch.ApplyTo(cityFromdb, ModelState);
        //    await uow.SaveAsync();
        //    return Ok(200);
        //}

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> RemoveCity(int id)
        {

            uow.CityRespository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }

      
    }

   
}

