using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class questionPaperImageMaster_tableEntities
    {
        private int paperImageIdPk = 0;
        private int questionPaperIdFk = 0;
        private int standardIdFk = 0;
        private string standardName = "";
        private int subjectIdFk = 0;
        private string subjectName = "";
        private int mediumIdFk = 0;
        private string mediumName = "";
        private string paperImageName = "";
        private int isActive = 0;

    public int PaperImageIdPk { get => paperImageIdPk; set => paperImageIdPk = value; }
    public int QuestionPaperIdFk { get => questionPaperIdFk; set => questionPaperIdFk = value; }
    public int StandardIdFk { get => standardIdFk; set => standardIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public int SubjectIdFk { get => subjectIdFk; set => subjectIdFk = value; }
    public string SubjectName { get => subjectName; set => subjectName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public string PaperImageName { get => paperImageName; set => paperImageName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

