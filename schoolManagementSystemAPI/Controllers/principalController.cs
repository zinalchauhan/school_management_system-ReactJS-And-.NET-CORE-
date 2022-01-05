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
    public class principalController : ControllerBase
    {

        principalMaster_tableDB principalObj = new();
        studentMaster_tableDB studObj = new();
        remarkMaster_tableDB remarkObj = new();
        leaveRequestMaster_tableDB leaveObj = new();

        [HttpGet("principalList/{id}")]
        public JsonResult principalList(int id)
        {

            principalMaster_tableEntities pr = principalObj.OnGetData(id);

            if (pr.PrincipalIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = pr });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("classStudList/{id}")]
        public JsonResult classStudList(int id)
        {

            List<studentMaster_tableEntities> stud = studObj.classWiseStud(id);

            if (stud.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = stud });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpPost("insertRemarkList")]

        public JsonResult insertRemarkList(remarkMaster_tableEntities remark)
        {

            int result = remarkObj.OnInsert(remark);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = remark });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("leaveRequestList")]
        public JsonResult leaveRequestList()
        {

            List<leaveRequestMaster_tableEntities> leave = leaveObj.OnGetListTeacher();

            if (leave.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = leave });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateLeaveReqList")]

        public JsonResult updateLeaveReqList(leaveRequestMaster_tableEntities leave)
        {

            int result = leaveObj.OnUpdate(leave);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

    }
}
