using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class questionPaperMaster_tableEntities
    {
        private int questionPaperIdPk = 0;
        private int standardIdFk = 0;
        private string standardName = "";
        private int subjectIdFk = 0;
        private string subjectName = "";
        private int mediumIdFk = 0;
        private string mediumName = "";
        private int academicYear = 0;
        private int isActive = 0;

    public int QuestionPaperIdPk { get => questionPaperIdPk; set => questionPaperIdPk = value; }
    public int StandardIdFk { get => standardIdFk; set => standardIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public int SubjectIdFk { get => subjectIdFk; set => subjectIdFk = value; }
    public string SubjectName { get => subjectName; set => subjectName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int AcademicYear { get => academicYear; set => academicYear = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

