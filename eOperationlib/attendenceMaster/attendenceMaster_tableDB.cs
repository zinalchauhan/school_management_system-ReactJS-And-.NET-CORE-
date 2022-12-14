using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class attendenceMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "attendenceMaster";

        public attendenceMaster_tableDB()
        {
        }

        public int OnInsert(attendenceMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [attendenceMaster]
                                   ([studentIdFk],[classIdFk],[classTeacherIdFk],[attendenceDate],[attendenceStatus])
                             VALUES
                                   (@studentIdFk,@classIdFk,@classTeacherIdFk,@attendenceDate,@attendenceStatus)";

                OnClearParameter();

                AddParameter("@studentIdFk", SqlDbType.Int, 50, obj.StudentIdFk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@classTeacherIdFk", SqlDbType.Int, 50, obj.ClassTeacherIdFk, ParameterDirection.Input);
                AddParameter("@attendenceDate", SqlDbType.VarChar, 50, obj.AttendenceDate, ParameterDirection.Input);
                AddParameter("@attendenceStatus", SqlDbType.VarChar, 50, obj.AttendenceStatus, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(attendenceMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [attendenceMaster]
                             SET    [studentIdFk]=@studentIdFk,
                                    [classIdFk]=@classIdFk,
                                    [classTeacherIdFk]=@classTeacherIdFk,
                                    [attendenceDate]=@attendenceDate,
                                    [attendenceStatus]=@attendenceStatus,
                                    [isActive] = 1    
                         WHERE [attendenceIdPk]=@attendenceIdPk";

                OnClearParameter();
                AddParameter("@attendenceIdPk", SqlDbType.Int, 50, obj.AttendenceIdPk, ParameterDirection.Input);
                AddParameter("@studentIdFk", SqlDbType.Int, 50, obj.StudentIdFk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@classTeacherIdFk", SqlDbType.Int, 50, obj.ClassTeacherIdFk, ParameterDirection.Input);
                AddParameter("@attendenceDate", SqlDbType.VarChar, 50, obj.AttendenceDate, ParameterDirection.Input);
                AddParameter("@attendenceStatus", SqlDbType.VarChar, 50, obj.AttendenceStatus, ParameterDirection.Input);
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
                strQ += @"UPDATE  [attendenceMaster]
                            SET [isActive] =  0
                         WHERE [attendenceIdPk]=@attendenceIdPk";

                OnClearParameter();
                AddParameter("@attendenceIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    public List<attendenceMaster_tableEntities> classWiseAttendance(int ID)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<attendenceMaster_tableEntities> oList = new List<attendenceMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT a.* , s.studentMname , s.studentFname ,  t.teacherName , s.studentRollNo
                            FROM [attendenceMaster] a 
                            JOIN [studentMaster] s ON a.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON a.[classIdFk] = cl.[classIdPk] 
                            JOIN [classTeacherMaster] ct ON a.[classTeacherIdFk] = ct.[classTeacherIdPk]
                            JOIN [teacherMaster] t ON ct.[teacherIdFk] = t.[teacherIdPk]
                            WHERE a.[classIdFk] = @classIdFk
                            and a.[isActive] = 1";
            OnClearParameter();
            AddParameter("@classIdFk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

    public List<attendenceMaster_tableEntities> studAttendance(int ID)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<attendenceMaster_tableEntities> oList = new List<attendenceMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT a.* , s.studentMname , s.studentFname ,  t.teacherName , s.studentRollNo
                            FROM [attendenceMaster] a 
                            JOIN [studentMaster] s ON a.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON a.[classIdFk] = cl.[classIdPk] 
                            JOIN [classTeacherMaster] ct ON a.[classTeacherIdFk] = ct.[classTeacherIdPk]
                            JOIN [teacherMaster] t ON ct.[teacherIdFk] = t.[teacherIdPk]
                            WHERE a.[studentIdFk] = @studentIdFk
                            and a.[isActive] = 1";
            OnClearParameter();
            AddParameter("@studentIdFk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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


    private attendenceMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                attendenceMaster_tableEntities obj = new attendenceMaster_tableEntities();

                obj.AttendenceIdPk = (drRow["attendenceIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["attendenceIdPk"];
                obj.StudentIdFk = (drRow["studentIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentIdFk"];
                obj.StudentMname = (drRow["studentMname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentMname"];
                obj.ClassIdFk = (drRow["classIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classIdFk"];
            obj.StudentFname = (drRow["studentFname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentFname"];
            obj.StudentRollNo = (drRow["studentRollNo"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentRollNo"];
            obj.TeacherName = (drRow["teacherName"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherName"];
                obj.ClassTeacherIdFk = (drRow["classTeacherIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classTeacherIdFk"];
                obj.AttendenceDate = (drRow["attendenceDate"].Equals(DBNull.Value)) ? "" : (string)drRow["attendenceDate"];
                obj.AttendenceStatus = (drRow["attendenceStatus"].Equals(DBNull.Value)) ? "" : (string)drRow["attendenceStatus"];
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

        public attendenceMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            attendenceMaster_tableEntities obj = new attendenceMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('attendenceMaster') ";

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

        public attendenceMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            attendenceMaster_tableEntities obj = new attendenceMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT a.* , s.studentMname , st.standardName , d.divisionName , t.teacherName 
                            FROM [attendenceMaster] a 
                            JOIN [studentMaster] s ON a.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON a.[classIdFk] = cl.[classIdPk] 
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [classTeacherMaster] ct ON a.[classTeacherIdFk] = ct.[classTeacherIdPk]
                            JOIN [teacherMaster] t ON ct.[teacherIdFk] = t.[teacherIdPk]
                            WHERE [attendenceIdPk] = @attendenceIdPk
                            and a.[isActive] = 1";

                OnClearParameter();
                AddParameter("attendenceIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

    public attendenceMaster_tableEntities OnGetListdtAttendence(int studid , string adate)
    {
        Exception exForce;
        DataTable dtTable;

        attendenceMaster_tableEntities obj = new attendenceMaster_tableEntities();

        string strQ = "";

        try
        {
            strQ = @"SELECT a.* , s.studentMname , st.standardName , d.divisionName , t.teacherName 
                            FROM [attendenceMaster] a 
                            JOIN [studentMaster] s ON a.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON a.[classIdFk] = cl.[classIdPk] 
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [classTeacherMaster] ct ON a.[classTeacherIdFk] = ct.[classTeacherIdPk]
                            JOIN [teacherMaster] t ON ct.[teacherIdFk] = t.[teacherIdPk]
                            WHERE a.[studentIdFk] = @studentIdfk
							and a.[attendenceDate] = @attendenceDate
							and a.[isActive] = 1";

            OnClearParameter();
            AddParameter("@studentIdFk", SqlDbType.Int, 2, studid, ParameterDirection.Input);
            AddParameter("@attendenceDate", SqlDbType.VarChar, 50, adate, ParameterDirection.Input);

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


    public List<attendenceMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<attendenceMaster_tableEntities> oList = new List<attendenceMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT a.* , s.studentMname , st.standardName , d.divisionName , t.teacherName 
                            FROM [attendenceMaster] a 
                            JOIN [studentMaster] s ON a.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON a.[classIdFk] = cl.[classIdPk] 
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [classTeacherMaster] ct ON a.[classTeacherIdFk] = ct.[classTeacherIdPk]
                            JOIN [teacherMaster] t ON ct.[teacherIdFk] = t.[teacherIdPk]
                            WHERE a.[isActive] = 1 ";
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
                strQ = @"SELECT [attendenceMaster].attendenceIdPk
                                   ,[attendenceMaster].attendenceName
                                    FROM [attendenceMaster] 
                                    WHERE [attendenceMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["attendenceIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["attendenceIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["attendenceName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["attendenceName"];
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

