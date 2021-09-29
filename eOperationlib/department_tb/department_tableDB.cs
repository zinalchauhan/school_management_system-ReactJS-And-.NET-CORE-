using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using eCommanLib;

public class department_tableDB : clsDB_Operation
{

    private const string mstrModuleName = "department_tableDB";

    public department_tableDB()
    {
    }

    public int OnInsert(department_tableEntities obj)
    {
        string strQ = "";
        try
        {
            strQ = @"INSERT INTO [Dept]
                                   ([DeptName])
                             VALUES
                                   (@DeptName)";

            OnClearParameter();
            AddParameter("@DeptName", SqlDbType.VarChar, 50, obj.Dept_name, ParameterDirection.Input);
           
            return OnExecNonQuery(strQ);
        }
        catch (Exception ex)
        {
            
            throw ex;
        }
    }

    public int OnUpdate(department_tableEntities obj)
    {
        string strQ = "";
        try
        {


            strQ = @"UPDATE [Dept]
                             SET    [DeptName]=@DeptName
                         WHERE [DeptId]=@DeptId";
            OnClearParameter();
            AddParameter("@DeptId", SqlDbType.Int, 50, obj.Dept_id, ParameterDirection.Input);
            AddParameter("@DeptName", SqlDbType.VarChar, 50, obj.Dept_name, ParameterDirection.Input);
           
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
            strQ += @"UPDATE  [Dept]
                        SET [isActive] = 0
                         WHERE [DeptId]=@DeptId";

            OnClearParameter();
            AddParameter("@DeptId", SqlDbType.Int, 50, ID, ParameterDirection.Input);
            return OnExecNonQuery(strQ);
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    private department_tableEntities BuildEntities(DataRow drRow)
    {

        try
        {
            //DateTime dtdata;
            department_tableEntities obj = new department_tableEntities();

            obj.Dept_id = (drRow["DeptId"].Equals(DBNull.Value)) ? 0 : (int)drRow["DeptId"];
            obj.Dept_name = (drRow["DeptName"].Equals(DBNull.Value)) ? "" : (string)drRow["DeptName"];
            obj.Is_active = (drRow["isActive"].Equals(DBNull.Value)) ? 0 : Int32.Parse(drRow["isActive"].ToString());



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

    public department_tableEntities OnLastRecordInserted()
    {
        Exception exForce;
        DataTable dtTable;

        department_tableEntities obj = new department_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT IDENT_CURRENT('Dept') ";

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

    public department_tableEntities OnGetData(int ID)
    {
        Exception exForce;
        DataTable dtTable;

        department_tableEntities obj = new department_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT * FROM [Dept] WHERE [DeptId] = @DeptId ";

            OnClearParameter();
            AddParameter("DeptId", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

    public List<department_tableEntities> OnGetListdt()
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<department_tableEntities> oList = new List<department_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT * from [Dept] WHERE isActive = 1";
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
            strQ = @"SELECT [Dept].DeptId
                                   ,[Dept].DeptName
                                    FROM [Dept] ";

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
                objData.ID = dtTable.Rows[intRow]["DeptId"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["dept_id"];
                objData.NAME = dtTable.Rows[intRow]["DeptName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["dept_name"];
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
