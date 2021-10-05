using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class mediumMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "mediumMaster";

        public mediumMaster_tableDB()
        {
        }

        public int OnInsert(mediumMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [mediumMaster]
                                   ([mediumName])
                             VALUES
                                   (@mediumName)";

                OnClearParameter();
                AddParameter("@mediumName", SqlDbType.VarChar, 50, obj.MediumName, ParameterDirection.Input);
                //AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(mediumMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [mediumMaster]
                             SET    [mediumName]=@mediumName,
                                    [isActive] = 1    
                         WHERE [mediumIdPk]=@mediumIdPk";

                OnClearParameter();
                AddParameter("@mediumIdPk", SqlDbType.Int, 50, obj.MediumIdPk, ParameterDirection.Input);
                AddParameter("@mediumName", SqlDbType.VarChar, 50, obj.MediumName, ParameterDirection.Input);
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
                strQ += @"UPDATE  [mediumMaster]
                            SET [isActive] = 0 
                         WHERE [mediumIdPk]=@mediumIdPk";

                OnClearParameter();
                AddParameter("@mediumIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private mediumMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                mediumMaster_tableEntities obj = new mediumMaster_tableEntities();

                obj.MediumIdPk = (drRow["mediumIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdPk"];
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

        public mediumMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            mediumMaster_tableEntities obj = new mediumMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('mediumMaster') ";

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

        public mediumMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            mediumMaster_tableEntities obj = new mediumMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT * FROM [mediumMaster] WHERE [mediumIdPk] = @mediumIdPk , [isActive]='1' ";

                OnClearParameter();
                AddParameter("mediumIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<mediumMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<mediumMaster_tableEntities> oList = new List<mediumMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT * from [mediumMaster] where [mediumMaster].isActive='1'";
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
                strQ = @"SELECT [mediumMaster].mediumIdPk
                                   ,[mediumMaster].mediumName
                                    FROM [mediumMaster] 
                                    WHERE [mediumMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["mediumIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["mediumIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["mediumName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["mediumName"];
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

