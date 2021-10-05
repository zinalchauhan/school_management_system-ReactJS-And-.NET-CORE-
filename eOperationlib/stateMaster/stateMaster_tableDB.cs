using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class stateMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "stateMaster";

        public stateMaster_tableDB()
        {
        }

        public int OnInsert(stateMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [stateMaster]
                                   ([stateName])
                             VALUES
                                   (@stateName)";

                OnClearParameter();
                AddParameter("@stateName", SqlDbType.VarChar, 50, obj.StateName, ParameterDirection.Input);

                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(stateMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [stateMaster]
                             SET    [stateName]=@stateName
                         WHERE [stateIdPk]=@stateIdPk";

                OnClearParameter();
                AddParameter("@stateId", SqlDbType.Int, 50, obj.StateIdPk, ParameterDirection.Input);
                AddParameter("@stateName", SqlDbType.VarChar, 50, obj.StateName, ParameterDirection.Input);

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
                strQ += @"UPDATE  [stateMaster]
                         WHERE [stateIdPk]=@stateIdPk";

                OnClearParameter();
                AddParameter("@stateIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private stateMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                stateMaster_tableEntities obj = new stateMaster_tableEntities();

                obj.StateIdPk = (drRow["stateIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["stateIdPk"];
                obj.StateName = (drRow["stateName"].Equals(DBNull.Value)) ? "" : (string)drRow["stateName"];
                

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

        public stateMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            stateMaster_tableEntities obj = new stateMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('stateMaster') ";

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

        public stateMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            stateMaster_tableEntities obj = new stateMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT * FROM [stateMaster] WHERE [stateIdPk] = @stateIdPk ";

                OnClearParameter();
                AddParameter("stateIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<stateMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<stateMaster_tableEntities> oList = new List<stateMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT * from [stateMaster]";
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
                strQ = @"SELECT [stateMaster].stateIdPk
                                   ,[stateMaster].stateName
                                    FROM [stateMaster] ";

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
                    objData.ID = dtTable.Rows[intRow]["stateIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["stateIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["stateName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["stateName"];
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

