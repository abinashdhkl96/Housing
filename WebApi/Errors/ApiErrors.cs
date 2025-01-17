﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace WebApi.Errors
{
    public class ApiErrors
    {
        public ApiErrors(int errorCode, string errrorMessage, string errorDetails=null)
        {
            ErrorCode = errorCode;
            ErrrorMessage = errrorMessage;
            ErrorDetails = errorDetails;
        }

        public int ErrorCode { get; set; }
        public string ErrrorMessage { get; set; }
        public string ErrorDetails { get; set; }
        public override string ToString()
        {
            return JsonSerializer.Serialize(this);
        }
    }
}
