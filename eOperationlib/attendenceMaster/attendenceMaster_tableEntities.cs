using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class attendenceMaster_tableEntities
    {
        private int attendenceIdPk = 0;
        private int studentIdFk = 0;
        private string studentName = "";
        private int classIdFk = 0;
        private int standardIdFk = 0;
        private string standardName = "";
        private int divisionIdFk = 0;
        private string divisionName = "";
        private int mediumIdFk = 0;
        private string mediumName = "";
        private int teacherIdFk = 0;
        private string teacherName = "";
        private int cityIdFk = 0;
        private string cityName = "";
        private int stateIdFk = 0;
        private string stateName = "";
        private int categoryIdFk = 0;
        private string categoryName = "";
        private int classTeacherIdFk = 0;
        private string attendenceDate = "";
        private string attendenceStatus = "";
        private int isActive = 0;

    public int AttendenceIdPk { get => attendenceIdPk; set => attendenceIdPk = value; }
    public int StudentIdFk { get => studentIdFk; set => studentIdFk = value; }
    public string StudentName { get => studentName; set => studentName = value; }
    public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
    public int StandardIdFk { get => standardIdFk; set => standardIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public int DivisionIdFk { get => divisionIdFk; set => divisionIdFk = value; }
    public string DivisionName { get => divisionName; set => divisionName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int TeacherIdFk { get => teacherIdFk; set => teacherIdFk = value; }
    public string TeacherName { get => teacherName; set => teacherName = value; }
    public int CityIdFk { get => cityIdFk; set => cityIdFk = value; }
    public string CityName { get => cityName; set => cityName = value; }
    public int StateIdFk { get => stateIdFk; set => stateIdFk = value; }
    public string StateName { get => stateName; set => stateName = value; }
    public int CategoryIdFk { get => categoryIdFk; set => categoryIdFk = value; }
    public string CategoryName { get => categoryName; set => categoryName = value; }
    public int ClassTeacherIdFk { get => classTeacherIdFk; set => classTeacherIdFk = value; }
    public string AttendenceDate { get => attendenceDate; set => attendenceDate = value; }
    public string AttendenceStatus { get => attendenceStatus; set => attendenceStatus = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

