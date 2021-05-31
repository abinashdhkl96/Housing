using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class cityController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Butwal", "pokhara", "kathmandu","Devedaha","Nepaljung","shitalnagar" };
        }
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "Butwal";
        }
    }
}
