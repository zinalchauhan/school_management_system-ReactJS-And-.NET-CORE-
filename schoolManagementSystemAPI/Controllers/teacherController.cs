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
        classTeacherMaster_tableDB cltechObj = new();
        studentMaster_tableDB studentObj = new();
        attendenceMaster_tableDB attendenceObj = new();
        leaveRequestMaster_tableDB leaveObj = new();
        noticeMaster_tableDB noticeObj = new();
        remarkMaster_tableDB remarkObj = new();

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

        [HttpGet("checkClassTeacher/{techid}")]
        public JsonResult checkClassTeacher(int techid)
        {

            classTeacherMaster_tableEntities cltech = cltechObj.isClassTeacher(techid);

            if (cltech.ClassTeacherIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = cltech });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("classStudList/{id}")]
        public JsonResult classStudList(int id)
        {

            List<studentMaster_tableEntities> stud = studentObj.classWiseStud(id);

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

        [HttpGet("classLeaveList/{id}")]
        public JsonResult classLeaveList(int id)
        {

            List<leaveRequestMaster_tableEntities> leave = leaveObj.getLeaveByClass(id);

            if (leave.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = leave });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertAttendence")]
        public JsonResult insertAttendence(attendenceMaster_tableEntities attendenceEnt)
        {
            attendenceMaster_tableEntities authEnt = attendenceObj.OnGetListdtAttendence(attendenceEnt.StudentIdFk, attendenceEnt.AttendenceDate);
            int result = 0;
            if (authEnt.AttendenceIdPk != 0)
            {
                authEnt.StudentIdFk = attendenceEnt.StudentIdFk;
                authEnt.AttendenceStatus = attendenceEnt.AttendenceStatus;
                result = attendenceObj.OnUpdate(authEnt);
            }
            else
            {
                result = attendenceObj.OnInsert(attendenceEnt);
            }

            if (result != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpGet("noticeList/{med}")]
        public JsonResult noticeList(int med)
        {

            List<noticeMaster_tableEntities> notice = noticeObj.OnGetTeacherNoticeList(med);

            if (notice.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = notice });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }
    }
}
