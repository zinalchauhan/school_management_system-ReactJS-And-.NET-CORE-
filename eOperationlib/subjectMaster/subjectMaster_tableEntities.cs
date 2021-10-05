using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class subjectMaster_tableEntities
    {
        private int subjectIdPk = 0;
        private string subjectName = "";
        private int isActive = 0;

    public int SubjectIdPk { get => subjectIdPk; set => subjectIdPk = value; }
    public string SubjectName { get => subjectName; set => subjectName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

