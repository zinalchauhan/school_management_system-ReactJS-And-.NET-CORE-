using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class remarkMaster_tableEntities
    {
        private int remarkIdPk = 0;
        private int studentIdFk = 0;
        private string studentMname = "";
        private string teacherName = "";
        private string subjectName = "";
        private int isActive = 0;
        private int subjectTeacherIdFk = 0;
        private string userType = "";
        private string remarkDetail = "";
        private string remarkDate = "";


    public int RemarkIdPk { get => remarkIdPk; set => remarkIdPk = value; }
    public int StudentIdFk { get => studentIdFk; set => studentIdFk = value; }
    public string StudentMname { get => studentMname; set => studentMname = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public int SubjectTeacherIdFk { get => subjectTeacherIdFk; set => subjectTeacherIdFk = value; }
    public string UserType { get => userType; set => userType = value; }
    public string RemarkDetail { get => remarkDetail; set => remarkDetail = value; }
    public string RemarkDate { get => remarkDate; set => remarkDate = value; }
    public string TeacherName { get => teacherName; set => teacherName = value; }
    public string SubjectName { get => subjectName; set => subjectName = value; }
}

