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
        timetableMaster_tableDB ttObj = new();
        timetableSettingMaster_tableDB ttsObj = new();
        questionPaperMaster_tableDB qpObj = new();
        questionPaperImageMaster_tableDB qpiObj = new();
        eventMaster_tableDB eventObj = new();
        eventImageMaster_tableDB eimgObj = new();
        feedbackMaster_tableDB feedbackObj = new();
        leaveRequestMaster_tableDB leaveObj = new();

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
        public JsonResult studentList(int id)
        {

            studentMaster_tableEntities stud = studObj.OnGetData(id);

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

        [HttpGet("timetableSettingList/{medId}")]
        public JsonResult timetableSettingList(int medId)
        {

            List<timetableSettingMaster_tableEntities> tts = ttsObj.OnGetDataByMed(medId);

            if (tts.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = tts });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("timetableList/{cls}/{tts}")]
        public JsonResult timetableList(int cls , int tts)
        {

            List<timetableMaster_tableEntities> tt = ttObj.timeTableList(cls,tts);

            if (tt.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = tt });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("questionpaperList/{std}")]
        public JsonResult questionpaperList(int std)
        {

            List<questionPaperMaster_tableEntities> qp = qpObj.QuestionpaperList(std);

            if (qp.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = qp });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("getPaperImageList/{id}")]
        public JsonResult getPaperImageList(int id)
        {

            List<questionPaperImageMaster_tableEntities> img = qpiObj.OnGetImageListdt(id);

            if (img.Count > 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = img });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("eventList/{med}")]
        public JsonResult eventList(int med)
        {

            List<eventMaster_tableEntities> evt = eventObj.eventList(med);

            if (evt.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = evt });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("getEventImageList/{id}")]
        public JsonResult getEventImageList(int id)
        {

            List<eventImageMaster_tableEntities> img = eimgObj.OnGetImageListdt(id);

            if (img.Count > 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = img });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpPost("insertLeaveReqList")]

        public JsonResult insertLeaveReqList(leaveRequestMaster_tableEntities leave)
        {

            int result = leaveObj.OnInsert(leave);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = leave });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("leaveRequestList/{studid}")]
        public JsonResult leaveRequestList(int studid)
        {

            List<leaveRequestMaster_tableEntities> leave = leaveObj.getLeaveList(studid);

            if (leave.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = leave });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpPost("insertFeedbackList")]

        public JsonResult insertFeedbackList(feedbackMaster_tableEntities fb)
        {

            int result = feedbackObj.OnInsert(fb);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = fb });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

    }
}
