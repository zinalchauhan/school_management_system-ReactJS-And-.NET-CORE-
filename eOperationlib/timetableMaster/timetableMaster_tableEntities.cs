using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class timetableMaster_tableEntities
    {
        private int timetableIdPk = 0;
        private int classIdFk = 0;
        private string standardName = "";
        private string divisionName = "";
        private int subjectTeacherIdFk = 0;
        private string teacherName = "";
        private string subjectName = "";
        private int mediumIdFk = 0;
        private string mediumName = "";
        private int periodNo = 0;
        private int settingIdFk = 0;
        private int isActive = 0;

    public int TimetableIdPk { get => timetableIdPk; set => timetableIdPk = value; }
    public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public string DivisionName { get => divisionName; set => divisionName = value; }
    public int SubjectTeacherIdFk { get => subjectTeacherIdFk; set => subjectTeacherIdFk = value; }
    public string TeacherName { get => teacherName; set => teacherName = value; }
    public string SubjectName { get => subjectName; set => subjectName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int PeriodNo { get => periodNo; set => periodNo = value; }
    public int SettingIdFk { get => settingIdFk; set => settingIdFk = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

