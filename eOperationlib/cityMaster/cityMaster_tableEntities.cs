using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class cityMaster_tableEntities
{

    private int cityIdPk = 0;
    private string cityName = "";
    private int stateIdFk = 0;
    private string stateName = "";

    public int CityIdPk { get => cityIdPk; set => cityIdPk = value; }
    public string CityName { get => cityName; set => cityName = value; }
    public int StateIdFk { get => stateIdFk; set => stateIdFk = value; }
    public string StateName { get => stateName; set => stateName = value; }
}

