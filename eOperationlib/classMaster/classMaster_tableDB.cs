using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public class classMaster_tableDB : clsDB_Operation
{

    private const string mstrModuleName = "classMasters";

    public classMaster_tableDB()
        
    {
    }

    public int OnInsert(classMaster_tableEntities obj)
    {

        string strQ = "";
        try
        {
            strQ = @"INSERT INTO [classMaster]
                                   ([standardIdFk],[divisionIdFk])
                             VALUES
                                   (@standardIdFk,@divisionIdFk)";

            OnClearParameter();
            AddParameter("@standardIdFk", SqlDbType.VarChar, 50, obj.StandardIdFk, ParameterDirection.Input);
            AddParameter("@divisionIdFk", SqlDbType.VarChar, 50, obj.DivisionIdFk, ParameterDirection.Input);
            

            return OnExecNonQuery(strQ);


        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    public int OnUpdate(classMaster_tableEntities obj)
    {
        string strQ = "";
        try
        {


            strQ = @"UPDATE [classMaster]
                             SET    [standardIdFk]=@standardIdFk,
                                    [divisionIdFk]=@divisionIdFk,
                                    [isActive] = 1
                         WHERE [classIdPk]=@classIdPk ;";
            OnClearParameter();
            AddParameter("@classIdPk", SqlDbType.Int, 50, obj.ClassIdPk, ParameterDirection.Input);
            AddParameter("@standardIdFk", SqlDbType.VarChar, 50, obj.StandardIdFk, ParameterDirection.Input);
            AddParameter("@divisionIdFk", SqlDbType.VarChar, 50, obj.DivisionIdFk, ParameterDirection.Input);
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
            strQ += @"UPDATE [classMaster] 
                        SET [isActive] = 0
                         WHERE [classIdPk]=@classIdPk";

            OnClearParameter();
            AddParameter("@classIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
            return OnExecNonQuery(strQ);



        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    private classMaster_tableEntities BuildEntities(DataRow drRow)
    {

        try
        {
            //DateTime dtdata;
            classMaster_tableEntities obj = new classMaster_tableEntities();

            obj.ClassIdPk = (drRow["classIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classIdPk"];
            obj.StandardIdFk = (drRow["standardIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["standardIdFk"];
            obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
            obj.DivisionIdFk = (drRow["divisionIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["divisionIdFk"];
            obj.DivisionName = (drRow["divisionName"].Equals(DBNull.Value)) ? "" : (string)drRow["divisionName"];
            obj.IsActive = (drRow["isActive"].Equals(DBNull.Value)) ? 0 : (int)drRow["isActive"];


            //obj.Emp_dept_id = (drRow["DeptId_Fk"].Equals(DBNull.Value)) ? 0 : (int)drRow["DeptId_Fk"];
            //obj.Emp_qualification = (drRow["Qualification"].Equals(DBNull.Value)) ? "" : (string)drRow["Qualification"];
            //obj.IsActive = (drRow["isActive"].Equals(DBNull.Value)) ? 1 : (int)drRow["isActive"];

            //department_tableDB dept = new department_tableDB();
            //obj.ObjDept = dept.OnGetData(obj.Emp_dept_id);

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

    public classMaster_tableEntities OnLastRecordInserted()
    {
        Exception exForce;
        DataTable dtTable;

        classMaster_tableEntities obj = new classMaster_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT IDENT_CURRENT('classMaster') ";

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

    public classMaster_tableEntities OnGetData(int ID)
    {
        Exception exForce;
        DataTable dtTable;

        classMaster_tableEntities obj = new classMaster_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT c.* , s.standardName , d.divisionName
                        FROM [classMaster] c
                        JOIN [standardMaster] s ON c.[standardIdFk] = s.[standardIdPk]
                        JOIN [divisionMaster] d ON c.[divisionIdFk] = d.[divisionIdFk]
                        WHERE [classIdPk] = @classIdPk
                        AND isActive = 1";

            OnClearParameter();
            AddParameter("classIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

    public DataTable OnGetCategory()
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<classMaster_tableEntities> oList = new List<classMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT * FROM [classMaster]";
            OnClearParameter();
            dtTable = OnExecQuery(strQ, "list").Tables[0];



            if (!string.IsNullOrEmpty(ErrorMessage))
            {
                exForce = new Exception(ErrorNumber + ": " + ErrorMessage);
                throw exForce;
            }
            return dtTable;
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

    public List<classMaster_tableEntities> OnGetListdt()
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<classMaster_tableEntities> oList = new List<classMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT c.* , s.standardName , d.divisionName
                        FROM [classMaster]
                        JOIN [standardMaster] c ON c.[standardIdFk] = s.[standardIdPk]
                        JOIN [divisionMaster] d ON c.[divisionIdFk] = d.[divisionIdFk]
                        WHERE isActive = 1"; 
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
            strQ = @"SELECT classIdPk,className FROM [classMaster] ";
                
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
                objData.ID = dtTable.Rows[intRow]["classIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["classIdPk"];
                objData.NAME = dtTable.Rows[intRow]["className"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["className"];
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
