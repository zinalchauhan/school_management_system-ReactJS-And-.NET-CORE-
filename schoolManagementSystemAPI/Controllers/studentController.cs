using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;

namespace schoolManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class studentController : ControllerBase
    {

        remarkMaster_tableDB remarkObj = new();
        subjectTeacherMaster_tableDB subtechObj = new();
        studentMaster_tableDB studObj = new();
        noticeMaster_tableDB noticeObj = new();

        [HttpGet("remarkList/{studentId}")]
        public JsonResult remarkList(int studentId)
        {

            List<remarkMaster_tableEntities> remark = remarkObj.OnGetRemarkListdt(studentId);

            if (remark.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = remark });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("teacherList/{classId}")]
        public JsonResult teacherList( int classId)
        {

            List<subjectTeacherMaster_tableEntities> tech = subtechObj.OnGetTeacherListdt(classId);

            if (tech.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = tech });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("studentList/{id}")]
        public JsonResult studentList(int ID)
        {

            studentMaster_tableEntities stud = studObj.OnGetData(ID);

            if (stud.StudentIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = stud });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("noticeList/{std}")]
        public JsonResult noticeList(string std)
        {

            List<noticeMaster_tableEntities> notice = noticeObj.OnGetStudentNoticeList(std);

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
