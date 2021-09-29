using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using eCommanLib;

public class employee_tableDB : clsDB_Operation
{

    private const string mstrModuleName = "employee_tableDB";

    public employee_tableDB()
        
    {
    }

    public int OnInsert(employee_tableEntities obj)
    {
        
        string strQ = "";
        try
        {
            strQ = @"INSERT INTO [Emp]
                                   ([EmpName],[Designation],[JoiningDate],[DeptId_Fk],[Qualification])
                             VALUES
                                   (@EmpName,@Designation,@JoiningDate,@DeptId_Fk,@Qualification)";

            OnClearParameter();
            AddParameter("@EmpName", SqlDbType.VarChar, 50, obj.Emp_name, ParameterDirection.Input);
            AddParameter("@Designation", SqlDbType.VarChar, 50, obj.Emp_designation, ParameterDirection.Input);
            AddParameter("@JoiningDate", SqlDbType.VarChar, 50, obj.Emp_date_of_joinning, ParameterDirection.Input);
            AddParameter("@DeptId_Fk", SqlDbType.Int, 50, obj.Emp_dept_id, ParameterDirection.Input);
            AddParameter("@Qualification", SqlDbType.VarChar, 50, obj.Emp_qualification, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            

        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    public int OnUpdate(employee_tableEntities obj)
    {
        string strQ = "";
        try
        {


            strQ = @"UPDATE [Emp]
                             SET    [EmpName]=@EmpName,
                                    [Designation]=@Designation,
                                    [JoiningDate]=@JoiningDate,
                                    [DeptId_Fk]=@DeptId_Fk,
                                    [Qualification]=@Qualification
                         WHERE [EmpId]=@EmpId ;";
            OnClearParameter();
            AddParameter("@EmpId", SqlDbType.Int, 50, obj.Emp_id, ParameterDirection.Input);
            AddParameter("@EmpName", SqlDbType.VarChar, 50, obj.Emp_name, ParameterDirection.Input);
            AddParameter("@Designation", SqlDbType.VarChar, 50, obj.Emp_designation, ParameterDirection.Input);
            AddParameter("@JoiningDate", SqlDbType.VarChar, 50, obj.Emp_date_of_joinning, ParameterDirection.Input);
            AddParameter("@DeptId_Fk", SqlDbType.Int, 50, obj.Emp_dept_id, ParameterDirection.Input);
            AddParameter("@Qualification", SqlDbType.VarChar, 50, obj.Emp_qualification, ParameterDirection.Input);
           

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
            strQ += @"UPDATE [Emp] 
                        SET [isActive] = 0
                         WHERE [EmpId]=@EmpId";

            OnClearParameter();
            AddParameter("@EmpId", SqlDbType.Int, 50, ID, ParameterDirection.Input);
            return OnExecNonQuery(strQ);

          

        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    private employee_tableEntities BuildEntities(DataRow drRow)
    {

        try
        {
            //DateTime dtdata;
            employee_tableEntities obj = new employee_tableEntities();

            obj.Emp_id = (drRow["EmpId"].Equals(DBNull.Value)) ? 0 : (int)drRow["EmpId"];
            obj.Emp_name = (drRow["EmpName"].Equals(DBNull.Value)) ? "" : (string)drRow["EmpName"];
            obj.Emp_designation = (drRow["Designation"].Equals(DBNull.Value)) ? "" : (string)drRow["Designation"];
            obj.Emp_date_of_joinning = (drRow["JoiningDate"].Equals(DBNull.Value)) ? "" : (string)drRow["JoiningDate"];
            obj.Emp_dept_id = (drRow["DeptId_Fk"].Equals(DBNull.Value)) ? 0 : (int)drRow["DeptId_Fk"];
            obj.Emp_qualification = (drRow["Qualification"].Equals(DBNull.Value)) ? "" : (string)drRow["Qualification"];
            //obj.IsActive = (drRow["isActive"].Equals(DBNull.Value)) ? 1 : (int)drRow["isActive"];

            department_tableDB dept = new department_tableDB();
            obj.ObjDept = dept.OnGetData(obj.Emp_dept_id);

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
    public employee_tableEntities OnGetData(int ID)
    {
        Exception exForce;
        DataTable dtTable;

        employee_tableEntities obj = new employee_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT * FROM [Emp] WHERE [EmpId] = @EmpId";

            OnClearParameter();
            AddParameter("EmpId", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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
        List<employee_tableEntities> oList = new List<employee_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT * FROM [Emp]";
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

    public List<employee_tableEntities> OnGetListdt()
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<employee_tableEntities> oList = new List<employee_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT * from Emp";
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
            strQ = @"SELECT EmpId,EmpName FROM [Emp] ";

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
                objData.ID = dtTable.Rows[intRow]["EmpId"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["EmpId"];
                objData.NAME = dtTable.Rows[intRow]["EmpName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["EmpName"];
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
