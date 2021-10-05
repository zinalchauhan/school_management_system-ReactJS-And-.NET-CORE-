using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class principalMaster_tableEntities
    {
        private int principalIdPk = 0;
        private string principalName = "";
        private string principalEmail = "";
        private string principalMobile = "";
        private string principalQualification = "";
        private string principalImage = "";
        private string principalAddress = "";
        private int cityIdFk = 0;
        private string cityName = "";
        private string stateName = "";
        private string mediumName = "";
        private int mediumIdFk = 0;
        private string standards = "";
        private int isActive = 0;

    public int PrincipalIdPk { get => principalIdPk; set => principalIdPk = value; }
    public string PrincipalName { get => principalName; set => principalName = value; }
    public string PrincipalEmail { get => principalEmail; set => principalEmail = value; }
    public string PrincipalMobile { get => principalMobile; set => principalMobile = value; }
    public string PrincipalQualification { get => principalQualification; set => principalQualification = value; }
    public string PrincipalImage { get => principalImage; set => principalImage = value; }
    public string PrincipalAddress { get => principalAddress; set => principalAddress = value; }
    public int CityIdFk { get => cityIdFk; set => cityIdFk = value; }
    public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
    public string Standards { get => standards; set => standards = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string CityName { get => cityName; set => cityName = value; }
    public string StateName { get => stateName; set => stateName = value; }
    public string MediumName { get => mediumName; set => mediumName = value; }
}

