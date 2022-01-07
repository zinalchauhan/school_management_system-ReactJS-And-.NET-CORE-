using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class attendenceMaster_tableEntities
    {
        private int attendenceIdPk = 0;
        private int studentIdFk = 0;
    private int studentRollNo = 0;
        private string studentMname = "";
        private int classIdFk = 0;
    private string studentFname = "";
        private string teacherName = "";
        private int classTeacherIdFk = 0;
        private string attendenceDate = "";
        private string attendenceStatus = "";
        private int isActive = 0;

    public int AttendenceIdPk { get => attendenceIdPk; set => attendenceIdPk = value; }
    public int StudentIdFk { get => studentIdFk; set => studentIdFk = value; }
    public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
    public string TeacherName { get => teacherName; set => teacherName = value; }
    public int ClassTeacherIdFk { get => classTeacherIdFk; set => classTeacherIdFk = value; }
    public string AttendenceDate { get => attendenceDate; set => attendenceDate = value; }
    public string AttendenceStatus { get => attendenceStatus; set => attendenceStatus = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string StudentMname { get => studentMname; set => studentMname = value; }
    public string StudentFname { get => studentFname; set => studentFname = value; }
    public int StudentRollNo { get => studentRollNo; set => studentRollNo = value; }
}

