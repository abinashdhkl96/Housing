using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Controllers.basecontroller;
using WebApi.Dtos.user;
using WebApi.Interface.unitofwork;
using WebApi.Models.user;

namespace WebApi.Controllers.user
{
  
    public class UserAccountController : BaseController
    {
        private readonly IUnitOfWork uow;

        public UserAccountController(IUnitOfWork uow)
        {
            this.uow = uow;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDtos loginDtos)
        {
            var user = await uow.UserResponsitory.Authenticate(loginDtos.username, loginDtos.password);
            if(user == null)
            {
                return Unauthorized();

            }
            var LoginResp = new UserLoginResponseDtos();
            LoginResp.username = user.username;
            LoginResp.token = "Token generate";
            return Ok(LoginResp);
           
        }
    }
}
