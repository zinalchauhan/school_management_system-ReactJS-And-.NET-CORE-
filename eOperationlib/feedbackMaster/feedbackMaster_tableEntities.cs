using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class feedbackMaster_tableEntities
    {
        private int feedbackIdPk = 0;
        private int userIdFk = 0;
        private string userType = "";
        private string feedbackSubject = "";
        private string feedbackDetail = "";
        private string reply = "";
        private string addedOn = "";
        private int isActive = 0;

    public int FeedbackIdPk { get => feedbackIdPk; set => feedbackIdPk = value; }
    public int UserIdFk { get => userIdFk; set => userIdFk = value; }
    public string UserType { get => userType; set => userType = value; }
    public string FeedbackSubject { get => feedbackSubject; set => feedbackSubject = value; }
    public string FeedbackDetail { get => feedbackDetail; set => feedbackDetail = value; }
    public string Reply { get => reply; set => reply = value; }
    public string AddedOn { get => addedOn; set => addedOn = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

