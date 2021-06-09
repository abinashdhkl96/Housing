using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Dtos.city;
using WebApi.Models.City;

namespace WebApi.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City, CityDtos>().ReverseMap();
            //CreateMap<CityDtos, City>();
        }
    }
}
