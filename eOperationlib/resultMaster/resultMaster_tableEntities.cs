using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class resultMaster_tableEntities
    {
        private int resultIdPk = 0;
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
        private string filePath = "";
        private string addedOn = "";

    public int ResultIdPk { get => resultIdPk; set => resultIdPk = value; }
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
    public string FilePath { get => filePath; set => filePath = value; }
    public string AddedOn { get => addedOn; set => addedOn = value; }
}

