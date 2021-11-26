using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace schoolManagementSystemAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class adminController : ControllerBase
    {
        stateMaster_tableDB stateObj = new();
        cityMaster_tableDB cityObj = new();
        categoryMaster_tableDB ctgObj = new();
        mediumMaster_tableDB mediumObj = new();
        standardMaster_tableDB stdObj = new();
        divisionMaster_tableDB divObj = new();
        subjectMaster_tableDB subObj = new();
        principalMaster_tableDB principalObj = new();
        teacherMaster_tableDB teacherObj = new();
        studentMaster_tableDB studentObj = new();
        classMaster_tableDB classObj = new();
        subjectTeacherMaster_tableDB sbtcObj = new();
        classTeacherMaster_tableDB cltcObj = new();
        attendenceMaster_tableDB attendenceObj = new();
        eventMaster_tableDB eventObj = new();
        eventImageMaster_tableDB eventimgObj = new();
        examMaster_tableDB examObj = new();
        examTimeTableMaster_tableDB examttObj = new();
        questionPaperMaster_tableDB qpObj = new();
        questionPaperImageMaster_tableDB qpimgObj = new();
        resultMaster_tableDB resultObj = new();
        timetableSettingMaster_tableDB ttsettingObj = new();
        timetableMaster_tableDB ttObj = new();
        feedbackMaster_tableDB feedbackObj = new();
        leaveRequestMaster_tableDB leavereqObj = new();
        noticeMaster_tableDB noticeObj = new();
        remarkMaster_tableDB remarkObj = new();
        oldStudentMaster_tableDB oldStudObj = new();

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

        [HttpGet("categoryList")]
        public JsonResult categoryList()
        {

            List<categoryMaster_tableEntities> categories = ctgObj.OnGetListdt();

            if (categories.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = categories });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("mediumList")]
        public JsonResult mediumList()
        {

            List<mediumMaster_tableEntities> mediums = mediumObj.OnGetListdt();

            if (mediums.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = mediums });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpPost("insertMediumList")]

        public JsonResult insertMediumList(mediumMaster_tableEntities medium)
        {

            int result = mediumObj.OnInsert(medium);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = medium });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getMedium/{id}")]
        public JsonResult getMedium(int id)
        {
            mediumMaster_tableEntities result = mediumObj.OnGetData(id);
            if (result.MediumIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateMediumList")]

        public JsonResult updateMediumList(mediumMaster_tableEntities medium)
        {

            int result = mediumObj.OnUpdate(medium);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteMediumList/{id}")]

        public JsonResult deleteMediumList(int id)
        {

            int result = mediumObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }


        [HttpGet("standardList")]
        public JsonResult standardList()
        {

            List<standardMaster_tableEntities> stds = stdObj.OnGetListdt();

            if (stds.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = stds });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpPost("insertStandardList")]

        public JsonResult insertStandardList(standardMaster_tableEntities standard)
        {

            int result = stdObj.OnInsert(standard);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = standard });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getStandard/{id}")]
        public JsonResult getStandard(int id)
        {
            standardMaster_tableEntities result = stdObj.OnGetData(id);
            if (result.StandardIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateStandardList")]

        public JsonResult updateStandardList(standardMaster_tableEntities standard)
        {

            int result = stdObj.OnUpdate(standard);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteStandardList/{id}")]

        public JsonResult deleteStandardList(int id)
        {

            int result = stdObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("divisionList")]
        public JsonResult divisionList()
        {

            List<divisionMaster_tableEntities> divs = divObj.OnGetListdt();

            if (divs.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = divs });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpPost("insertDivisionList")]

        public JsonResult insertDivisionList(divisionMaster_tableEntities division)
        {

            int result = divObj.OnInsert(division);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = division });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getDivision/{id}")]
        public JsonResult getDivision(int id)
        {
            divisionMaster_tableEntities result = divObj.OnGetData(id);
            if (result.DivisionIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateDivisionList")]

        public JsonResult updateDivisionList(divisionMaster_tableEntities division)
        {

            int result = divObj.OnUpdate(division);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteDivisionList/{id}")]

        public JsonResult deleteDivisionList(int id)
        {

            int result = divObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("subjectList")]
        public JsonResult subjectList()
        {

            List<subjectMaster_tableEntities> subs = subObj.OnGetListdt();

            if (subs.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = subs });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpPost("insertSubjectList")]

        public JsonResult insertSubjectList(subjectMaster_tableEntities subject)
        {

            int result = subObj.OnInsert(subject);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = subject });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getSubject/{id}")]
        public JsonResult getSubject(int id)
        {
            subjectMaster_tableEntities result = subObj.OnGetData(id);
            if (result.SubjectIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateSubjectList")]

        public JsonResult updateSubjectList(subjectMaster_tableEntities subject)
        {

            int result = subObj.OnUpdate(subject);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteSubjectList/{id}")]

        public JsonResult deleteSubjectList(int id)
        {

            int result = subObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("principalList")]
        public JsonResult principalList()
        {

            List<principalMaster_tableEntities> principal = principalObj.OnGetListdt();

            if (principal.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = principal });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertPrincipalList")]

        public JsonResult insertPrincipalList(principalMaster_tableEntities principal)
        {

            int result = principalObj.OnInsert(principal);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = principal  });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getPrincipal/{id}")]
        public JsonResult getPrincipal(int id)
        {
            principalMaster_tableEntities result = principalObj.OnGetData(id);
            if (result.PrincipalIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updatePrincipalList")]

        public JsonResult updatePrincipalList(principalMaster_tableEntities principal)
        {

            int result = principalObj.OnUpdate(principal);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deletePrincipalList/{id}")]

        public JsonResult deletePrincipalList(int id)
        {

            int result = principalObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("teacherList")]
        public JsonResult teacherList()
        {

            List<teacherMaster_tableEntities> teacher = teacherObj.OnGetListdt();

            if (teacher.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = teacher });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertTeacherList")]

        public JsonResult insertTeacherList(teacherMaster_tableEntities teacher)
        {

            int result = teacherObj.OnInsert(teacher);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = teacher });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getTeacher/{id}")]
        public JsonResult getTeacher(int id)
        {
            teacherMaster_tableEntities result = teacherObj.OnGetData(id);
            if (result.TeacherIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateTeacherList")]

        public JsonResult updateTeacherList(teacherMaster_tableEntities teacher)
        {

            int result = teacherObj.OnUpdate(teacher);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteTeacherList/{id}")]

        public JsonResult deleteTeacherList(int id)
        {

            int result = teacherObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("studentList")]
        public JsonResult studentList()
        {

            List<studentMaster_tableEntities> student = studentObj.OnGetListdt();

            if (student.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = student });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        private String photoUpload(IFormFileCollection Files , string destination)
        {
            Random _random = new Random();
            var file = Files[0];
            var folderName = Path.Combine("uploads", destination);
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            var fileName = "IMG_" + _random.Next(1, 999) + "" + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            var fullPath = Path.Combine(pathToSave, fileName);
            var dbPath = Path.Combine(folderName, fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            return dbPath;

        }

        [HttpPost("insertStudentList"), DisableRequestSizeLimit]
        public JsonResult insertStudentList()
        {
            studentMaster_tableEntities student = new studentMaster_tableEntities();
            String photo_path = photoUpload(Request.Form.Files, "studentImages");

            student.StudentRollNo = Int32.Parse(Request.Form["studentRollNo"]);
            student.StudentGrNo = Int32.Parse(Request.Form["studentGrNo"]);
            student.MediumIdFk = Int32.Parse(Request.Form["mediumIdFk"]);
            student.ClassIdFk = Int32.Parse(Request.Form["classIdFk"]);
            student.StudentFname = Request.Form["studentFname"];
            student.StudentMname = Request.Form["studentMname"];
            student.StudentLname = Request.Form["studentLname"];
            student.StudentImage = photo_path;
            student.StudentDob = Request.Form["studentDob"];
            student.StudentGender = Request.Form["studentGender"];
            student.MotherMobile = Request.Form["motherMobile"];
            student.FatherMobile = Request.Form["fatherMobile"];
            student.CategoryIdFk = Int32.Parse(Request.Form["categoryIdFk"]);

            int result = studentObj.OnInsert(student);
            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpPost("updateStudentList"), DisableRequestSizeLimit]
        public JsonResult updateStudentList()
        {
            studentMaster_tableEntities student = new studentMaster_tableEntities();
            if (Request.Form.Files.Count != 0)
            {

                if (Request.Form.Files[0].Length > 0)
                {
                    String photo_path = photoUpload(Request.Form.Files, "studentImages");
                    student.StudentImage = photo_path;
                }
                else
                {
                    student.StudentImage = Request.Form["studentImage"];
                }
            }
            else
            {
                student.StudentImage = Request.Form["studentImage"];
            }

            student.StudentIdPk = Int32.Parse(Request.Form["studentIdPk"]);
            student.StudentRollNo = Int32.Parse(Request.Form["studentRollNo"]);
            student.StudentGrNo = Int32.Parse(Request.Form["studentGrNo"]);
            student.MediumIdFk = Int32.Parse(Request.Form["mediumIdFk"]);
            student.ClassIdFk = Int32.Parse(Request.Form["classIdFk"]);
            student.StudentFname = Request.Form["studentFname"];
            student.StudentMname = Request.Form["studentMname"];
            student.StudentLname = Request.Form["studentLname"];
            student.StudentDob = Request.Form["studentDob"];
            student.StudentGender = Request.Form["studentGender"];
            student.MotherMobile = Request.Form["motherMobile"];
            student.FatherMobile = Request.Form["fatherMobile"];
            student.CategoryIdFk = Int32.Parse(Request.Form["categoryIdFk"]);

            int result = studentObj.OnUpdate(student);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }


        //[HttpPost("insertStudentList")]

        //public JsonResult insertStudentList(studentMaster_tableEntities student)
        //{

        //    int result = studentObj.OnInsert(student);

        //    if (result == 1)
        //    {
        //        return new JsonResult(new { result = "success", message = "Data Inserted", data = student });
        //    }
        //    else
        //    {
        //        return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
        //    }
        //}



        [HttpGet("getStudent/{id}")]
        public JsonResult getStudent(int id)
        {
            studentMaster_tableEntities result = studentObj.OnGetData(id);
            if (result.StudentIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        //[HttpPost("updateStudentList")]

        //public JsonResult updateStudentList(studentMaster_tableEntities student)
        //{

        //    int result = studentObj.OnUpdate(student);

        //    if (result == 1)
        //    {
        //        return new JsonResult(new { result = "success", message = "Data Updated", data = result });
        //    }
        //    else
        //    {
        //        return new JsonResult(new { result = "failure", message = "Data Not Updated" });
        //    }
        //}

        [HttpDelete("deleteStudentList/{id}")]

        public JsonResult deleteStudentList(int id)
        {

            int result = studentObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("classList")]
        public JsonResult classList()
        {

            List<classMaster_tableEntities> classes = classObj.OnGetListdt();

            if (classes.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = classes });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertClassList")]
        public JsonResult insertClassList(classMaster_tableEntities classes)
        {

            int result = classObj.OnInsert(classes);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = classes });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getClass/{id}")]
        public JsonResult getClass(int id)
        {
            classMaster_tableEntities result = classObj.OnGetData(id);
            if (result.ClassIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateClassList")]

        public JsonResult updateClassList(classMaster_tableEntities classes)
        {

            int result = classObj.OnUpdate(classes);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteClassList/{id}")]

        public JsonResult deleteClassList(int id)
        {

            int result = classObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("subTeachList")]
        public JsonResult subTeachList()
        {

            List<subjectTeacherMaster_tableEntities> sbtc = sbtcObj.OnGetListdt();

            if (sbtc.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = sbtc });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        [HttpGet("subTeachList/{id}")]
        public JsonResult subTeachList(int id)
        {

            List<subjectTeacherMaster_tableEntities> sbtc = sbtcObj.OnGetSubTechListdt(id);

            if (sbtc.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = sbtc });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertSubTechList")]

        public JsonResult insertSubTechList(subjectTeacherMaster_tableEntities sbtc)
        {

            int result = sbtcObj.OnInsert(sbtc);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = sbtc });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getSubTech/{id}")]
        public JsonResult getSubTech(int id)
        {
            subjectTeacherMaster_tableEntities result = sbtcObj.OnGetData(id);
            if (result.SubjectTeacherIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateSubTechList")]

        public JsonResult updateSubTechList(subjectTeacherMaster_tableEntities sbtc)
        {

            int result = sbtcObj.OnUpdate(sbtc);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteSubTechList/{id}")]

        public JsonResult deleteSubTechList(int id)
        {

            int result = sbtcObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("classTeachList")]
        public JsonResult classTeachList()
        {

            List<classTeacherMaster_tableEntities> cltc = cltcObj.OnGetListdt();

            if (cltc.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = cltc });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertClassTechList")]

        public JsonResult insertClassTechList(classTeacherMaster_tableEntities cltc)
        {

            int result = cltcObj.OnInsert(cltc);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = cltc });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getClassTech/{id}")]
        public JsonResult getClassTech(int id)
        {
            classTeacherMaster_tableEntities result = cltcObj.OnGetData(id);
            if (result.ClassTeacherIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateClassTechList")]

        public JsonResult updateClassTechList(classTeacherMaster_tableEntities cltc)
        {

            int result = cltcObj.OnUpdate(cltc);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteClassTechList/{id}")]

        public JsonResult deleteClassTechList(int id)
        {

            int result = cltcObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("attendenceList")]
        public JsonResult attendenceList()
        {

            List<attendenceMaster_tableEntities> attend = attendenceObj.OnGetListdt();

            if (attend.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = attend });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertAttendemceList")]

        public JsonResult insertAttendemceList(attendenceMaster_tableEntities attend)
        {

            int result = attendenceObj.OnInsert(attend);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = attend });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getAttendence/{id}")]
        public JsonResult getAttendence(int id)
        {
            attendenceMaster_tableEntities result = attendenceObj.OnGetData(id);
            if (result.AttendenceIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateAttendenceList")]

        public JsonResult updateAttendenceList(attendenceMaster_tableEntities attend)
        {

            int result = attendenceObj.OnUpdate(attend);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteAttendenceList/{id}")]

        public JsonResult deleteAttendenceList(int id)
        {

            int result = attendenceObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("eventList")]
        public JsonResult eventList()
        {

            List<eventMaster_tableEntities> events = eventObj.OnGetListdt();

            if (events.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = events });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertEventList")]

        public JsonResult insertEventList(eventMaster_tableEntities events)
        {

            int result = eventObj.OnInsert(events);

            if (result == 1)
            {
                int eventid = eventObj.OnLastRecordInserted(); 
                return new JsonResult(new { result = "success", message = "Data Inserted", data = eventid });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getEvents/{id}")]
        public JsonResult getEvents(int id)
        {
            eventMaster_tableEntities result = eventObj.OnGetData(id);
            if (result.EventIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateEventList")]

        public JsonResult updateEventList(eventMaster_tableEntities events)
        {

            int result = eventObj.OnUpdate(events);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteEventList/{id}")]

        public JsonResult deleteEventList(int id)
        {

            int result = eventObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("eventImgList")]
        public JsonResult eventImgList()
        {

            List<eventImageMaster_tableEntities> eventImg = eventimgObj.OnGetListdt();

            if (eventImg.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = eventImg });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        //[HttpPost("insertEventImgList")]

        //public JsonResult insertEventImgList(eventImageMaster_tableEntities eventImg)
        //{

        //    int result = eventimgObj.OnInsert(eventImg);

        //    if (result == 1)
        //    {
        //        return new JsonResult(new { result = "success", message = "Data Inserted", data = eventImg });
        //    }
        //    else
        //    {
        //        return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
        //    }
        //}

        [HttpPost("insertEventImgList"), DisableRequestSizeLimit]
        public JsonResult insertEventImgList()
        {
            eventImageMaster_tableEntities img = new eventImageMaster_tableEntities();
            String photo_path = photoUpload(Request.Form.Files, "events");

            img.EventIdFk = Int32.Parse(Request.Form["eventIdFk"]);
            img.EventImage = photo_path;
           
            int result = eventimgObj.OnInsert(img);
            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpPost("updateEventImgList"), DisableRequestSizeLimit]
        public JsonResult updateEventImgList()
        {
            eventImageMaster_tableEntities img = new eventImageMaster_tableEntities();
            if (Request.Form.Files.Count != 0)
            {

                if (Request.Form.Files[0].Length > 0)
                {
                    String photo_path = photoUpload(Request.Form.Files, "events");
                    img.EventImage = photo_path;
                }
                else
                {
                    img.EventImage = Request.Form["eventImage"];
                }
            }
            else
            {
                img.EventImage = Request.Form["eventImage"];
            }

            img.EventImageIdPk = Int32.Parse(Request.Form["eventImageIdPk"]);
            img.EventIdFk = Int32.Parse(Request.Form["eventIdFk"]);

            int result = eventimgObj.OnUpdate(img);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }


        [HttpGet("eventImageList/{id}")]
        public JsonResult getEventImageList(int id)
        {

            List<eventImageMaster_tableEntities> img = eventimgObj.OnGetImageListdt(id);

            if (img.Count > 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = img });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }

        //[HttpPost("updateEventImgList")]

        //public JsonResult updateEventImgList(eventImageMaster_tableEntities eventImg)
        //{

        //    int result = eventimgObj.OnUpdate(eventImg);

        //    if (result == 1)
        //    {
        //        return new JsonResult(new { result = "success", message = "Data Updated", data = result });
        //    }
        //    else
        //    {
        //        return new JsonResult(new { result = "failure", message = "Data Not Updated" });
        //    }
        //}

        [HttpDelete("deleteEventImgList/{id}")]

        public JsonResult deleteEventImgList(int id)
        {

            int result = eventimgObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("examList")]
        public JsonResult examList()
        {

            List<examMaster_tableEntities> exam = examObj.OnGetListdt();

            if (exam.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = exam });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertExamList")]

        public JsonResult insertExamList(examMaster_tableEntities exam)
        {

            int result = examObj.OnInsert(exam);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = exam });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getExam/{id}")]
        public JsonResult getExam(int id)
        {
            examMaster_tableEntities result = examObj.OnGetData(id);
            if (result.ExamIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateExamList")]

        public JsonResult updateExamList(examMaster_tableEntities exam)
        {

            int result = examObj.OnUpdate(exam);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteExamList/{id}")]

        public JsonResult deleteExamList(int id)
        {

            int result = examObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("examttList")]
        public JsonResult examttList()
        {

            List<examTimeTableMaster_tableEntities> examtt = examttObj.OnGetListdt();

            if (examtt.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = examtt });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertExamttList")]

        public JsonResult insertExamttList(examTimeTableMaster_tableEntities examtt)
        {

            int result = examttObj.OnInsert(examtt);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = examtt });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getExamtt/{id}")]
        public JsonResult getExamtt(int id)
        {
            examTimeTableMaster_tableEntities result = examttObj.OnGetData(id);
            if (result.ExamTtIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateExamttList")]

        public JsonResult updateExamttList(examTimeTableMaster_tableEntities examtt)
        {

            int result = examttObj.OnUpdate(examtt);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteExamttList/{id}")]

        public JsonResult deleteExamttList(int id)
        {

            int result = examttObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("quePaperList")]
        public JsonResult quePaperList()
        {

            List<questionPaperMaster_tableEntities> quepaper = qpObj.OnGetListdt();

            if (quepaper.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = quepaper });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertQuePaperList")]

        public JsonResult insertQuePaperList(questionPaperMaster_tableEntities quepaper)
        {

            int result = qpObj.OnInsert(quepaper);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = quepaper });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getQuePaper/{id}")]
        public JsonResult getQuePaper(int id)
        {
            questionPaperMaster_tableEntities result = qpObj.OnGetData(id);
            if (result.QuestionPaperIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateQuePaperList")]

        public JsonResult updateQuePaperList(questionPaperMaster_tableEntities quepaper)
        {

            int result = qpObj.OnUpdate(quepaper);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteQuePaperList/{id}")]

        public JsonResult deleteQuePaperList(int id)
        {

            int result = qpObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("queImgList")]
        public JsonResult queImgList()
        {

            List<questionPaperImageMaster_tableEntities> queImg = qpimgObj.OnGetListdt();

            if (queImg.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = queImg });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertQueImgList")]

        public JsonResult insertQueImgList(questionPaperImageMaster_tableEntities queImg)
        {

            int result = qpimgObj.OnInsert(queImg);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = queImg });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getQueImg/{id}")]
        public JsonResult getQueImg(int id)
        {
            questionPaperImageMaster_tableEntities result = qpimgObj.OnGetData(id);
            if (result.PaperImageIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateQueImgList")]

        public JsonResult updateQueImgList(questionPaperImageMaster_tableEntities queImg)
        {

            int result = qpimgObj.OnUpdate(queImg);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteQueImgList/{id}")]

        public JsonResult deleteQueImgList(int id)
        {

            int result = qpimgObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("resultList")]
        public JsonResult resultList()
        {

            List<resultMaster_tableEntities> result = resultObj.OnGetListdt();

            if (result.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertResultList")]

        public JsonResult insertResultList(resultMaster_tableEntities results)
        {

            int result = resultObj.OnInsert(results);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = results });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getResult/{id}")]
        public JsonResult getResult(int id)
        {
            resultMaster_tableEntities result = resultObj.OnGetData(id);
            if (result.ResultIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateResultList")]

        public JsonResult updateResultList(resultMaster_tableEntities results)
        {

            int result = resultObj.OnUpdate(results);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteResultList/{id}")]

        public JsonResult deleteResultList(int id)
        {

            int result = resultObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("ttsettingList")]
        public JsonResult ttsettingList()
        {

            List<timetableSettingMaster_tableEntities> ttsetting = ttsettingObj.OnGetListdt();

            if (ttsetting.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = ttsetting });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertTtsettingList")]

        public JsonResult insertTtsettingList(timetableSettingMaster_tableEntities ttsetting)
        {

            int result = ttsettingObj.OnInsert(ttsetting);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = ttsetting });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getTtsetting/{id}")]
        public JsonResult getTtsetting(int id)
        {
            timetableSettingMaster_tableEntities result = ttsettingObj.OnGetData(id);
            if (result.SettingIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpGet("getTtsettingByMedium/{id}")]
        public JsonResult getTtsettingByMedium(int id)
        {
           List <timetableSettingMaster_tableEntities> result = ttsettingObj.OnGetDataByMed(id);
            if (result.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateTtsettingList")]

        public JsonResult updateTtsettingList(timetableSettingMaster_tableEntities ttsetting)
        {

            int result = ttsettingObj.OnUpdate(ttsetting);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteTtsettingList/{id}")]

        public JsonResult deleteTtsettingList(int id)
        {

            int result = ttsettingObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("timetableList")]
        public JsonResult timetableList()
        {

            List<timetableMaster_tableEntities> tt = ttObj.OnGetListdt();

            if (tt.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = tt });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertTimetableList")]

        public JsonResult insertTimetableList(timetableMaster_tableEntities tt)
        {

            int result = ttObj.OnInsert(tt);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = tt });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getTimetable/{id}")]
        public JsonResult getTimetable(int id)
        {
            timetableMaster_tableEntities result = ttObj.OnGetData(id);
            if (result.TimetableIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateTimetableList")]

        public JsonResult updateTimetableList(timetableMaster_tableEntities tt)
        {

            int result = ttObj.OnUpdate(tt);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteTimetableList/{id}")]

        public JsonResult deleteTimetableList(int id)
        {

            int result = ttObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("feedbackList")]
        public JsonResult feedbackList()
        {

            List<feedbackMaster_tableEntities> feedback = feedbackObj.OnGetListdt();

            if (feedback.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = feedback });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertFeedbackList")]

        public JsonResult insertFeedbackList(feedbackMaster_tableEntities feedback)
        {

            int result = feedbackObj.OnInsert(feedback);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = feedback });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getFeedback/{id}")]
        public JsonResult getFeedback(int id)
        {
            feedbackMaster_tableEntities result = feedbackObj.OnGetData(id);
            if (result.FeedbackIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateFeedbackList")]

        public JsonResult updateFeedbackList(feedbackMaster_tableEntities feedback)
        {

            int result = feedbackObj.OnUpdate(feedback);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteFeedbackList/{id}")]

        public JsonResult deleteFeedbackList(int id)
        {

            int result = feedbackObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("leaveReqList")]
        public JsonResult leaveReqList()
        {

            List<leaveRequestMaster_tableEntities> leave = leavereqObj.OnGetListdt();

            if (leave.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = leave });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertLeaveReqList")]

        public JsonResult insertLeaveReqList(leaveRequestMaster_tableEntities leave)
        {

            int result = leavereqObj.OnInsert(leave);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = leave });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getLeaveReq/{id}")]
        public JsonResult getLeaveReq(int id)
        {
            leaveRequestMaster_tableEntities result = leavereqObj.OnGetData(id);
            if (result.LeaveRequestIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateLeaveReqList")]

        public JsonResult updateLeaveReqList(leaveRequestMaster_tableEntities leave)
        {

            int result = leavereqObj.OnUpdate(leave);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteLeaveReqList/{id}")]

        public JsonResult deleteLeaveReqList(int id)
        {

            int result = leavereqObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("noticeList")]
        public JsonResult noticeList()
        {

            List<noticeMaster_tableEntities> notice = noticeObj.OnGetListdt();

            if (notice.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = notice });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertNoticeList")]

        public JsonResult insertNoticeList(noticeMaster_tableEntities notice)
        {

            int result = noticeObj.OnInsert(notice);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = notice });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getNotice/{id}")]
        public JsonResult getNotice(int id)
        {
            noticeMaster_tableEntities result = noticeObj.OnGetData(id);
            if (result.NoticeIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateNoticeList")]

        public JsonResult updateNoticeList(noticeMaster_tableEntities notice)
        {

            int result = noticeObj.OnUpdate(notice);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteNoticeList/{id}")]

        public JsonResult deleteNoticeList(int id)
        {

            int result = noticeObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("remarkList")]
        public JsonResult remarkList()
        {

            List<remarkMaster_tableEntities> remark = remarkObj.OnGetListdt();

            if (remark.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = remark });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertRemarkList")]

        public JsonResult insertReamrkList(remarkMaster_tableEntities remark)
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

        [HttpGet("getRemark/{id}")]
        public JsonResult getRemark(int id)
        {
            remarkMaster_tableEntities result = remarkObj.OnGetData(id);
            if (result.RemarkIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateRemarkList")]

        public JsonResult updateRemarkList(remarkMaster_tableEntities remark)
        {

            int result = remarkObj.OnUpdate(remark);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteRemarkLis/{id}")]

        public JsonResult deleteRemarkList(int id)
        {

            int result = remarkObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

        [HttpGet("oldstudentList")]
        public JsonResult oldstudentList()
        {

            List<oldStudentMaster_tableEntities> oldstudent = oldStudObj.OnGetListdt();

            if (oldstudent.Count != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = oldstudent });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Found" });
            }
        }


        [HttpPost("insertoldStudentList")]

        public JsonResult insertoldStudentList(oldStudentMaster_tableEntities oldstudent)
        {

            int result = oldStudObj.OnInsert(oldstudent);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Inserted", data = oldstudent });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Inserted" });
            }
        }

        [HttpGet("getoldStudent/{id}")]
        public JsonResult getoldStudent(int id)
        {
            oldStudentMaster_tableEntities result = oldStudObj.OnGetData(id);
            if (result.StudentIdPk != 0)
            {
                return new JsonResult(new { result = "success", message = "Data Found", data = result });
            }
            else
            {
                return new JsonResult(new { result = "faliure", message = "Data Not Found" });
            }
        }

        [HttpPost("updateoldStudentList")]

        public JsonResult updateoldStudentList(oldStudentMaster_tableEntities oldstudent)
        {

            int result = oldStudObj.OnUpdate(oldstudent);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Updated", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Updated" });
            }
        }

        [HttpDelete("deleteoldStudentList/{id}")]

        public JsonResult deleteoldStudentList(int id)
        {
            
            int result = oldStudObj.OnDelete(id);

            if (result == 1)
            {
                return new JsonResult(new { result = "success", message = "Data Deleted", data = result });
            }
            else
            {
                return new JsonResult(new { result = "failure", message = "Data Not Deleted" });
            }
        }

    }
}