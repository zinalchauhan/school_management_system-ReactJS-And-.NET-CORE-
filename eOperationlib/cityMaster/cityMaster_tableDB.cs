using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public class cityMaster_tableDB : clsDB_Operation
{

    private const string mstrModuleName = "cityMasters";

    public cityMaster_tableDB()
        
    {
    }

    //public int OnInsert(cityMaster_tableEntities obj)
    //{
        
    //    string strQ = "";
    //    try
    //    {
    //        strQ = @"INSERT INTO [Emp]
    //                               ([EmpName],[Designation],[JoiningDate],[DeptId_Fk],[Qualification])
    //                         VALUES
    //                               (@EmpName,@Designation,@JoiningDate,@DeptId_Fk,@Qualification)";

    //        OnClearParameter();
    //        AddParameter("@EmpName", SqlDbType.VarChar, 50, obj.Emp_name, ParameterDirection.Input);
    //        AddParameter("@Designation", SqlDbType.VarChar, 50, obj.Emp_designation, ParameterDirection.Input);
    //        AddParameter("@JoiningDate", SqlDbType.VarChar, 50, obj.Emp_date_of_joinning, ParameterDirection.Input);
    //        AddParameter("@DeptId_Fk", SqlDbType.Int, 50, obj.Emp_dept_id, ParameterDirection.Input);
    //        AddParameter("@Qualification", SqlDbType.VarChar, 50, obj.Emp_qualification, ParameterDirection.Input);

    //        return OnExecNonQuery(strQ);
            

    //    }
    //    catch (Exception ex)
    //    {
    //        throw ex;
    //    }
    //}

    //public int OnUpdate(employee_tableEntities obj)
    //{
    //    string strQ = "";
    //    try
    //    {


    //        strQ = @"UPDATE [Emp]
    //                         SET    [EmpName]=@EmpName,
    //                                [Designation]=@Designation,
    //                                [JoiningDate]=@JoiningDate,
    //                                [DeptId_Fk]=@DeptId_Fk,
    //                                [Qualification]=@Qualification
    //                     WHERE [EmpId]=@EmpId ;";
    //        OnClearParameter();
    //        AddParameter("@EmpId", SqlDbType.Int, 50, obj.Emp_id, ParameterDirection.Input);
    //        AddParameter("@EmpName", SqlDbType.VarChar, 50, obj.Emp_name, ParameterDirection.Input);
    //        AddParameter("@Designation", SqlDbType.VarChar, 50, obj.Emp_designation, ParameterDirection.Input);
    //        AddParameter("@JoiningDate", SqlDbType.VarChar, 50, obj.Emp_date_of_joinning, ParameterDirection.Input);
    //        AddParameter("@DeptId_Fk", SqlDbType.Int, 50, obj.Emp_dept_id, ParameterDirection.Input);
    //        AddParameter("@Qualification", SqlDbType.VarChar, 50, obj.Emp_qualification, ParameterDirection.Input);
           

    //        return OnExecNonQuery(strQ);


    //    }
    //    catch (Exception ex)
    //    {
    //        throw ex;
    //    }
    //}

    //public int OnDelete(int ID)
    //{
    //    string strQ = "";
      
    //    try
    //    {
    //        strQ += @"UPDATE [Emp] 
    //                    SET [isActive] = 0
    //                     WHERE [EmpId]=@EmpId";

    //        OnClearParameter();
    //        AddParameter("@EmpId", SqlDbType.Int, 50, ID, ParameterDirection.Input);
    //        return OnExecNonQuery(strQ);

          

    //    }
    //    catch (Exception ex)
    //    {
    //        throw ex;
    //    }
    //}

    private cityMaster_tableEntities BuildEntities(DataRow drRow)
    {

        try
        {
            //DateTime dtdata;
            cityMaster_tableEntities obj = new cityMaster_tableEntities();

            obj.CityIdPk = (drRow["cityIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["cityIdPk"];
            obj.CityName = (drRow["cityName"].Equals(DBNull.Value)) ? "" : (string)drRow["stateName"];
            obj.StateIdFk = (drRow["stateIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["stateIdFk"];
            //obj.StateName = (drRow["JoiningDate"].Equals(DBNull.Value)) ? "" : (string)drRow["stateName"];
            
            
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
    public cityMaster_tableEntities OnGetData(int ID)
    {
        Exception exForce;
        DataTable dtTable;

        cityMaster_tableEntities obj = new cityMaster_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT c.*, s.stateName 
                        FROM [cityMaster] c 
                        JOIN [stateMaster] s ON c.[stateIdFk] = s.[stateIdPk] 
                        WHERE [cityIdPk] = @cityIdPk";

            OnClearParameter();
            AddParameter("cityIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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
        List<cityMaster_tableEntities> oList = new List<cityMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT * FROM [cityMaster]";
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

    public List<cityMaster_tableEntities> OnGetListdt()
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<cityMaster_tableEntities> oList = new List<cityMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT c.*, s.stateName 
                        FROM [cityMaster] c 
                        JOIN [stateMaster] s ON c.[stateIdFk] = s.[stateIdPk] ";
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
            strQ = @"SELECT cityIdPk,cityName FROM [cityMaster] ";
                
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
                objData.ID = dtTable.Rows[intRow]["cityIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["cityIdPk"];
                objData.NAME = dtTable.Rows[intRow]["cityName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["cityName"];
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
