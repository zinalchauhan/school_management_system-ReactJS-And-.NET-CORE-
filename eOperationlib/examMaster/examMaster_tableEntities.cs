using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class examMaster_tableEntities
    {
        private int examIdPk = 0;
        private string examName = "";
        private int examTotalMarks = 0;
        private string examStartDate = "";
        private string examEndDate = "";
        private int mediumIdFk = 0;
        private string mediumName = "";
        private string resultDate = "";
        private int academicYear = 0;
        private int isActive = 0;

    public int ExamIdPk { get => examIdPk; set => examIdPk = value; }
    public string ExamName { get => examName; set => examName = value; }
    public int ExamTotalMarks { get => examTotalMarks; set => examTotalMarks = value; }
    public string ExamStartDate { get => examStartDate; set => examStartDate = value; }
    public string ExamEndDate { get => examEndDate; set => examEndDate = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string ResultDate { get => resultDate; set => resultDate = value; }
    public int AcademicYear { get => academicYear; set => academicYear = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
}

