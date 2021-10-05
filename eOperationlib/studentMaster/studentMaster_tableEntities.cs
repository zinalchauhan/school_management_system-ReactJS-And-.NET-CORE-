using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


   public class studentMaster_tableEntities
    {
        private int studentIdPk = 0;
        private int studentRollNo = 0;
        private int studentGrNo = 0;
        private int mediumIdFk = 0;
        private string mediumName = "";
        private int classIdFk = 0;
        private int standardIdFk = 0;
        private string standardName = "";
        private int divisionIdFk = 0;
        private string divisionName = "";
        private string studentFname = "";
        private string studentMname = "";
        private string studentLname = "";
        private string studentImage = "";
        private string studentDob = "";
        private string studentGender = "";
        private string studentMobile = "";
        private string fatherMobile = "";
        private int categoryIdFk = 0;
        private string categoryName = "";
        private int isActive = 0;

        public int StudentIdPk { get => studentIdPk; set => studentIdPk = value; }
        public int StudentRollNo { get => studentRollNo; set => studentRollNo = value; }
        public int StudentGrNo { get => studentGrNo; set => studentGrNo = value; }
        public int MediumIdFk { get => mediumIdFk; set => mediumIdFk = value; }
        public string MediumName { get => mediumName; set => mediumName = value; }
        public int ClassIdFk { get => classIdFk; set => classIdFk = value; }
        public string StudentFname { get => studentFname; set => studentFname = value; }
        public string StudentMname { get => studentMname; set => studentMname = value; }
        public string StudentLname { get => studentLname; set => studentLname = value; }
        public string StudentImage { get => studentImage; set => studentImage = value; }
        public string StudentDob { get => studentDob; set => studentDob = value; }
        public string StudentGender { get => studentGender; set => studentGender = value; }
        public string StudentMobile { get => studentMobile; set => studentMobile = value; }
        public string FatherMobile { get => fatherMobile; set => fatherMobile = value; }
        public int CategoryIdFk { get => categoryIdFk; set => categoryIdFk = value; }
        public string CategoryName { get => categoryName; set => categoryName = value; }
        public int IsActive { get => isActive; set => isActive = value; }
        public int StandardIdFk { get => standardIdFk; set => standardIdFk = value; }
        public string StandardName { get => standardName; set => standardName = value; }
        public int DivisionIdFk { get => divisionIdFk; set => divisionIdFk = value; }
        public string DivisionName { get => divisionName; set => divisionName = value; }
}

