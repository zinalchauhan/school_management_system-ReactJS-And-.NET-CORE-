using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class remarkMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "remarkMaster";

        public remarkMaster_tableDB()
        {
        }

        public int OnInsert(remarkMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [remarkMaster]
                                   ([studentIdFk],[subjectTeacherIdFk],[userType],[remarkDetail],[remarkDate])
                             VALUES
                                   (@studentIdFk,@subjectTeacherIdFk,@userType,@remarkDetail,@remarkDate)";

                OnClearParameter();

                AddParameter("@studentIdFk", SqlDbType.Int, 50, obj.StudentIdFk, ParameterDirection.Input);
                AddParameter("@subjectTeacherIdFk", SqlDbType.Int, 50, obj.SubjectTeacherIdFk, ParameterDirection.Input);
                AddParameter("@userType", SqlDbType.VarChar, 50, obj.UserType, ParameterDirection.Input);
                AddParameter("@remarkDetail", SqlDbType.VarChar, 50, obj.RemarkDetail, ParameterDirection.Input);
                AddParameter("@remarkDate", SqlDbType.VarChar, 50, obj.RemarkDate, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(remarkMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [remarkMaster]
                             SET    [studentIdFk]=@studentIdFk,
                                    [subjectTeacherIdFk]=@subjectTeacherIdFk,
                                    [userType]=@userType,
                                    [remarkDetail]=@remarkDetail,
                                    [remarkDate]=@remarkDate,
                                    [isActive] = 1    
                         WHERE [remarkIdPk]=@remarkIdPk";

                OnClearParameter();
                AddParameter("@remarkIdPk", SqlDbType.Int, 50, obj.RemarkIdPk, ParameterDirection.Input);
                AddParameter("@studentIdFk", SqlDbType.Int, 50, obj.StudentIdFk, ParameterDirection.Input);
                AddParameter("@subjectTeacherIdFk", SqlDbType.Int, 50, obj.SubjectTeacherIdFk, ParameterDirection.Input);
                AddParameter("@userType", SqlDbType.VarChar, 50, obj.UserType, ParameterDirection.Input);
                AddParameter("@remarkDetail", SqlDbType.VarChar, 50, obj.RemarkDetail, ParameterDirection.Input);
                AddParameter("@remarkDate", SqlDbType.VarChar, 50, obj.RemarkDate, ParameterDirection.Input);
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
                strQ += @"UPDATE  [remarkMaster]
                            SET [isActive] =  0
                         WHERE [remarkIdPk]=@remarkIdPk";

                OnClearParameter();
                AddParameter("@remarkIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private remarkMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                remarkMaster_tableEntities obj = new remarkMaster_tableEntities();

                obj.RemarkIdPk = (drRow["remarkIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["remarkIdPk"];
                obj.StudentIdFk = (drRow["studentIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentIdFk"];
                obj.StudentMname = (drRow["studentMname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentMname"];
            obj.StudentFname = (drRow["studentFname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentFname"];
            obj.UserType = (drRow["userType"].Equals(DBNull.Value)) ? "" : (string)drRow["userType"];
                obj.TeacherName = (drRow["teacherName"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherName"];
                obj.SubjectName = (drRow["subjectName"].Equals(DBNull.Value)) ? "" : (string)drRow["subjectName"];
                obj.SubjectTeacherIdFk = (drRow["subjectTeacherIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["subjectTeacherIdFk"];
                obj.RemarkDetail = (drRow["remarkDetail"].Equals(DBNull.Value)) ? "" : (string)drRow["remarkDetail"];
                obj.RemarkDate = (drRow["remarkDate"].Equals(DBNull.Value)) ? "" : (string)drRow["remarkDate"];
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

        public remarkMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            remarkMaster_tableEntities obj = new remarkMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('remarkMaster') ";

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

        public remarkMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            remarkMaster_tableEntities obj = new remarkMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT r.* , s.studentMname , t.teacherName , sb.subjectName , s.studentFname
                            FROM [remarkMaster] r 
                            JOIN [studentMaster] s ON r.[studentIdFk] = s.[studentIdPk]
                            JOIN [subjectTeacherMaster] sbtc ON r.[subjectTeacherIdFk] = sbtc.[subjectTeacherIdPk]
                            JOIN [subjectMaster] sb ON sbtc.[subjectIdFk] = sb.[subjectIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
                            WHERE [remarkIdPk] = @remarkIdPk
                            and r.[isActive] = 1";

                OnClearParameter();
                AddParameter("remarkIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

    public List<remarkMaster_tableEntities> OnGetRemarkListdt(int ID)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;

        List<remarkMaster_tableEntities> oList = new List<remarkMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT r.* , s.studentMname , s.studentFname , sb.subjectName , t.teacherName
                            FROM [remarkMaster] r 
                            JOIN [studentMaster] s ON r.[studentIdFk] = s.[studentIdPk]
                            JOIN [subjectTeacherMaster] st ON r.[subjectTeacherIdFk] = st.[subjectTeacherIdPk]
							JOIN [subjectMaster] sb ON st.[subjectIdFk] = sb.[subjectIdPk]
                            JOIN [teacherMaster] t ON st.[teacherIdFk] = t.[teacherIdPk]
                            WHERE [studentIdFk] = @studentIdFk
                            AND r.[isActive] = 1 ";

            OnClearParameter();
            AddParameter("studentIdFk", SqlDbType.Int, 2, ID, ParameterDirection.Input);
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


    public List<remarkMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<remarkMaster_tableEntities> oList = new List<remarkMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT r.* , s.studentMname , t.teacherName , sb.subjectName , s.studentFname
                            FROM [remarkMaster] r 
                            JOIN [studentMaster] s ON r.[studentIdFk] = s.[studentIdPk]
                            JOIN [subjectTeacherMaster] sbtc ON r.[subjectTeacherIdFk] = sbtc.[subjectTeacherIdPk]
                            JOIN [subjectMaster] sb ON sbtc.[subjectIdFk] = sb.[subjectIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
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
                strQ = @"SELECT [remarkMaster].remarkIdPk
                                   ,[remarkMaster].remarkName
                                    FROM [remarkMaster] 
                                    WHERE [remarkMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["remarkIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["remarkIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["remarkName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["remarkName"];
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

