using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data.DC;
using WebApi.Interface.user;
using WebApi.Models.user;

namespace WebApi.Data.Respo.user
{
    public class UserResponsitory : IUserResponsitoru
    {
        private readonly DataContext dc;

        public UserResponsitory(DataContext dc)
        {
            this.dc = dc;
        }
        public async Task<User> Authenticate(string username, string password)
        {
            return await dc.Users.FirstOrDefaultAsync(x => x.username == username && x.password == password);
            
        }
    }
}
