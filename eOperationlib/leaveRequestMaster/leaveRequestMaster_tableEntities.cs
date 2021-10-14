using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class leaveRequestMaster_tableEntities
    {
        private int leaveRequestIdPk = 0;
        private int studentIdFk = 0;
        private string studentMname = "";
        private int classIdFk = 0;
        private string standardName = "";
        private string divisionName = "";
        private int isActive = 0;
        private string addedOn = "";
        private string userType = "";
        private string leaveRequestTitle = "";
        private string leaveRequestDetail = "";

    public int LeaveRequestIdPk { get => leaveRequestIdPk; set => leaveRequestIdPk = value; }
    public int StudentIdFk { get => studentIdFk; set => studentIdFk = value; }
    public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public string DivisionName { get => divisionName; set => divisionName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string AddedOn { get => addedOn; set => addedOn = value; }
    public string UserType { get => userType; set => userType = value; }
    public string LeaveRequestTitle { get => leaveRequestTitle; set => leaveRequestTitle = value; }
    public string LeaveRequestDetail { get => leaveRequestDetail; set => leaveRequestDetail = value; }
    public string StudentMname { get => studentMname; set => studentMname = value; }
}

