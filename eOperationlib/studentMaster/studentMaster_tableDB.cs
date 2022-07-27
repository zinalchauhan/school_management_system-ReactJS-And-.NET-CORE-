using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class studentMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "studentMaster";

        public studentMaster_tableDB()
        {
        }

        public int OnInsert(studentMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [studentMaster]
                                   ([studentRollNo],[studentGrNo],[mediumIdFk],[classIdFk],[studentFname],[studentMname],[studentLname],[studentImage],[studentDob],[studentGender],[motherMobile],[fatherMobile],[categoryIdFk])
                             VALUES
                                   (@studentRollNo,@studentGrNo,@mediumIdFk,@classIdFk,@studentFname,@studentMname,@studentLname,@studentImage,@studentDob,@studentGender,@motherMobile,@fatherMobile,@categoryIdFk)";

                OnClearParameter();

                AddParameter("@studentRollNo", SqlDbType.Int, 50, obj.StudentRollNo, ParameterDirection.Input);
                AddParameter("@studentGrNo", SqlDbType.Int, 50, obj.StudentGrNo, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@studentFname", SqlDbType.VarChar, 50, obj.StudentFname, ParameterDirection.Input);
                AddParameter("@studentMname", SqlDbType.VarChar, 50, obj.StudentMname, ParameterDirection.Input);
                AddParameter("@studentLname", SqlDbType.VarChar, 50, obj.StudentLname, ParameterDirection.Input);
                AddParameter("@studentImage", SqlDbType.VarChar, 50, obj.StudentImage, ParameterDirection.Input);
                AddParameter("@studentDob", SqlDbType.VarChar, 50, obj.StudentDob, ParameterDirection.Input);
                AddParameter("@studentGender", SqlDbType.VarChar, 50, obj.StudentGender, ParameterDirection.Input);
                AddParameter("@motherMobile", SqlDbType.VarChar, 50, obj.MotherMobile, ParameterDirection.Input);
                AddParameter("@fatherMobile", SqlDbType.VarChar, 50, obj.FatherMobile, ParameterDirection.Input);
                AddParameter("@categoryIdFk", SqlDbType.Int, 50, obj.CategoryIdFk, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

    public int studCount()
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        int count = 0;
        string strQ = "";

        try
        {
            strQ = @"select count(studentIdPk) as tot
                     from studentMaster
                     where isActive = 1";
            OnClearParameter();


            dtTable = OnExecQuery(strQ, "list").Tables[0];



            if (!string.IsNullOrEmpty(ErrorMessage))
            {
                exForce = new Exception(ErrorNumber + ": " + ErrorMessage);
                throw exForce;
            }
            if (dtTable.Rows.Count != 0)
            {
                count = Int32.Parse(dtTable.Rows[0].ItemArray[0].ToString());
            }
            return count;
        }
        catch (Exception ex)
        {
            throw ex;
            return 0;
        }
        finally
        {
            //    DB_Config.OnStopConnection();
        }
    }
    public int OnUpdate(studentMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [studentMaster]
                             SET    [studentRollNo]=@studentRollNo,
                                    [studentGrNo]=@studentGrNo,
                                    [mediumIdFk]=@mediumIdFk,
                                    [classIdFk]=@classIdFk,
                                    [studentFname]=@studentFname,
                                    [studentMname]=@studentMname,
                                    [studentLname]=@studentLname,
                                    [studentImage]=@studentImage,
                                    [studentDob]=@studentDob,
                                    [studentGender]=@studentGender,
                                    [motherMobile]=@motherMobile,
                                    [fatherMobile]=@fatherMobile,
                                    [categoryIdFk]=@categoryIdFk,
                                    [isActive] = 1    
                         WHERE [studentIdPk]=@studentIdPk";

                OnClearParameter();
                AddParameter("@studentIdPk", SqlDbType.Int, 50, obj.StudentIdPk, ParameterDirection.Input);
                AddParameter("@studentRollNo", SqlDbType.Int, 50, obj.StudentRollNo, ParameterDirection.Input);
                AddParameter("@studentGrNo", SqlDbType.Int, 50, obj.StudentGrNo, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@studentFname", SqlDbType.VarChar, 50, obj.StudentFname, ParameterDirection.Input);
                AddParameter("@studentMname", SqlDbType.VarChar, 50, obj.StudentMname, ParameterDirection.Input);
                AddParameter("@studentLname", SqlDbType.VarChar, 50, obj.StudentLname, ParameterDirection.Input);
                AddParameter("@studentImage", SqlDbType.VarChar, 50, obj.StudentImage, ParameterDirection.Input);
                AddParameter("@studentDob", SqlDbType.VarChar, 50, obj.StudentDob, ParameterDirection.Input);
                AddParameter("@studentGender", SqlDbType.VarChar, 50, obj.StudentGender, ParameterDirection.Input);
                AddParameter("@motherMobile", SqlDbType.VarChar, 50, obj.MotherMobile, ParameterDirection.Input);
                AddParameter("@fatherMobile", SqlDbType.VarChar, 50, obj.FatherMobile, ParameterDirection.Input);
                AddParameter("@categoryIdFk", SqlDbType.Int, 50, obj.CategoryIdFk, ParameterDirection.Input);
                AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

            return OnExecNonQuery(strQ);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        public int OnDelete(int ID)
        {
            string strQ = "";
            try
            {
                strQ += @"UPDATE  [studentMaster]
                            SET [isActive] =  0
                         WHERE [studentIdPk]=@studentIdPk";

                OnClearParameter();
                AddParameter("@studentIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private studentMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                studentMaster_tableEntities obj = new studentMaster_tableEntities();

                obj.StudentIdPk = (drRow["studentIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentIdPk"];
                obj.StudentRollNo = (drRow["studentRollNo"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentRollNo"];
                obj.StudentGrNo = (drRow["studentGrNo"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentGrNo"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
                obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
                obj.ClassIdFk = (drRow["classIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classIdFk"];
                obj.StandardIdPk = (drRow["standardIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["standardIdPk"];
                obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
                obj.DivisionName = (drRow["divisionName"].Equals(DBNull.Value)) ? "" : (string)drRow["divisionName"];
                obj.StudentFname = (drRow["studentFname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentFname"];
                obj.StudentMname = (drRow["studentMname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentMname"];
                obj.StudentLname = (drRow["studentLname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentLname"];
                obj.StudentImage = (drRow["studentImage"].Equals(DBNull.Value)) ? "" : (string)drRow["studentImage"];
                obj.StudentDob = (drRow["studentDob"].Equals(DBNull.Value)) ? "" : (string)drRow["studentDob"];
                obj.StudentGender = (drRow["studentGender"].Equals(DBNull.Value)) ? "" : (string)drRow["studentGender"];
                obj.MotherMobile = (drRow["motherMobile"].Equals(DBNull.Value)) ? "" : (string)drRow["motherMobile"];
                obj.FatherMobile = (drRow["fatherMobile"].Equals(DBNull.Value)) ? "" : (string)drRow["fatherMobile"];
                obj.CategoryIdFk = (drRow["categoryIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["categoryIdFk"];
                obj.CategoryName = (drRow["categoryName"].Equals(DBNull.Value)) ? "" : (string)drRow["categoryName"];
                obj.IsActive = (drRow["isActive"].Equals(DBNull.Value)) ? 0 : Int32.Parse(drRow["isActive"].ToString());

            //if (DateTime.TryParseExact((string)drRow["addon"], "yyyyMMdd", CultureInfo.InvariantCulture, DateTimeStyles.None, out dtdata))
            //{
            //    obj.Addon = dtdata;
            //}

            //if (DateTime.TryParseExact((string)drRow["modifyon"], "yyyyMMdd", CultureInfo.InvariantCulture, DateTimeStyles.None, out dtdata))
            //{
            //    obj.Modifyon = dtdata;
            //}

            return obj;
            }
            catch (Exception ex)
            {
                throw ex;
                return null;
            }
        }

    public int OnLastRecordInserted()
    {
        Exception exForce;
        DataTable dtTable;

        int lastId = 0;
        string strQ = "";

        try
        {
            strQ = @"SELECT IDENT_CURRENT('studentMaster') ";

            OnClearParameter();

            //DB_Config.OnStartConnection();
            dtTable = OnExecQuery(strQ, "list").Tables[0];


            if (!string.IsNullOrEmpty(ErrorMessage))
            {
                exForce = new Exception(ErrorNumber + ": " + ErrorMessage);
                throw exForce;
            }


            if (dtTable.Rows.Count != 0)
            {
                lastId = Int32.Parse(dtTable.Rows[0].ItemArray[0].ToString());
            }

            return lastId;

        }
        catch (Exception ex)
        {
            throw ex;
        }
    }


    public studentMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            studentMaster_tableEntities obj = new studentMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT s.*, m.mediumName , ct.categoryName, st.standardIdPk , st.standardName , d.divisionName
                            FROM [studentMaster] s 
                            JOIN [mediumMaster] m ON s.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [categoryMaster] ct ON s.[categoryIdFk] = ct.[categoryIdPk]
                            WHERE [studentIdPk] = @studentIdPk
                            and s.[isActive] = 1";

                OnClearParameter();
                AddParameter("studentIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

                //DB_Config.OnStartConnection();
                dtTable = OnExecQuery(strQ, "list").Tables[0];


                if (!string.IsNullOrEmpty(ErrorMessage))
                {
                    exForce = new Exception(ErrorNumber + ": " + ErrorMessage);
                    throw exForce;
                }


                if (dtTable.Rows.Count != 0)
                {
                    obj = BuildEntities(dtTable.Rows[0]);
                }

                return obj;

            }
            catch (Exception ex)
            {
                throw ex;
                return obj;
            }
        }

    public List<studentMaster_tableEntities> classWiseStud(int ID)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<studentMaster_tableEntities> oList = new List<studentMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT s.*, m.mediumName , ct.categoryName, st.standardIdPk , st.standardName , d.divisionName
                            FROM [studentMaster] s 
                            JOIN [mediumMaster] m ON s.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [categoryMaster] ct ON s.[categoryIdFk] = ct.[categoryIdPk]
                            WHERE s.[classIdFk] = @classIdFk
                            and s.[isActive] = 1";
            OnClearParameter();
            AddParameter("@classIdFk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

            dtTable = OnExecQuery(strQ, "list").Tables[0];



            if (!string.IsNullOrEmpty(ErrorMessage))
            {
                exForce = new Exception(ErrorNumber + ": " + ErrorMessage);
                throw exForce;
            }
            int intRow = 0;
            while (intRow < dtTable.Rows.Count)
            {
                oList.Add(BuildEntities(dtTable.Rows[intRow]));
                intRow = intRow + 1;
            }
            return oList;
        }
        catch (Exception ex)
        {
            throw ex;
            return null;
        }
        finally
        {
            //    DB_Config.OnStopConnection();
        }
    }


    public List<studentMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<studentMaster_tableEntities> oList = new List<studentMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT s.*, m.mediumName , ct.categoryName,st.standardIdPk  , st.standardName , d.divisionName
                            FROM [studentMaster] s 
                            JOIN [mediumMaster] m ON s.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [categoryMaster] ct ON s.[categoryIdFk] = ct.[categoryIdPk]
                            WHERE s.[isActive] = 1 ";
                OnClearParameter();

                dtTable = OnExecQuery(strQ, "list").Tables[0];



                if (!string.IsNullOrEmpty(ErrorMessage))
                {
                    exForce = new Exception(ErrorNumber + ": " + ErrorMessage);
                    throw exForce;
                }
                int intRow = 0;
                while (intRow < dtTable.Rows.Count)
                {
                    oList.Add(BuildEntities(dtTable.Rows[intRow]));
                    intRow = intRow + 1;
                }
                return oList;
            }
            catch (Exception ex)
            {
                throw ex;
                return null;
            }
            finally
            {
                //    DB_Config.OnStopConnection();
            }
        }
        public List<ComboboxItem> OnGetListForCombo()
        {
            Exception exForce;
            DataTable dtTable;

            List<ComboboxItem> oList = new List<ComboboxItem>();

            string strQ = "";

            try
            {

                OnClearParameter();
                strQ = @"SELECT [studentMaster].studentIdPk
                                   ,[studentMaster].studentName
                                    FROM [studentMaster] 
                                    WHERE [studentMaster].isActive = '1'";

                dtTable = OnExecQuery(strQ, "list").Tables[0];

                if (!string.IsNullOrEmpty(ErrorMessage))
                {
                    exForce = new Exception(ErrorNumber + ": " + ErrorMessage);
                    throw exForce;
                }

                int intRow = 0;
                while (intRow < dtTable.Rows.Count)
                {
                    ComboboxItem objData = new ComboboxItem();
                    objData.ID = dtTable.Rows[intRow]["studentIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["studentIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["studentName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["studentName"];
                    oList.Add(objData);

                    intRow = intRow + 1;
                }
                return oList;
            }
            catch (Exception ex)
            {
                throw ex;
                return oList;
            }
        }
 }

