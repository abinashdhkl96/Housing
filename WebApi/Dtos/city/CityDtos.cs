using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Dtos.city
{
    public class CityDtos
    {
        public int Id { get; set; }
        [Required (ErrorMessage ="Name is required")]
        [StringLength(50 , MinimumLength =2)]
        [RegularExpression(".*[a-zA-z]+.*",ErrorMessage ="Numberic are not allowed")]
        public string name { get; set; }
        public string country { get; set; }
    }
}
