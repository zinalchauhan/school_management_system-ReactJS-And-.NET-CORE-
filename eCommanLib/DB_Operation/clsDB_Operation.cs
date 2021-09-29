using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Data;
//using MySql.Data;
using System.Data.SqlClient;
using System.Web.Security;
using System.Web.SessionState;


public class clsDB_Operation 
{
    private SqlCommand mdbCommand;
    private SqlTransaction mdbTransaction;
    private SqlConnection objConnection;

    string mstrModuleName = "clsDB_Operation";


    private string mstrErrorName;
    private string mstrErrorNumber;

    public string ErrorMessage
    {
        get { return mstrErrorName; }
        set { mstrErrorName = value; }
    }
    public string ErrorNumber
    {
        get { return mstrErrorNumber; }
        set { mstrErrorNumber = value; }
    }

    public clsDB_Operation()
    {
        try
        {

            mdbCommand = new SqlCommand();
            objConnection = new SqlConnection(@"Data Source=DESKTOP-IA6N616\SQLEXPRESS;Initial Catalog=Demo;Integrated Security=True");//"(SqlConnection)Session["HRSqlConnection"];
            OnStartConnection();


        }
        catch (Exception ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }



    public void OnStartConnection()
    {
        try
        {
            if (objConnection.State == ConnectionState.Closed)
            {
                objConnection.Open();
            }
        }
        catch (Exception ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void OnStopConnection()
    {
        try
        {
            if (objConnection.State == ConnectionState.Open)
            {
                objConnection.Close();
            }
        }
        catch (Exception ex)
        {

            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }



    public void OnClearParameter()
    {
        try
        {
            mdbCommand.Parameters.Clear();
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void OnBindTransaction()
    {


        try
        {

            OnStartConnection();
            mdbTransaction = objConnection.BeginTransaction();
            mdbCommand.Transaction = mdbTransaction;

        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void OnReleaseTransaction(bool objFlag)
    {
        try
        {
            if (objFlag)
            {
                mdbTransaction.Commit();
            }
            else
            {
                mdbTransaction.Rollback();
            }
           // OnStopConnection();
        }
        catch (SqlException ex)
        {

            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public DataSet OnExecQuery(string strQuery, string strTableName)
    {
        mstrErrorName = "";
        mstrErrorNumber = "";

        try
        {
            DataSet dsList = new DataSet();
            SqlDataAdapter daData;
            mdbCommand.CommandText = strQuery;
            mdbCommand.Connection = objConnection;
            daData = new SqlDataAdapter(mdbCommand);
            daData.Fill(dsList, strTableName);
            return dsList;
        }
        catch (Exception ex)
        {
            mstrErrorName = ex.Message;
            mstrErrorNumber = ex.Message;
            //MessageBox.Show(ex.Message);
            return null;
        }
    }
    public int OnExecNonQuery(string strQuery)
    {
        mstrErrorName = "";
        mstrErrorNumber = "";

        try
        {

            mdbCommand.CommandType = CommandType.Text;
            mdbCommand.CommandText = strQuery;
            mdbCommand.Connection = objConnection;
            mdbCommand.ExecuteNonQuery();
            return 1;
        }
        catch (Exception ex)
        {
            mstrErrorName = ex.Message;
            mstrErrorNumber = ex.Message;
            return 0;
        }
    }
    public SqlDataReader OnExecuteReader(string strQuery)
    {
        mstrErrorName = "";
        mstrErrorNumber = "";

        SqlDataReader rtnReader = null;
        try
        {
            mdbCommand.CommandType = CommandType.Text;
            mdbCommand.CommandText = strQuery;
            mdbCommand.Connection = objConnection;
            rtnReader = mdbCommand.ExecuteReader();
            return rtnReader;
        }
        catch (Exception ex)
        {
            mstrErrorName = ex.Message;
            mstrErrorNumber = ex.Message;
            return null;
        }
    }

    public void AddParameter(string strName, SqlDbType objType, int iSize, bool objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;



            SqlParameter objParameter = new SqlParameter();
            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;
            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, byte objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();
            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;
            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, int objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();
            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;
            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, double objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();
            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;
            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, string objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();
            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;
            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, DBNull objValue, ParameterDirection objDirection)
    {
        try
        {




            objDirection = ParameterDirection.Input;
            SqlParameter objParameter = new SqlParameter();
            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;

            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, System.Drawing.Image objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();
            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;
            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, Guid objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();
            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;
            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, byte[] objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();

            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;

            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (Exception ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }

    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, DateTime objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();

            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;
            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }

    public void AddParameter(string strName, SqlDbType objType, int iSize, Nullable<DateTime> objValue, ParameterDirection objDirection)
    {
        try
        {

            objDirection = ParameterDirection.Input;

            SqlParameter objParameter = new SqlParameter();

            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;

            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (SqlException ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }
    public void AddParameter(string strName, SqlDbType objType, int iSize, Nullable<TimeSpan> objValue, ParameterDirection objDirection)
    {
        try
        {
            objDirection = ParameterDirection.Input;
            SqlParameter objParameter = new SqlParameter();

            objParameter.IsNullable = true;
            objParameter.ParameterName = strName;
            objParameter.Value = objValue;
            objParameter.SqlDbType = objType;
            objParameter.Size = iSize;
            objParameter.Direction = objDirection;

            if (objParameter.Value == null)
            {
                objParameter.Value = DBNull.Value;
            }
            mdbCommand.Parameters.Add(objParameter);
        }
        catch (Exception ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);
        }
    }

}
//}