using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class authMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "authMaster";

        public authMaster_tableDB()
        {
        }

        public int OnInsert(authMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [authMaster]
                                   ([userName],[userType],[userIdFk],[userPassword])
                             VALUES
                                   (@userName,@userType,@userIdFk,@userPassword)";

                OnClearParameter();
                AddParameter("@userName", SqlDbType.VarChar, 50, obj.UserName, ParameterDirection.Input);
                AddParameter("@userType", SqlDbType.VarChar, 50, obj.UserType, ParameterDirection.Input);
                AddParameter("@userIdFk", SqlDbType.Int, 50, obj.UserIdFk, ParameterDirection.Input);
                AddParameter("@userPassword", SqlDbType.VarChar, 50, obj.UserPassword, ParameterDirection.Input);


            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(authMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [authMaster]
                             SET    [userName]=@userName,
                                    [userType]=@userType,
                                    [userIdFk]=@userIdFk,
                                    [userPassword]=@userPassword,
                                    [isActive] = 1    
                         WHERE [authIdPk]=@authIdPk";

                OnClearParameter();
                AddParameter("@authIdPk", SqlDbType.Int, 50, obj.AuthIdPk, ParameterDirection.Input);
                AddParameter("@userName", SqlDbType.VarChar, 50, obj.UserName, ParameterDirection.Input);
                AddParameter("@userType", SqlDbType.VarChar, 50, obj.UserType, ParameterDirection.Input);
                AddParameter("@userIdFk", SqlDbType.Int, 50, obj.UserIdFk, ParameterDirection.Input);
                AddParameter("@userPassword", SqlDbType.VarChar, 50, obj.UserPassword, ParameterDirection.Input);
                //AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

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
                strQ += @"UPDATE  [authMaster]
                            SET [isActive] =  0
                         WHERE [authIdPk]=@authIdPk";

                OnClearParameter();
                AddParameter("@authIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private authMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                authMaster_tableEntities obj = new authMaster_tableEntities();

                obj.AuthIdPk = (drRow["authIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["authIdPk"];
                obj.UserName = (drRow["userName"].Equals(DBNull.Value)) ? "" : (string)drRow["userName"];
                obj.UserType = (drRow["userType"].Equals(DBNull.Value)) ? "" : (string)drRow["userType"];
                obj.UserIdFk = (drRow["userIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["userIdFk"];
                obj.UserPassword = (drRow["userPassword"].Equals(DBNull.Value)) ? "" : (string)drRow["userPassword"];
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

        public authMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            authMaster_tableEntities obj = new authMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('authMaster') ";

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

        public authMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            authMaster_tableEntities obj = new authMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT *
                            FROM [authMaster] 
                            WHERE [authIdPk] = @authIdPk 
                            and [isActive]='1' ";

                OnClearParameter();
                AddParameter("authIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<authMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<authMaster_tableEntities> oList = new List<authMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT * 
                            FROM [authMaster] 
                            WHERE [isActive]='1'";
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
                strQ = @"SELECT [authMaster].authIdPk
                                   ,[authMaster].authName
                                    FROM [authMaster] 
                                    WHERE [authMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["authIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["authIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["authName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["authName"];
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

