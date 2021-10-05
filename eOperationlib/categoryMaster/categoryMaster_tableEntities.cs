using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class categoryMaster_tableEntities
    {
        private int categoryIdPk = 0;
        private string categoryName = "";
        private int isActive = 0;

    public int CategoryIdPk { get => categoryIdPk; set => categoryIdPk = value; }
    public string CategoryName { get => categoryName; set => categoryName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

