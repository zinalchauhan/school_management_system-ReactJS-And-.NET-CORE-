using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Data.Sql;
using System.Web.Security;
using System.Web.SessionState;


//namespace IndentSystem
//{
public class clsDB_Config : System.Web.UI.Page
{
    private string mstrModuleName = "clsDB_Config";
    private clsConfigProperty objConfigProperty = new clsConfigProperty();
    private string mstrConnectionString;
    private string objText = "";
    private SqlConnection objConnection;

    public SqlConnection _HRSqlConnection
    {
        get
        {
            return objConnection;
        }
        set
        {
            objConnection = value;
        }
    }
    public void DatabadeConnection()
    {

        objConnection = new SqlConnection();
        objConnection.ConnectionString = (string)Session["Connection_String"];//clsDB_Config._ConnectionString;
        objConnection.Open();


    }
    public clsConfigProperty _ConfigProperty
    {
        get { return objConfigProperty; }
        set { objConfigProperty = value; }
    }

    public string _ConnectionString
    {
        get
        {
            return mstrConnectionString;
        }
        set
        {
            mstrConnectionString = value;
            //OpenConnection();
        }
    }
    public string BuildConnectionString()
    {
        try
        {
            objText = String.Format(@"Data Source=DESKTOP-IA6N616\SQLEXPRESS;Initial Catalog=schoolManagementSyatem;Integrated Security=True");

        }
        catch (Exception ex)
        {
            DisplayError.Show(ex.Source, ex.Message, mstrModuleName, System.Reflection.MethodBase.GetCurrentMethod().Name);

        }
        return objText;
    }
}
//}