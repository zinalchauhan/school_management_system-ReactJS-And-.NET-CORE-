using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class leaveRequestMaster_tableEntities
    {
        private int leaveRequestIdPk = 0;
        private int studentIdFk = 0;
        private string studentName = "";
        private int classIdFk = 0;
        private int standardIdFk = 0;
        private string standardName = "";
        private int divisionIdFk = 0;
        private string divisionName = "";
        private int mediumIdFk = 0;
        private string mediumName = "";  
        private int categoryIdFk = 0;
        private string categoryName = "";
        private int isActive = 0;
        private string addedOn = "";
        private string userType = "";
        private string leaveRequestTitle = "";
        private string leaveRequestDetail = "";

    public int LeaveRequestIdPk { get => leaveRequestIdPk; set => leaveRequestIdPk = value; }
    public int StudentIdFk { get => studentIdFk; set => studentIdFk = value; }
    public string StudentName { get => studentName; set => studentName = value; }
    public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
    public int StandardIdFk { get => standardIdFk; set => standardIdFk = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public int DivisionIdFk { get => divisionIdFk; set => divisionIdFk = value; }
    public string DivisionName { get => divisionName; set => divisionName = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
    public int CategoryIdFk { get => categoryIdFk; set => categoryIdFk = value; }
    public string CategoryName { get => categoryName; set => categoryName = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string AddedOn { get => addedOn; set => addedOn = value; }
    public string UserType { get => userType; set => userType = value; }
    public string LeaveRequestTitle { get => leaveRequestTitle; set => leaveRequestTitle = value; }
    public string LeaveRequestDetail { get => leaveRequestDetail; set => leaveRequestDetail = value; }
}

