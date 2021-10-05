using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class mediumMaster_tableEntities
    {
        private int mediumIdPk = 0;
        private string mediumName = "";
        private int isActive = 0;

    public int MediumIdPk { get => mediumIdPk; set => mediumIdPk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

