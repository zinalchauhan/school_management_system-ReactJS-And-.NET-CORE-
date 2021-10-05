using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class teacherMaster_tableEntities
    {
        private int teacherIdPk = 0;
        private string teacherName = "";
        private string teacherEmail = "";
        private string teacherMobile = "";
        private string teacherQualification = "";
        private string teacherImage = "";
        private string teacherAddress = "";
        private int cityIdFk = 0;
        private string cityName = "";
        private string stateName = "";
        private string mediumName = "";
        private int mediumIdFk = 0;
        private string subjects = "";
        private int isActive = 0;

    public int TeacherIdPk { get => teacherIdPk; set => teacherIdPk = value; }
    public string TeacherName { get => teacherName; set => teacherName = value; }
    public string TeacherEmail { get => teacherEmail; set => teacherEmail = value; }
    public string TeacherMobile { get => teacherMobile; set => teacherMobile = value; }
    public string TeacherQualification { get => teacherQualification; set => teacherQualification = value; }
    public string TeacherImage { get => teacherImage; set => teacherImage = value; }
    public string TeacherAddress { get => teacherAddress; set => teacherAddress = value; }
    public int CityIdFk { get => cityIdFk; set => cityIdFk = value; }
    public string CityName { get => cityName; set => cityName = value; }
    public string StateName { get => stateName; set => stateName = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string Subjects { get => subjects; set => subjects = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

