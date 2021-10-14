using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class eventMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "eventMaster";

        public eventMaster_tableDB()
        {
        }

        public int OnInsert(eventMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [eventMaster]
                                   ([eventName],[eventTitle],[eventDetail],[eventDate],[mediumIdFk])
                             VALUES
                                   (@eventName,@eventTitle,@eventDetail,@eventDate,@mediumIdFk)";

                OnClearParameter();

                AddParameter("@eventName", SqlDbType.VarChar, 50, obj.EventName, ParameterDirection.Input);
                AddParameter("@eventTitle", SqlDbType.VarChar, 50, obj.EventTitle, ParameterDirection.Input);
                AddParameter("@eventDetail", SqlDbType.VarChar, 50, obj.EventDetail, ParameterDirection.Input);
                AddParameter("@eventDate", SqlDbType.VarChar, 50, obj.EventDate, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(eventMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [eventMaster]
                             SET    [eventName]=@eventName,
                                    [eventTitle]=@eventTitle,
                                    [eventDetail]=@eventDetail,
                                    [eventDate]=@eventDate,
                                    [mediumIdFk]=@mediumIdFk,
                                    [isActive] = 1    
                         WHERE [eventIdPk]=@eventIdPk";

                OnClearParameter();
                AddParameter("@eventIdPk", SqlDbType.Int, 50, obj.EventIdPk, ParameterDirection.Input);
                AddParameter("@eventName", SqlDbType.VarChar, 50, obj.EventName, ParameterDirection.Input);
                AddParameter("@eventTitle", SqlDbType.VarChar, 50, obj.EventTitle, ParameterDirection.Input);
                AddParameter("@eventDetail", SqlDbType.VarChar, 50, obj.EventDetail, ParameterDirection.Input);
                AddParameter("@eventDate", SqlDbType.VarChar, 50, obj.EventDate, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
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
                strQ += @"UPDATE  [eventMaster]
                            SET [isActive] =  0
                         WHERE [eventIdPk]=@eventIdPk";

                OnClearParameter();
                AddParameter("@eventIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private eventMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                eventMaster_tableEntities obj = new eventMaster_tableEntities();

                obj.EventIdPk = (drRow["eventIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["eventIdPk"];
                obj.EventName = (drRow["eventName"].Equals(DBNull.Value)) ? "" : (string)drRow["eventName"];
                obj.EventTitle = (drRow["eventTitle"].Equals(DBNull.Value)) ? "" : (string)drRow["eventTitle"];
                obj.EventDetail = (drRow["eventDetail"].Equals(DBNull.Value)) ? "" : (string)drRow["eventDetail"];
                obj.EventDate = (drRow["eventDate"].Equals(DBNull.Value)) ? "" : (string)drRow["eventDate"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
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

        public eventMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            eventMaster_tableEntities obj = new eventMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('eventMaster') ";

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

        public eventMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            eventMaster_tableEntities obj = new eventMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT e.* , m.mediumName
                            FROM [eventMaster] e 
                            JOIN [mediumMaster] m ON e.[mediumIdFk] = m.[mediumIdPk] 
                            WHERE [eventIdPk] = @eventIdPk
                            and e.[isActive] = 1";

                OnClearParameter();
                AddParameter("eventIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<eventMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<eventMaster_tableEntities> oList = new List<eventMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT e.* , m.mediumName
                            FROM [eventMaster] e 
                            JOIN [mediumMaster] m ON e.[mediumIdFk] = m.[mediumIdPk] 
                            WHERE e.[isActive] = 1 ";
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
                strQ = @"SELECT [eventMaster].eventIdPk
                                   ,[eventMaster].eventName
                                    FROM [eventMaster] 
                                    WHERE [eventMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["eventIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["eventIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["eventName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["eventName"];
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

