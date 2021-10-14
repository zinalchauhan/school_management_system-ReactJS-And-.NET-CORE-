using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class subjectTeacherMaster_tableEntities
    {
        private int subjectTeacherIdPk = 0;
        private int classIdFk = 0;
        private int teacherIdFk = 0;
        private string teacherName = "";
        private int subjectIdFk = 0;
        private string subjectName = "";
        private int mediumIdFk = 0;
        private string divisiondName = "";
        private string standardName = "";
        private int isActive = 0;

    public int SubjectTeacherIdPk { get => subjectTeacherIdPk; set => subjectTeacherIdPk = value; }
    public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
    public int TeacherIdFk { get => teacherIdFk; set => teacherIdFk = value; }
    public string TeacherName { get => teacherName; set => teacherName = value; }
    public int SubjectIdFk { get => subjectIdFk; set => subjectIdFk = value; }
    public string SubjectName { get => subjectName; set => subjectName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public string DivisiondName { get => divisiondName; set => divisiondName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

