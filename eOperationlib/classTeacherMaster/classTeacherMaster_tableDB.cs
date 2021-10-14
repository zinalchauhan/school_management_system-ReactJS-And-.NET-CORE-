using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class classTeacherMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "classTeacherMaster";

        public classTeacherMaster_tableDB()
        {
        }

        public int OnInsert(classTeacherMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [classTeacherMaster]
                                   ([classIdFk],[teacherIdFk],[mediumIdFk])
                             VALUES
                                   (@classIdFk,@teacherIdFk,@mediumIdFk)";

                OnClearParameter();

                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@teacherIdFk", SqlDbType.Int, 50, obj.TeacherIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                
            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(classTeacherMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [classTeacherMaster]
                             SET    [classIdFk]=@classIdFk,
                                    [teacherIdFk]=@teacherIdFk,
                                    [mediumIdFk]=@mediumIdFk,
                                    [isActive] = 1    
                         WHERE [classTeacherIdPk]=@classTeacherIdPk";

                OnClearParameter();
                AddParameter("@classTeacherIdPk", SqlDbType.Int, 50, obj.ClassTeacherIdPk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@teacherIdFk", SqlDbType.Int, 50, obj.TeacherIdFk, ParameterDirection.Input);
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
                strQ += @"UPDATE  [classTeacherMaster]
                            SET [isActive] =  0
                         WHERE [classTeacherIdPk]=@classTeacherIdPk";

                OnClearParameter();
                AddParameter("@classTeacherIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private classTeacherMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                classTeacherMaster_tableEntities obj = new classTeacherMaster_tableEntities();

                obj.ClassTeacherIdPk = (drRow["classTeacherIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classTeacherIdPk"];
                obj.ClassIdFk = (drRow["classIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classIdFk"];
                obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
                obj.DivisiondName = (drRow["divisionName"].Equals(DBNull.Value)) ? "" : (string)drRow["divisionName"];
                obj.TeacherIdFk = (drRow["teacherIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["teacherIdFk"];
                obj.TeacherName = (drRow["teacherName"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherName"];
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

        public classTeacherMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            classTeacherMaster_tableEntities obj = new classTeacherMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('classTeacherMaster') ";

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

        public classTeacherMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            classTeacherMaster_tableEntities obj = new classTeacherMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT cltc.* , t.teacherName , s.standardName , d.divisionName
                            FROM [classTeacherMaster] cltc 
                            JOIN [classMaster] cl ON cltc.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] s ON cl.[standardIdFk] = s.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [teacherMaster] t ON cltc.[teacherIdFk] = t.[teacherIdPk]
                            WHERE [classTeacherIdPk] = @classTeacherIdPk
                            and cltc.[isActive] = 1";

                OnClearParameter();
                AddParameter("classTeacherIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<classTeacherMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<classTeacherMaster_tableEntities> oList = new List<classTeacherMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT cltc.* , t.teacherName , s.standardName , d.divisionName
                            FROM [classTeacherMaster] cltc 
                            JOIN [classMaster] cl ON cltc.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] s ON cl.[standardIdFk] = s.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [teacherMaster] t ON cltc.[teacherIdFk] = t.[teacherIdPk]
                            WHERE cltc.[isActive] = 1 ";
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
                strQ = @"SELECT [classTeacherMaster].classTeacherIdPk
                                   ,[classTeacherMaster].classTeacherName
                                    FROM [classTeacherMaster] 
                                    WHERE [classTeacherMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["classTeacherIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["classTeacherIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["classTeacherName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["classTeacherName"];
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

