using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class timetableMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "timetableMaster";

        public timetableMaster_tableDB()
        {
        }

        public int OnInsert(timetableMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [timetableMaster]
                                   ([classIdFk],[subjectTeacherIdFk],[periodNo],[settingIdFk],[mediumIdFk])
                             VALUES
                                   (@classIdFk,@subjectTeacherIdFk,@periodNo,@settingIdFk,@mediumIdFk)";

                OnClearParameter();

                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@subjectTeacherIdFk", SqlDbType.Int, 50, obj.SubjectTeacherIdFk, ParameterDirection.Input);
                AddParameter("@periodNo", SqlDbType.Int, 50, obj.PeriodNo, ParameterDirection.Input);
                AddParameter("@settingIdFk", SqlDbType.Int, 50, obj.SettingIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(timetableMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [timetableMaster]
                             SET    [classIdFk]=@classIdFk,
                                    [subjectTeacherIdFk]=@subjectTeacherIdFk,
                                    [periodNo]=@periodNo,
                                    [settingIdFk]=@settingIdFk,
                                    [mediumIdFk]=@mediumIdFk,
                                    [isActive] = 1    
                         WHERE [timetableIdPk]=@timetableIdPk";

                OnClearParameter();
                AddParameter("@timetableIdPk", SqlDbType.Int, 50, obj.TimetableIdPk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@subjectTeacherIdFk", SqlDbType.Int, 50, obj.SubjectTeacherIdFk, ParameterDirection.Input);
                AddParameter("@periodNo", SqlDbType.Int, 50, obj.PeriodNo, ParameterDirection.Input);
                AddParameter("@settingIdFk", SqlDbType.Int, 50, obj.SettingIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
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
                strQ += @"UPDATE  [timetableMaster]
                            SET [isActive] =  0
                         WHERE [timetableIdPk]=@timetableIdPk";

                OnClearParameter();
                AddParameter("@timetableIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private timetableMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                timetableMaster_tableEntities obj = new timetableMaster_tableEntities();

                obj.TimetableIdPk = (drRow["timetableIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["timetableIdPk"];
                obj.ClassIdFk = (drRow["classIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classIdFk"];
                obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
                obj.DivisionName = (drRow["divisionName"].Equals(DBNull.Value)) ? "" : (string)drRow["divisionName"];
                obj.SubjectTeacherIdFk = (drRow["subjectTeacherIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["subjectTeacherIdFk"];
                obj.TeacherName = (drRow["teacherName"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherName"];
                obj.SubjectName = (drRow["subjectName"].Equals(DBNull.Value)) ? "" : (string)drRow["subjectName"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
            obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
            obj.Day = (drRow["day"].Equals(DBNull.Value)) ? "" : (string)drRow["day"];
                obj.PeriodNo = (drRow["periodNo"].Equals(DBNull.Value)) ? 0 : (int)drRow["periodNo"];
                obj.SettingIdFk = (drRow["settingIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["settingIdFk"];
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

        public timetableMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            timetableMaster_tableEntities obj = new timetableMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('timetableMaster') ";

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

        public timetableMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            timetableMaster_tableEntities obj = new timetableMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT tt.* , st.standardName , d.divisionName , sb.subjectName , t.teacherName , m.mediumName , tts.day
                            FROM [timetableMaster] tt 
                            JOIN [classMaster] cl ON tt.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [subjectTeacherMaster] sbtc ON tt.[subjectTeacherIdFk] = sbtc.[subjectTeacherIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
                            JOIN [subjectMaster] sb ON sbtc.[subjectIdFk] = sb.[subjectIdPk]
                            JOIN [mediumMaster] m ON sbtc.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [timetableSettingMaster] tts ON tt.[settingIdFk] = tts.[settingIdPk]
                            WHERE [timetableIdPk] = @timetableIdPk
                            and tt.[isActive] = 1";

                OnClearParameter();
                AddParameter("timetableIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

    public List<timetableMaster_tableEntities> timeTableList(int cls , int ttId)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<timetableMaster_tableEntities> oList = new List<timetableMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT tt.* ,  sb.subjectName , tts.day , st.standardName , d.divisionName , sb.subjectName , t.teacherName , m.mediumName 
                            FROM [timetableMaster] tt 
                            JOIN [classMaster] cl ON tt.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [subjectTeacherMaster] sbtc ON tt.[subjectTeacherIdFk] = sbtc.[subjectTeacherIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
                            JOIN [subjectMaster] sb ON sbtc.[subjectIdFk] = sb.[subjectIdPk]
                            JOIN [mediumMaster] m ON sbtc.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [timetableSettingMaster] tts ON tt.[settingIdFk] = tts.[settingIdPk]
                            WHERE tt.[classIdFk] = @classIdFk
                            and tt.[settingIdFk] = @settingIdFk
							and tt.[isActive] = 1 ";

            OnClearParameter();

            AddParameter("@classIdFk", SqlDbType.Int, 2, cls, ParameterDirection.Input);
            AddParameter("@settingIdFk", SqlDbType.Int, 2, ttId, ParameterDirection.Input);

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

    public List<timetableMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<timetableMaster_tableEntities> oList = new List<timetableMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT tt.* , st.standardName , d.divisionName , sb.subjectName , t.teacherName , m.mediumName  , tts.day
                            FROM [timetableMaster] tt 
                            JOIN [classMaster] cl ON tt.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [subjectTeacherMaster] sbtc ON tt.[subjectTeacherIdFk] = sbtc.[subjectTeacherIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
                            JOIN [subjectMaster] sb ON sbtc.[subjectIdFk] = sb.[subjectIdPk]
                            JOIN [mediumMaster] m ON sbtc.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [timetableSettingMaster] tts ON tt.[settingIdFk] = tts.[settingIdPk]
                            WHERE tt.[isActive] = 1 ";
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
                strQ = @"SELECT [timetableMaster].timetableIdPk
                                   ,[timetableMaster].timetableName
                                    FROM [timetableMaster] 
                                    WHERE [timetableMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["timetableIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["timetableIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["timetableName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["timetableName"];
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

