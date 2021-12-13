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
    public class teacherController : ControllerBase
    {
        teacherMaster_tableDB techObj = new();

        [HttpGet("teacherList/{id}")]
        public JsonResult teacherList(int id)
        {

            teacherMaster_tableEntities tech = techObj.OnGetData(id);

            if (tech.TeacherIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = tech });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }
    }
}
