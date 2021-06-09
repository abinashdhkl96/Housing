using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models.City
{
    public class City 
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string country { get; set; }
        public DateTime LastUpated { get; set; }
        public int LastUpdatedBy { get; set; }
    }
}
