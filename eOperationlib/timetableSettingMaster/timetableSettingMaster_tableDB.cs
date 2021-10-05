﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class timetableSettingMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "timetableSettingMaster";

        public timetableSettingMaster_tableDB()
        {
        }

        public int OnInsert(timetableSettingMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [timetableSettingMaster]
                                   ([day],[schoolStartTime],[lectureNo],[lectureTime],[breakNo],[afterLecture],[academicYear],[mediumIdFk])
                             VALUES
                                   (@day,@schoolStartTime,@lectureNo,@lectureTime,@breakNo,@afterLecture,@academicYear,@mediumIdFk)";

                OnClearParameter();
                AddParameter("@day", SqlDbType.VarChar, 50, obj.Day, ParameterDirection.Input);
                AddParameter("@schoolStartTime", SqlDbType.VarChar, 50, obj.SchoolStartTime, ParameterDirection.Input);
                AddParameter("@lectureNo", SqlDbType.Int, 50, obj.LactureNo, ParameterDirection.Input);
                AddParameter("@lectureTime", SqlDbType.VarChar, 50, obj.LactureTime, ParameterDirection.Input);
                AddParameter("@breakNo", SqlDbType.Int, 50, obj.BreakNo, ParameterDirection.Input);
                AddParameter("@afterLecture", SqlDbType.Int, 50, obj.AfterLacture, ParameterDirection.Input);
                AddParameter("@academicYear", SqlDbType.Int, 50, obj.AcademicYear, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(timetableSettingMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [timetableSettingMaster]
                             SET    [day]=@day,
                                    [schoolStartTime]=@schoolStartTime,
                                    [lectureNo]=@lectureNo,
                                    [lectureTime]=@lectureTime,
                                    [breakNo]=@breakNo,
                                    [afterLecture]=@afterLecture,
                                    [academicYear]=@academicYear,
                                    [mediumIdFk]=@mediumIdFk,
                                    [isActive] = 1    
                         WHERE [timetableSettingIdPk]=@timetableSettingIdPk";

                OnClearParameter();
                AddParameter("@day", SqlDbType.VarChar, 50, obj.Day, ParameterDirection.Input);
                AddParameter("@schoolStartTime", SqlDbType.VarChar, 50, obj.SchoolStartTime, ParameterDirection.Input);
                AddParameter("@lectureNo", SqlDbType.Int, 50, obj.LactureNo, ParameterDirection.Input);
                AddParameter("@lectureTime", SqlDbType.VarChar, 50, obj.LactureTime, ParameterDirection.Input);
                AddParameter("@breakNo", SqlDbType.Int, 50, obj.BreakNo, ParameterDirection.Input);
                AddParameter("@afterLecture", SqlDbType.Int, 50, obj.AfterLacture, ParameterDirection.Input);
                AddParameter("@academicYear", SqlDbType.Int, 50, obj.AcademicYear, ParameterDirection.Input);
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
                strQ += @"UPDATE  [timetableSettingMaster]
                            SET [isActive] =  0
                         WHERE [timetableSettingIdPk]=@timetableSettingIdPk";

                OnClearParameter();
                AddParameter("@timetableSettingIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private timetableSettingMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                timetableSettingMaster_tableEntities obj = new timetableSettingMaster_tableEntities();

                obj.SettingIdPk = (drRow["timetableSettingIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["timetableSettingIdPk"];
                obj.Day = (drRow["day"].Equals(DBNull.Value)) ? "" : (string)drRow["day"];
                obj.SchoolStartTime = (drRow["schoolStartTime"].Equals(DBNull.Value)) ? "" : (string)drRow["schoolStartTime"];
                obj.LactureNo = (drRow["lectureNo"].Equals(DBNull.Value)) ? 0 : (int)drRow["lectureNo"];
                obj.LactureTime = (drRow["lectureTime"].Equals(DBNull.Value)) ? "" : (string)drRow["lectureTime"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
                obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
                obj.BreakNo = (drRow["breakNo"].Equals(DBNull.Value)) ? 0 : (int)drRow["breakNo"];
                obj.AfterLacture = (drRow["afterLecture"].Equals(DBNull.Value)) ? 0 : (int)drRow["afterLecture"];
                obj.AcademicYear = (drRow["academicYear"].Equals(DBNull.Value)) ? 0 : (int)drRow["academicYear"];
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

        public timetableSettingMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            timetableSettingMaster_tableEntities obj = new timetableSettingMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('timetableSettingMaster') ";

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

        public timetableSettingMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            timetableSettingMaster_tableEntities obj = new timetableSettingMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT ts.* , m.mediumName 
                            FROM [timetableSettingMaster] ts
                            JOIN [mediumMaster] m ON ts.[mediumIdFk] = m.[mediumIdPk]
                            WHERE [timetableSettingIdPk] = @timetableSettingIdPk 
                            and [isActive]='1' ";

                OnClearParameter();
                AddParameter("timetableSettingIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<timetableSettingMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<timetableSettingMaster_tableEntities> oList = new List<timetableSettingMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT ts.* , m.mediumName 
                            FROM [timetableSettingMaster] ts
                            JOIN [mediumMaster] m ON ts.[mediumIdFk] = m.[mediumIdPk]
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
                strQ = @"SELECT [timetableSettingMaster].timetableSettingIdPk
                                   ,[timetableSettingMaster].timetableSettingName
                                    FROM [timetableSettingMaster] 
                                    WHERE [timetableSettingMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["timetableSettingIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["timetableSettingIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["timetableSettingName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["timetableSettingName"];
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
