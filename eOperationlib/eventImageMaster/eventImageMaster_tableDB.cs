using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class eventImageMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "eventImageMaster";

        public eventImageMaster_tableDB()
        {
        }

        public int OnInsert(eventImageMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [eventImageMaster]
                                   ([eventIdFk],[eventImage])
                             VALUES
                                   (@eventIdFk,@eventImage)";

                OnClearParameter();

                AddParameter("@eventIdFk", SqlDbType.Int, 50, obj.EventIdFk, ParameterDirection.Input);
                AddParameter("@eventImage", SqlDbType.VarChar, 50, obj.EventImage, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(eventImageMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [eventImageMaster]
                             SET    [eventIdFk]=@eventIdFk,
                                    [eventImage]=@eventImage,
                                    [isActive] = 1    
                         WHERE [eventImageIdPk]=@eventImageIdPk";

                OnClearParameter();
                AddParameter("@eventIdFk", SqlDbType.Int, 50, obj.EventIdFk, ParameterDirection.Input);
                AddParameter("@eventImage", SqlDbType.VarChar, 50, obj.EventImage, ParameterDirection.Input);

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
                strQ += @"UPDATE  [eventImageMaster]
                            SET [isActive] =  0
                         WHERE [eventImageIdPk]=@eventImageIdPk";

                OnClearParameter();
                AddParameter("@eventImageIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private eventImageMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                eventImageMaster_tableEntities obj = new eventImageMaster_tableEntities();

                obj.EventImageIdPk = (drRow["eventImageIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["eventImageIdPk"];
                obj.EventIdFk = (drRow["eventIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["eventIdFk"];
                obj.EventName = (drRow["eventName"].Equals(DBNull.Value)) ? "" : (string)drRow["eventName"];
                obj.EventImage = (drRow["eventImage"].Equals(DBNull.Value)) ? "" : (string)drRow["eventImage"];
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

        public eventImageMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            eventImageMaster_tableEntities obj = new eventImageMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('eventImageMaster') ";

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

        public eventImageMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            eventImageMaster_tableEntities obj = new eventImageMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT ei.* , e.eventName
                            FROM [eventImageMaster] ei 
                            JOIN [eventMaster] e ON ei.[eventIdFk] = e.[eventIdPk] 
                            WHERE [eventImageIdPk] = @eventImageIdPk
                            and [isActive] = 1";

                OnClearParameter();
                AddParameter("eventImageIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<eventImageMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<eventImageMaster_tableEntities> oList = new List<eventImageMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT ei.* , e.eventName
                            FROM [eventImageMaster] ei 
                            JOIN [eventMaster] e ON ei.[eventIdFk] = e.[eventIdPk]
                            WHERE [isActive] = 1 ";
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
                strQ = @"SELECT [eventImageMaster].eventImageIdPk
                                   ,[eventImageMaster].eventImageName
                                    FROM [eventImageMaster] 
                                    WHERE [eventImageMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["eventImageIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["eventImageIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["eventImageName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["eventImageName"];
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

