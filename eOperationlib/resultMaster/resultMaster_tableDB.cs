using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class resultMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "resultMaster";

        public resultMaster_tableDB()
        {
        }

        public int OnInsert(resultMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [resultMaster]
                                   ([studentIdFk],[filePath])
                             VALUES
                                   (@studentIdFk,@filePath)";

                OnClearParameter();

                AddParameter("@studentIdFk", SqlDbType.Int, 50, obj.StudentIdFk, ParameterDirection.Input);
                AddParameter("@filePath", SqlDbType.VarChar, 50, obj.FilePath, ParameterDirection.Input);
                //AddParameter("@addedOn", SqlDbType.VarChar, 50, obj.AddedOn, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(resultMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [resultMaster]
                             SET    [studentIdFk]=@studentIdFk,
                                    [filePath]=@filePath,
                                    [isActive] = 1    
                         WHERE [resultIdPk]=@resultIdPk";

                OnClearParameter();
                AddParameter("@resultIdPk", SqlDbType.Int, 50, obj.ResultIdPk, ParameterDirection.Input);
                AddParameter("@studentIdFk", SqlDbType.Int, 50, obj.StudentIdFk, ParameterDirection.Input);
                AddParameter("@filePath", SqlDbType.VarChar, 50, obj.FilePath, ParameterDirection.Input);
                //AddParameter("@addedOn", SqlDbType.VarChar, 50, obj.AddedOn, ParameterDirection.Input);
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
                strQ += @"UPDATE  [resultMaster]
                            SET [isActive] =  0
                         WHERE [resultIdPk]=@resultIdPk";

                OnClearParameter();
                AddParameter("@resultIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private resultMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                resultMaster_tableEntities obj = new resultMaster_tableEntities();

                obj.ResultIdPk = (drRow["resultIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["resultIdPk"];
                obj.StudentIdFk = (drRow["studentIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentIdFk"];
                obj.StudentMname = (drRow["studentMname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentMname"];
                obj.FilePath = (drRow["filePath"].Equals(DBNull.Value)) ? "" : (string)drRow["filePath"];
                obj.AddedOn = (drRow["addedOn"].Equals(DBNull.Value)) ? "" : drRow["addedOn"].ToString();
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

        public resultMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            resultMaster_tableEntities obj = new resultMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('resultMaster') ";

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

        public resultMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            resultMaster_tableEntities obj = new resultMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT r.* , s.studentMname 
                            FROM [resultMaster] r 
                            JOIN [studentMaster] s ON r.[studentIdFk] = s.[studentIdPk]
                            WHERE [resultIdPk] = @resultIdPk
                            and r.[isActive] = 1";

                OnClearParameter();
                AddParameter("resultIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<resultMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<resultMaster_tableEntities> oList = new List<resultMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT r.* , s.studentMname
                            FROM [resultMaster] r 
                            JOIN [studentMaster] s ON r.[studentIdFk] = s.[studentIdPk]
                            WHERE r.[isActive] = 1 ";
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
                strQ = @"SELECT [resultMaster].resultIdPk
                                   ,[resultMaster].resultName
                                    FROM [resultMaster] 
                                    WHERE [resultMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["resultIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["resultIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["resultName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["resultName"];
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

