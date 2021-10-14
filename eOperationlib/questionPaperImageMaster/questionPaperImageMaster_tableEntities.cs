using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class questionPaperImageMaster_tableEntities
    {
        private int paperImageIdPk = 0;
        private int questionPaperIdFk = 0;
        private string paperImageName = "";
        private int isActive = 0;

    public int PaperImageIdPk { get => paperImageIdPk; set => paperImageIdPk = value; }
    public int QuestionPaperIdFk { get => questionPaperIdFk; set => questionPaperIdFk = value; }
    public string PaperImageName { get => paperImageName; set => paperImageName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

