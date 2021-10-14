using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class classTeacherMaster_tableEntities
    {
        private int classTeacherIdPk = 0;
        private int classIdFk = 0;
        private int teacherIdFk = 0;
        private string teacherName = "";
        private int mediumIdFk = 0;
        private string standardName = "";
        private string divisiondName = "";
        private int isActive = 0;

    public int ClassTeacherIdPk { get => classTeacherIdPk; set => classTeacherIdPk = value; }
    public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
    public int TeacherIdFk { get => teacherIdFk; set => teacherIdFk = value; }
    public string TeacherName { get => teacherName; set => teacherName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public string DivisiondName { get => divisiondName; set => divisiondName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

