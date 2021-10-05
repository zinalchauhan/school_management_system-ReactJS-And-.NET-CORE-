using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class timetableSettingMaster_tableEntities
    {
        private int settingIdPk = 0;
        private string day = "";
        private string schoolStartTime = "";
        private int lactureNo = 0;
        private string lactureTime = "";
        private int breakNo = 0;
        private int afterLacture = 0;
        private int academicYear = 0;
        private int mediumIdFk = 0;
        private string mediumName = "";
        private int isActive = 0;

    public int SettingIdPk { get => settingIdPk; set => settingIdPk = value; }
    public string Day { get => day; set => day = value; }
    public string SchoolStartTime { get => schoolStartTime; set => schoolStartTime = value; }
    public int LactureNo { get => lactureNo; set => lactureNo = value; }
    public string LactureTime { get => lactureTime; set => lactureTime = value; }
    public int BreakNo { get => breakNo; set => breakNo = value; }
    public int AfterLacture { get => afterLacture; set => afterLacture = value; }
    public int AcademicYear { get => academicYear; set => academicYear = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

