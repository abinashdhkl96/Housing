using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebApi.Errors;

namespace WebApi.MiddleWares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger<ExceptionMiddleware> logger;
        private readonly IHostEnvironment env;

        public ExceptionMiddleware(RequestDelegate next,ILogger<ExceptionMiddleware>logger,IHostEnvironment env)
        {
            this.next = next;
            this.logger = logger;
            this.env = env;
        }
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);

            }
            catch (Exception ex)
            {
                ApiErrors response;
                HttpStatusCode statuscode = HttpStatusCode.InternalServerError;
                string message;
                var exceptionType = ex.GetType();
                if (exceptionType == typeof(UnauthorizedAccessException))
                {
                    statuscode = HttpStatusCode.Forbidden;
                    message = "you are unauthorize";

                }
                else
                {
                    statuscode = HttpStatusCode.InternalServerError;
                    message = "some Internal server  error occured";
                }
                if (env.IsDevelopment())
                {
                    response = new ApiErrors((int)statuscode,message,ex.StackTrace.ToString());

                }
                else
                {
                    response = new ApiErrors((int)statuscode, message);

                }
                logger.LogError(ex, ex.Message);
                context.Response.StatusCode = (int)statuscode;
                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(response.ToString());

            }
        }
    }
}
