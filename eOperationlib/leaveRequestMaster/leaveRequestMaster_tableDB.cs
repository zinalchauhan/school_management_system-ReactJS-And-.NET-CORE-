using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class leaveRequestMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "leaveRequestMaster";

        public leaveRequestMaster_tableDB()
        {
        }

        public int OnInsert(leaveRequestMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [leaveRequestMaster]
                                   ([studentIdFk],[userType],[classIdFk],[leaveRequestTitle],[leaveRequestDetail],[status])
                             VALUES
                                   (@studentIdFk,@userType,@classIdFk,@leaveRequestTitle,@leaveRequestDetail,@status)";

                OnClearParameter();

                AddParameter("@studentIdFk", SqlDbType.Int, 50, obj.StudentIdFk, ParameterDirection.Input);
                AddParameter("@userType", SqlDbType.VarChar, 50, obj.UserType, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@leaveRequestTitle", SqlDbType.VarChar, 50, obj.LeaveRequestTitle, ParameterDirection.Input);
                AddParameter("@leaveRequestDetail", SqlDbType.VarChar, 50, obj.LeaveRequestDetail, ParameterDirection.Input);
                AddParameter("@addedOn", SqlDbType.VarChar, 50, obj.AddedOn, ParameterDirection.Input);
            AddParameter("@status", SqlDbType.Int, 50, obj.Status, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(leaveRequestMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"UPDATE [leaveRequestMaster]
                                  set  [status]=@status
                         WHERE [leaveRequestIdPk]=@leaveRequestIdPk";

                OnClearParameter();
                AddParameter("@leaveRequestIdPk", SqlDbType.Int, 50, obj.LeaveRequestIdPk, ParameterDirection.Input);
                
                AddParameter("@status", SqlDbType.Int, 50, obj.Status, ParameterDirection.Input);

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
                strQ += @"UPDATE  [leaveRequestMaster]
                            SET [isActive] =  0
                         WHERE [leaveRequestIdPk]=@leaveRequestIdPk";

                OnClearParameter();
                AddParameter("@leaveRequestIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private leaveRequestMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                leaveRequestMaster_tableEntities obj = new leaveRequestMaster_tableEntities();

                obj.LeaveRequestIdPk = (drRow["leaveRequestIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["leaveRequestIdPk"];
                obj.StudentIdFk = (drRow["studentIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentIdFk"];
                obj.ClassIdFk = (drRow["classIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classIdFk"];
                obj.UserType = (drRow["userType"].Equals(DBNull.Value)) ? "" : (string)drRow["userType"];
                obj.LeaveRequestTitle = (drRow["leaveRequestTitle"].Equals(DBNull.Value)) ? "" : (string)drRow["leaveRequestTitle"];
                obj.LeaveRequestDetail = (drRow["leaveRequestDetail"].Equals(DBNull.Value)) ? "" : (string)drRow["leaveRequestDetail"];
                obj.AddedOn = (drRow["addedOn"].Equals(DBNull.Value)) ? "" : drRow["addedOn"].ToString();
                obj.IsActive = (drRow["isActive"].Equals(DBNull.Value)) ? 0 : Int32.Parse(drRow["isActive"].ToString());
            obj.Status = (drRow["status"].Equals(DBNull.Value)) ? 0 : Int32.Parse(drRow["status"].ToString());
            if (obj.ClassIdFk != 0)
            {
                studentMaster_tableDB objStud = new studentMaster_tableDB();
                studentMaster_tableEntities student = objStud.OnGetData(obj.StudentIdFk);
                //obj. = (drRow["semName"].Equals(DBNull.Value)) ? "" : (string)drRow["semName"];
                obj.StudentMname = student.StudentMname;
                obj.StudentFName = student.StudentFname;
                classMaster_tableDB objClass = new classMaster_tableDB();
                classMaster_tableEntities classData = objClass.OnGetData(obj.ClassIdFk);
                obj.StandardName = classData.StandardName;
                obj.DivisionName = classData.DivisionName;

            }
            else
            {
                obj.TeacherName = (drRow["teacherName"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherName"];
            }
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

        public leaveRequestMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            leaveRequestMaster_tableEntities obj = new leaveRequestMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('leaveRequestMaster') ";

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

        public leaveRequestMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            leaveRequestMaster_tableEntities obj = new leaveRequestMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT lr.* , s.studentMname , st.standardName , d.divisionName 
                            FROM [leaveRequestMaster] lr 
                            JOIN [studentMaster] s ON lr.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk] 
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            WHERE [leaveRequestIdPk] = @leaveRequestIdPk
                            and lr.[isActive] = 1";

                OnClearParameter();
                AddParameter("leaveRequestIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

    public List<leaveRequestMaster_tableEntities> getLeaveList(int id)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<leaveRequestMaster_tableEntities> oList = new List<leaveRequestMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT lr.* , s.studentMname , st.standardName , d.divisionName , s.studentFname
                            FROM [leaveRequestMaster] lr 
                            JOIN [studentMaster] s ON lr.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk] 
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            WHERE lr.studentIdFk = @studentIdFK
							and lr.[isActive] = 1 ";
            OnClearParameter();
            AddParameter("@studentIdFk", SqlDbType.Int, 2, id, ParameterDirection.Input);

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

    public List<leaveRequestMaster_tableEntities> getLeaveByClass(int id)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<leaveRequestMaster_tableEntities> oList = new List<leaveRequestMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT lr.* , s.studentMname , st.standardName , d.divisionName , s.studentFname
                            FROM [leaveRequestMaster] lr 
                            JOIN [studentMaster] s ON lr.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk] 
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            WHERE lr.[classIdFk] = @classIdFk
							and lr.[isActive] = 1 ";
            OnClearParameter();
            AddParameter("@classIdFk", SqlDbType.Int, 2, id, ParameterDirection.Input);

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


    public List<leaveRequestMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<leaveRequestMaster_tableEntities> oList = new List<leaveRequestMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT lr.* , s.studentMname , st.standardName , d.divisionName 
                            FROM [leaveRequestMaster] lr 
                            JOIN [studentMaster] s ON lr.[studentIdFk] = s.[studentIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk] 
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            WHERE lr.[isActive] = 1 ";
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

    public List<leaveRequestMaster_tableEntities> OnGetListTeacher()
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<leaveRequestMaster_tableEntities> oList = new List<leaveRequestMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT lr.* , t.teacherName 
                            FROM [leaveRequestMaster] lr 
                            JOIN [teacherMaster] t ON lr.[studentIdFk] = t.teacherIdPk
                            WHERE lr.[isActive] = 1 and lr.[userType]='teacher' ";
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
                strQ = @"SELECT [leaveRequestMaster].leaveRequestIdPk
                                   ,[leaveRequestMaster].leaveRequestName
                                    FROM [leaveRequestMaster] 
                                    WHERE [leaveRequestMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["leaveRequestIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["leaveRequestIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["leaveRequestName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["leaveRequestName"];
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

