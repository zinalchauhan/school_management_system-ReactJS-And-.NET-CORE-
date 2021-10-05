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
        private int cityIdFk = 0;
        private string cityName = "";
        private int stateIdFk = 0;
        private string stateName = "";
        private int mediumIdFk = 0;
        private string mediumName = "";
        private int standardIdFk = 0;
        private string standardName = "";
        private int divisionIdFk = 0;
        private string divisiondName = "";
        private int isActive = 0;

    public int ClassTeacherIdPk { get => classTeacherIdPk; set => classTeacherIdPk = value; }
    public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
    public int TeacherIdFk { get => teacherIdFk; set => teacherIdFk = value; }
    public string TeacherName { get => teacherName; set => teacherName = value; }
    public int CityIdFk { get => cityIdFk; set => cityIdFk = value; }
    public string CityName { get => cityName; set => cityName = value; }
    public int StateIdFk { get => stateIdFk; set => stateIdFk = value; }
    public string StateName { get => stateName; set => stateName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int StandardIdFk { get => standardIdFk; set => standardIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public int DivisionIdFk { get => divisionIdFk; set => divisionIdFk = value; }
    public string DivisiondName { get => divisiondName; set => divisiondName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

