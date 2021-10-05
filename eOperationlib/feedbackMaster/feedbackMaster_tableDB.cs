using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class feedbackMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "feedbackMaster";

        public feedbackMaster_tableDB()
        {
        }

        public int OnInsert(feedbackMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [feedbackMaster]
                                   ([userIdFk],[userType],[feedbackSubject],[feedbackDetail],[reply],[addedOn])
                             VALUES
                                   (@userIdFk,@userType,@feedbackSubject,@feedbackDetail,@reply,@addedOn)";

                OnClearParameter();
                AddParameter("@userIdFk", SqlDbType.Int, 50, obj.UserIdFk, ParameterDirection.Input);
                AddParameter("@userType", SqlDbType.VarChar, 50, obj.UserType, ParameterDirection.Input);
                AddParameter("@feedbackSubject", SqlDbType.VarChar, 50, obj.FeedbackSubject, ParameterDirection.Input);
                AddParameter("@feedbackDetail", SqlDbType.VarChar, 50, obj.FeedbackDetail, ParameterDirection.Input);
                AddParameter("@reply", SqlDbType.VarChar, 50, obj.Reply, ParameterDirection.Input);
                AddParameter("@addedOn", SqlDbType.VarChar, 50, obj.AddedOn, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(feedbackMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [feedbackMaster]
                             SET    [userName]=@userName,
                                    [userType]=@userType,
                                    [feedbackSubject]=@feedbackSubject,
                                    [feedbackDetail]=@feedbackDetail,
                                    [reply]=@reply,
                                    [addedOn]=@addedOn,
                                    [isActive] = 1    
                         WHERE [feedbackIdPk]=@feedbackIdPk";

                OnClearParameter();
                AddParameter("@userIdFk", SqlDbType.Int, 50, obj.UserIdFk, ParameterDirection.Input);
                AddParameter("@userType", SqlDbType.VarChar, 50, obj.UserType, ParameterDirection.Input);
                AddParameter("@feedbackSubject", SqlDbType.VarChar, 50, obj.FeedbackSubject, ParameterDirection.Input);
                AddParameter("@feedbackDetail", SqlDbType.VarChar, 50, obj.FeedbackDetail, ParameterDirection.Input);
                AddParameter("@reply", SqlDbType.VarChar, 50, obj.Reply, ParameterDirection.Input);
                AddParameter("@addedOn", SqlDbType.VarChar, 50, obj.AddedOn, ParameterDirection.Input);
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
                strQ += @"UPDATE  [feedbackMaster]
                            SET [isActive] =  0
                         WHERE [feedbackIdPk]=@feedbackIdPk";

                OnClearParameter();
                AddParameter("@feedbackIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private feedbackMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                feedbackMaster_tableEntities obj = new feedbackMaster_tableEntities();

                obj.FeedbackIdPk = (drRow["feedbackIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["feedbackIdPk"];
                obj.UserIdFk = (drRow["userIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["userIdFk"];
                obj.UserType = (drRow["userType"].Equals(DBNull.Value)) ? "" : (string)drRow["userType"];
                obj.FeedbackSubject = (drRow["feedbackSubject"].Equals(DBNull.Value)) ? "" : (string)drRow["feedbackSubject"];
                obj.FeedbackDetail = (drRow["feedbackDetail"].Equals(DBNull.Value)) ? "" : (string)drRow["feedbackDetail"];
                obj.Reply = (drRow["reply"].Equals(DBNull.Value)) ? "" : (string)drRow["reply"];
                obj.AddedOn = (drRow["addedOn"].Equals(DBNull.Value)) ? "" : (string)drRow["addedOn"];
                obj.IsActive = (drRow["isActive"].Equals(DBNull.Value)) ? 0 : (int)drRow["isActive"];

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

        public feedbackMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            feedbackMaster_tableEntities obj = new feedbackMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('feedbackMaster') ";

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

        public feedbackMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            feedbackMaster_tableEntities obj = new feedbackMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT *
                            FROM [feedbackMaster] 
                            WHERE [feedbackIdPk] = @feedbackIdPk 
                            and [isActive]='1' ";

                OnClearParameter();
                AddParameter("feedbackIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<feedbackMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<feedbackMaster_tableEntities> oList = new List<feedbackMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT * 
                            FROM [feedbackMaster] 
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
                strQ = @"SELECT [feedbackMaster].feedbackIdPk
                                   ,[feedbackMaster].feedbackName
                                    FROM [feedbackMaster] 
                                    WHERE [feedbackMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["feedbackIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["feedbackIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["feedbackName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["feedbackName"];
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

