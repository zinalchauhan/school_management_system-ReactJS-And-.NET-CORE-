using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class eventMaster_tableEntities
    {
        private int eventIdPk = 0;
        private string eventName = "";
        private string eventTitle = "";
        private string eventDetail = "";
        private string eventDate = "";
        private int mediumIdFk = 0;
        private string mediumName = "";
        private int isActive = 0;

    public int EventIdPk { get => eventIdPk; set => eventIdPk = value; }
    public string EventName { get => eventName; set => eventName = value; }
    public string EventTitle { get => eventTitle; set => eventTitle = value; }
    public string EventDetail { get => eventDetail; set => eventDetail = value; }
    public string EventDate { get => eventDate; set => eventDate = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

