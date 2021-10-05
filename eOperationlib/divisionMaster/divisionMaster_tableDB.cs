using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class divisionMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "divisionMaster";

        public divisionMaster_tableDB()
        {
        }

        public int OnInsert(divisionMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [divisionMaster]
                                   ([divisionName])
                             VALUES
                                   (@divisionName)";

                OnClearParameter();
                AddParameter("@divisionName", SqlDbType.VarChar, 50, obj.DivisionName, ParameterDirection.Input);
                //AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(divisionMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [divisionMaster]
                             SET    [divisionName]=@divisionName,
                                    [isActive] = 1    
                         WHERE [divisionIdPk]=@divisionIdPk";

                OnClearParameter();
                AddParameter("@divisionIdPk", SqlDbType.Int, 50, obj.DivisionIdPk, ParameterDirection.Input);
                AddParameter("@divisionName", SqlDbType.VarChar, 50, obj.DivisionName, ParameterDirection.Input);
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
                strQ += @"UPDATE  [divisionMaster]
                            SET [isActive] =  0
                         WHERE [divisionIdPk]=@divisionIdPk";

                OnClearParameter();
                AddParameter("@divisionIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private divisionMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                divisionMaster_tableEntities obj = new divisionMaster_tableEntities();

                obj.DivisionIdPk = (drRow["divisionIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["divisionIdPk"];
                obj.DivisionName = (drRow["divisionName"].Equals(DBNull.Value)) ? "" : (string)drRow["divisionName"];
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

        public divisionMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            divisionMaster_tableEntities obj = new divisionMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('divisionMaster') ";

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

        public divisionMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            divisionMaster_tableEntities obj = new divisionMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT * FROM [divisionMaster] WHERE [divisionIdPk] = @divisionIdPk , [isActive]='1' ";

                OnClearParameter();
                AddParameter("divisionIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<divisionMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<divisionMaster_tableEntities> oList = new List<divisionMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT * from [divisionMaster] where [divisionMaster].isActive='1'";
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
                strQ = @"SELECT [divisionMaster].divisionIdPk
                                   ,[divisionMaster].divisionName
                                    FROM [divisionMaster] 
                                    WHERE [divisionMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["divisionIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["divisionIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["divisionName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["divisionName"];
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

