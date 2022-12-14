using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class subjectTeacherMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "subjectTeacherMaster";

        public subjectTeacherMaster_tableDB()
        {
        }

        public int OnInsert(subjectTeacherMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [subjectTeacherMaster]
                                   ([classIdFk],[teacherIdFk],[subjectIdFk],[mediumIdFk])
                             VALUES
                                   (@classIdFk,@teacherIdFk,@subjectIdFk,@mediumIdFk)";

                OnClearParameter();

                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@teacherIdFk", SqlDbType.Int, 50, obj.TeacherIdFk, ParameterDirection.Input);
                AddParameter("@subjectIdFk", SqlDbType.Int, 50, obj.SubjectIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                
            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(subjectTeacherMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [subjectTeacherMaster]
                             SET    [classIdFk]=@classIdFk,
                                    [teacherIdFk]=@teacherIdFk,
                                    [subjectIdFk]=@subjectIdFk,
                                    [mediumIdFk]=@mediumIdFk,
                                    [isActive] = 1    
                         WHERE [subjectTeacherIdPk]=@subjectTeacherIdPk";

                OnClearParameter();
                AddParameter("@subjectTeacherIdPk", SqlDbType.Int, 50, obj.SubjectTeacherIdPk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@teacherIdFk", SqlDbType.Int, 50, obj.TeacherIdFk, ParameterDirection.Input);
                AddParameter("@subjectIdFk", SqlDbType.Int, 50, obj.SubjectIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

            return OnExecNonQuery(strQ);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    public List<subjectTeacherMaster_tableEntities> OnGetTeacherListdt( int classId)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;

        List<subjectTeacherMaster_tableEntities> oList = new List<subjectTeacherMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT sbtc.* , t.teacherName , sub.subjectName , s.standardName , d.divisionName
                            FROM [subjectTeacherMaster] sbtc 
                            JOIN [classMaster] cl ON sbtc.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] s ON cl.[standardIdFk] = s.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
                            JOIN [subjectMaster] sub ON sbtc.[subjectIdFk] = sub.[subjectIdPk]
                            WHERE [classIdFk] = @classIdFk
                            and sbtc.[isActive] = 1 ";

            OnClearParameter();
            AddParameter("classIdFk", SqlDbType.Int, 2, classId , ParameterDirection.Input);
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


    public int OnDelete(int ID)
        {
            string strQ = "";
            try
            {
                strQ += @"UPDATE  [subjectTeacherMaster]
                            SET [isActive] =  0
                         WHERE [subjectTeacherIdPk]=@subjectTeacherIdPk";

                OnClearParameter();
                AddParameter("@subjectTeacherIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private subjectTeacherMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                subjectTeacherMaster_tableEntities obj = new subjectTeacherMaster_tableEntities();

                obj.SubjectTeacherIdPk = (drRow["subjectTeacherIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["subjectTeacherIdPk"];
                obj.ClassIdFk = (drRow["classIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classIdFk"];
                obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
                obj.DivisiondName = (drRow["divisionName"].Equals(DBNull.Value)) ? "" : (string)drRow["divisionName"];
                obj.TeacherIdFk = (drRow["teacherIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["teacherIdFk"];
                obj.TeacherName = (drRow["teacherName"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherName"];
                obj.SubjectIdFk = (drRow["subjectIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["subjectIdFk"];
                obj.SubjectName = (drRow["subjectName"].Equals(DBNull.Value)) ? "" : (string)drRow["subjectName"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
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

        public subjectTeacherMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            subjectTeacherMaster_tableEntities obj = new subjectTeacherMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('subjectTeacherMaster') ";

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

        public subjectTeacherMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            subjectTeacherMaster_tableEntities obj = new subjectTeacherMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT sbtc.* , t.teacherName , sub.subjectName , s.standardName , d.divisionName
                            FROM [subjectTeacherMaster] sbtc 
                            JOIN [classMaster] cl ON sbtc.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] s ON cl.[standardIdFk] = s.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
                            JOIN [subjectMaster] sub ON sbtc.[subjectIdFk] = sub.[subjectIdPk]
                            WHERE [subjectTeacherIdPk] = @subjectTeacherIdPk
                            and sbtc.[isActive] = 1";

                OnClearParameter();
                AddParameter("subjectTeacherIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<subjectTeacherMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<subjectTeacherMaster_tableEntities> oList = new List<subjectTeacherMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT sbtc.* , t.teacherName , sub.subjectName , s.standardName , d.divisionName
                            FROM [subjectTeacherMaster] sbtc 
                            JOIN [classMaster] cl ON sbtc.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] s ON cl.[standardIdFk] = s.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
                            JOIN [subjectMaster] sub ON sbtc.[subjectIdFk] = sub.[subjectIdPk]
                            WHERE sbtc.[isActive] = 1  ";
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

    public List<subjectTeacherMaster_tableEntities> OnGetSubTechListdt(int ID)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<subjectTeacherMaster_tableEntities> oList = new List<subjectTeacherMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT sbtc.* , t.teacherName , sub.subjectName , s.standardName , d.divisionName
                            FROM [subjectTeacherMaster] sbtc 
                            JOIN [classMaster] cl ON sbtc.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] s ON cl.[standardIdFk] = s.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [teacherMaster] t ON sbtc.[teacherIdFk] = t.[teacherIdPk]
                            JOIN [subjectMaster] sub ON sbtc.[subjectIdFk] = sub.[subjectIdPk]
                            WHERE sbtc.[classIdFk]=@classIdFk and sbtc.[isActive] = 1  ";
            OnClearParameter();
            AddParameter("classIdFk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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
                strQ = @"SELECT [subjectTeacherMaster].subjectTeacherIdPk
                                   ,[subjectTeacherMaster].subjectTeacherName
                                    FROM [subjectTeacherMaster] 
                                    WHERE [subjectTeacherMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["subjectTeacherIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["subjectTeacherIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["subjectTeacherName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["subjectTeacherName"];
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

