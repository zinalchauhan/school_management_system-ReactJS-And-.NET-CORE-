using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class authMaster_tableEntities
    {
        private int authIdPk = 0;
        private string userName = "";
        private string userType = "";
        private int userIdFk = 0;
        private string userPassword = "";
        private int isActive = 0;

    public int AuthIdPk { get => authIdPk; set => authIdPk = value; }
    public string UserName { get => userName; set => userName = value; }
    public string UserType { get => userType; set => userType = value; }
    public int UserIdFk { get => userIdFk; set => userIdFk = value; }
    public string UserPassword { get => userPassword; set => userPassword = value; }
    public int IsActive { get => isActive; set => isActive = value; }
}

