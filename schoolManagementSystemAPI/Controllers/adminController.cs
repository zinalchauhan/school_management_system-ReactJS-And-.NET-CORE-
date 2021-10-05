using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace schoolManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class adminController : ControllerBase
    {
        stateMaster_tableDB stateObj = new();
        cityMaster_tableDB cityObj = new();

        [HttpGet("stateList")]
        public JsonResult stateList()
        {

            List<stateMaster_tableEntities> states = stateObj.OnGetListdt();

            if (states.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = states });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("cityList/{stateId}")]
        public JsonResult cityList(int stateId)
        {

            List<cityMaster_tableEntities> cities = cityObj.OnGetListdt(stateId);

            if (cities.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = cities });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }
    }
}
