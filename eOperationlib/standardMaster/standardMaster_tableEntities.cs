using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class standardMaster_tableEntities
    {
        private int standardIdPk = 0;
        private string standardName = "";
        private int isActive = 0;

    public int StandardIdPk { get => standardIdPk; set => standardIdPk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

