using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class standardMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "standardMaster";

        public standardMaster_tableDB()
        {
        }

        public int OnInsert(standardMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [standardMaster]
                                   ([standardName])
                             VALUES
                                   (@standardName)";

                OnClearParameter();
                AddParameter("@standardName", SqlDbType.VarChar, 50, obj.StandardName, ParameterDirection.Input);
                //AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(standardMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [standardMaster]
                             SET    [standardName]=@standardName,
                                    [isActive] = 1    
                         WHERE [standardIdPk]=@standardIdPk";

                OnClearParameter();
                AddParameter("@standardIdPk", SqlDbType.Int, 50, obj.StandardIdPk, ParameterDirection.Input);
                AddParameter("@standardName", SqlDbType.VarChar, 50, obj.StandardName, ParameterDirection.Input);
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
                strQ += @"UPDATE  [standardMaster]
                            SET [isActive] =  0
                         WHERE [standardIdPk]=@standardIdPk";

                OnClearParameter();
                AddParameter("@standardIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private standardMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                standardMaster_tableEntities obj = new standardMaster_tableEntities();

                obj.StandardIdPk = (drRow["standardIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["standardIdPk"];
                obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
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

        public standardMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            standardMaster_tableEntities obj = new standardMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('standardMaster') ";

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

        public standardMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            standardMaster_tableEntities obj = new standardMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT * FROM [standardMaster] WHERE [standardIdPk] = @standardIdPk and [isActive]='1' ";

                OnClearParameter();
                AddParameter("standardIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<standardMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<standardMaster_tableEntities> oList = new List<standardMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT * from [standardMaster] where [standardMaster].isActive='1'";
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
                strQ = @"SELECT [standardMaster].standardIdPk
                                   ,[standardMaster].standardName
                                    FROM [standardMaster] 
                                    WHERE [standardMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["standardIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["standardIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["standardName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["standardName"];
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

