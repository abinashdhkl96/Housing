using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Dtos.user
{
    public class UserLoginResponseDtos
    {
        public string username { get; set; }
        public string token { get; set; }
    }
}
