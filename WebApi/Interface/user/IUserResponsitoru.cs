using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models.user;

namespace WebApi.Interface.user
{
  public  interface IUserResponsitoru
    {
        Task<User> Authenticate(string username, string password);
    }
}
