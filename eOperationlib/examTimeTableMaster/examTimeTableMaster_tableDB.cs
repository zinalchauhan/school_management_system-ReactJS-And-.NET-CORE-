using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public class examTimeTableMaster_tableDB : clsDB_Operation
{
    private const string mstrModuleName = "examTimeTableMaster";

    public examTimeTableMaster_tableDB()
    {
    }

    public int OnInsert(examTimeTableMaster_tableEntities obj)
    {
        string strQ = "";
        try
        {
            strQ = @"INSERT INTO [examTimeTableMaster]
                                   ([examIdFk],[standardIdFk],[subjectIdFk],[examDate])
                             VALUES
                                   (@examIdFK,@standardIdFk,@subjectIdFk,@examDate)";

            OnClearParameter();

            AddParameter("@examIdFk", SqlDbType.Int, 50, obj.ExamIdFk, ParameterDirection.Input);
            AddParameter("@standardIdFk", SqlDbType.Int, 50, obj.StandardIdFk, ParameterDirection.Input);
            AddParameter("@subjectIdFk", SqlDbType.Int, 50, obj.SubjectIdFk, ParameterDirection.Input);
            AddParameter("@examDate", SqlDbType.VarChar, 50, obj.ExamDate, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
        }
        catch (Exception ex)
        {

            throw ex;
        }
    }

    public int OnUpdate(examTimeTableMaster_tableEntities obj)
    {
        string strQ = "";
        try
        {


            strQ = @"UPDATE [examTimeTableMaster]
                             SET    [examIdFk]=@examIdFk,
                                    [standardIdFk]=@standardIdFk,
                                    [subjectIdFk]=@subjectIdFk,
                                    [examDate]=@examDate,
                                    [isActive] = 1    
                         WHERE [examTtIdPk]=@examTtIdPk";

            OnClearParameter();
            AddParameter("@examTtIdPk", SqlDbType.Int, 50, obj.ExamTtIdPk, ParameterDirection.Input);
            AddParameter("@examIdFk", SqlDbType.Int, 50, obj.ExamIdFk, ParameterDirection.Input);
            AddParameter("@standardIdFk", SqlDbType.Int, 50, obj.StandardIdFk, ParameterDirection.Input);
            AddParameter("@subjectIdFk", SqlDbType.Int, 50, obj.SubjectIdFk, ParameterDirection.Input);
            AddParameter("@examDate", SqlDbType.VarChar, 50, obj.ExamDate, ParameterDirection.Input);
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
            strQ += @"UPDATE  [examTimeTableMaster]
                            SET [isActive] =  0
                         WHERE [examTtIdPk]=@examTtIdPk";

            OnClearParameter();
            AddParameter("@examTtIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
            return OnExecNonQuery(strQ);
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    private examTimeTableMaster_tableEntities BuildEntities(DataRow drRow)
    {

        try
        {
            //DateTime dtdata;
            examTimeTableMaster_tableEntities obj = new examTimeTableMaster_tableEntities();

            obj.ExamTtIdPk = (drRow["examTtIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["examTtIdPk"];
            obj.ExamIdFk = (drRow["examIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["examIdFk"];
            obj.ExamName = (drRow["examName"].Equals(DBNull.Value)) ? "" : (string)drRow["examName"];
            obj.StandardIdFk = (drRow["standardIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["standardIdFk"];
            obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
            obj.SubjectIdFk = (drRow["subjectIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["subjectIdFk"];
            obj.SubjectName = (drRow["subjectName"].Equals(DBNull.Value)) ? "" : (string)drRow["subjectName"];
            obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
            obj.ExamDate = (drRow["examDate"].Equals(DBNull.Value)) ? "" : (string)drRow["examDate"];
            obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
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

    public examTimeTableMaster_tableEntities OnLastRecordInserted()
    {
        Exception exForce;
        DataTable dtTable;

        examTimeTableMaster_tableEntities obj = new examTimeTableMaster_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT IDENT_CURRENT('examTimeTableMaster') ";

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
                obj = BuildEntities(dtTable.Rows[0]);
            }

            return obj;

        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    public examTimeTableMaster_tableEntities OnGetData(int ID)
    {
        Exception exForce;
        DataTable dtTable;

        examTimeTableMaster_tableEntities obj = new examTimeTableMaster_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT et.* , e.examName,e.mediumIdFk , st.standardName , sb.subjectName , e.examStartDate , m.mediumName
                            FROM [examTimeTableMaster] et 
                            JOIN [examMaster] e ON et.[examIdFk] = e.[examIdPk]
                            JOIN [mediumMaster] m ON e.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [standardMaster] st ON et.[standardIdFk] = st.[standardIdPk]
                            JOIN [subjectMaster] sb ON et.[subjectIdFk] = sb.[subjectIdPk]
                            WHERE [examTtIdPk] = @examTtIdPk
                            and et.[isActive] = 1";

            OnClearParameter();
            AddParameter("examTtIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

    public List<examTimeTableMaster_tableEntities> OnGetListdt()
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<examTimeTableMaster_tableEntities> oList = new List<examTimeTableMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT et.* ,e.mediumIdFk, e.examName , st.standardName , sb.subjectName , e.examStartDate , m.mediumName 
                            FROM [examTimeTableMaster] et 
                            JOIN [examMaster] e ON et.[examIdFk] = e.[examIdPk]
                            JOIN [mediumMaster] m ON e.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [standardMaster] st ON et.[standardIdFk] = st.[standardIdPk]
                            JOIN [subjectMaster] sb ON et.[subjectIdFk] = sb.[subjectIdPk]
                            WHERE et.[isActive] = 1 ";
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
            strQ = @"SELECT [examTimeTableMaster].examTimeTableIdPk
                                   ,[examTimeTableMaster].examTimeTableName
                                    FROM [examTimeTableMaster] 
                                    WHERE [examTimeTableMaster].isActive = '1'";

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
                objData.ID = dtTable.Rows[intRow]["examTimeTableIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["examTimeTableIdPk"];
                objData.NAME = dtTable.Rows[intRow]["examTimeTableName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["examTimeTableName"];
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

