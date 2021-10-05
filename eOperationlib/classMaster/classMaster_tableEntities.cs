using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class classMaster_tableEntities
{

    private int classIdPk = 0;
    private int standardIdFk = 0;
    private int divisionIdFk = 0;
    private int isActive = 0;
    private string standardName = "";
    private string divisionName = "";

    public int ClassIdPk { get => classIdPk; set => classIdPk = value; }
    public int StandardIdFk { get => standardIdFk; set => standardIdFk = value; }
    public int DivisionIdFk { get => divisionIdFk; set => divisionIdFk = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public string StandardName { get => standardName; set => standardName = value; }
    public string DivisionName { get => divisionName; set => divisionName = value; }
}

