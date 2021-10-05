using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class divisionMaster_tableEntities
    {
        private int divisionIdPk = 0;
        private string divisionName = "";
        private int isActive = 0;

    public int DivisionIdPk { get => divisionIdPk; set => divisionIdPk = value; }
    public string DivisionName { get => divisionName; set => divisionName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

