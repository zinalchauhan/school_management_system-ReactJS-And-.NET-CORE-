using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class examTimeTableMaster_tableEntities
    {
        private int examTtIdPk = 0;
        private int examIdFk = 0;
        private string examName = "";
    private string examStartDate = "";
    private string mediumName = "";
        private int standardIdFk = 0;
        private string standardName = "";
        private int subjectIdFk = 0;
        private string subjectName = "";
        private string examDate = "";
        private int isActive = 0;

        public int ExamTtIdPk { get => examTtIdPk; set => examTtIdPk = value; }
        public int ExamIdFk { get => examIdFk; set => examIdFk = value; }
        public string ExamName { get => examName; set => examName = value; }
        public int StandardIdFk { get => standardIdFk; set => standardIdFk = value; }
        public string StandardName { get => standardName; set => standardName = value; }
        public int SubjectIdFk { get => subjectIdFk; set => subjectIdFk = value; }
        public string SubjectName { get => subjectName; set => subjectName = value; }
        public string ExamDate { get => examDate; set => examDate = value; }
        public int IsActive { get => isActive; set => isActive = value; }
    public string ExamStartDate { get => examStartDate; set => examStartDate = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
}

