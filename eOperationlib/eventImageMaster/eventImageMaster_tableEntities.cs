using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class eventImageMaster_tableEntities
    {
        private int eventImageIdPk = 0;
        private int eventIdFk = 0;
        private string eventName = "";
        private string eventImage = "";
        private int isActive = 0;

    public int EventImageIdPk { get => eventImageIdPk; set => eventImageIdPk = value; }
    public int EventIdFk { get => eventIdFk; set => eventIdFk = value; }
    public string EventImage { get => eventImage; set => eventImage = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string EventName { get => eventName; set => eventName = value; }
}

