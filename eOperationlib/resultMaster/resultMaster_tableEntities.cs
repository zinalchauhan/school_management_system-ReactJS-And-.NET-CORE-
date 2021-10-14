using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class resultMaster_tableEntities
    {
        private int resultIdPk = 0;
        private int studentIdFk = 0;
        private string studentMname = "";
        private string filePath = "";
        private string addedOn = "";
        private int isActive = 0;

    public int ResultIdPk { get => resultIdPk; set => resultIdPk = value; }
    public int StudentIdFk { get => studentIdFk; set => studentIdFk = value; }
    public string StudentMname { get => studentMname; set => studentMname = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string FilePath { get => filePath; set => filePath = value; }
    public string AddedOn { get => addedOn; set => addedOn = value; }
}

