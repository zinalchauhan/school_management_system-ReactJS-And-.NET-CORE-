using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class examMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "examMaster";

        public examMaster_tableDB()
        {
        }

        public int OnInsert(examMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [examMaster]
                                   ([examName],[examTotalMarks],[examStartDate],[examEndDate],[mediumIdFk],[resultDate],[academicYear])
                             VALUES
                                   (@examName,@examTotalMarks,@examStartDate,@examEndDate,@mediumIdFk,@resultDate,@academicYear)";

                OnClearParameter();
                AddParameter("@examName", SqlDbType.VarChar, 50, obj.ExamName, ParameterDirection.Input);
                AddParameter("@examTotalMarks", SqlDbType.VarChar, 50, obj.ExamTotalMarks, ParameterDirection.Input);
                AddParameter("@examStartDate", SqlDbType.VarChar, 50, obj.ExamStartDate, ParameterDirection.Input);
                AddParameter("@examEndDate", SqlDbType.VarChar, 50, obj.ExamEndDate, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@resultDate", SqlDbType.VarChar, 50, obj.ResultDate, ParameterDirection.Input);
                AddParameter("@academicYear", SqlDbType.VarChar, 50, obj.AcademicYear, ParameterDirection.Input);


            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(examMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [examMaster]
                             SET    [examName]=@examName,
                                    [examTotalMarks]=@examTotalMarks,
                                    [examStartDate]=@examStartDate,
                                    [examEndDate]=@examEndDate,
                                    [mediumIdFk]=@mediumIdFk,
                                    [resultDate]=@resultDate,
                                    [academicYear]=@academicYear,
                                    [isActive] = 1    
                         WHERE [examIdPk]=@examIdPk";

                OnClearParameter();
                AddParameter("@examName", SqlDbType.VarChar, 50, obj.ExamName, ParameterDirection.Input);
                AddParameter("@examTotalMarks", SqlDbType.VarChar, 50, obj.ExamTotalMarks, ParameterDirection.Input);
                AddParameter("@examStartDate", SqlDbType.VarChar, 50, obj.ExamStartDate, ParameterDirection.Input);
                AddParameter("@examEndDate", SqlDbType.VarChar, 50, obj.ExamEndDate, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@resultDate", SqlDbType.VarChar, 50, obj.ResultDate, ParameterDirection.Input);
                AddParameter("@academicYear", SqlDbType.VarChar, 50, obj.AcademicYear, ParameterDirection.Input);
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
                strQ += @"UPDATE  [examMaster]
                            SET [isActive] =  0
                         WHERE [examIdPk]=@examIdPk";

                OnClearParameter();
                AddParameter("@examIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private examMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                examMaster_tableEntities obj = new examMaster_tableEntities();

                obj.ExamIdPk = (drRow["examIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["examIdPk"];
                obj.ExamName = (drRow["examName"].Equals(DBNull.Value)) ? "" : (string)drRow["examName"];
                obj.ExamTotalMarks = (drRow["examTotalMarks"].Equals(DBNull.Value)) ? 0 : (int)drRow["examTotalMarks"];
                obj.ExamStartDate = (drRow["examStartDate"].Equals(DBNull.Value)) ? "" : (string)drRow["examStartDate"];
                obj.ExamEndDate = (drRow["examEndDate"].Equals(DBNull.Value)) ? "" : (string)drRow["examEndDate"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
                obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
                obj.ResultDate = (drRow["resultDate"].Equals(DBNull.Value)) ? "" : (string)drRow["resultDate"];
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

        public examMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            examMaster_tableEntities obj = new examMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('examMaster') ";

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

        public examMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            examMaster_tableEntities obj = new examMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT e.* , m.mediumName 
                            FROM [examMaster] e
                            JOIN [mediumMaster] m ON e.[mediumIdFk] = m.[mediumIdPk]
                            WHERE [examIdPk] = @examIdPk 
                            and [isActive]='1' ";

                OnClearParameter();
                AddParameter("examIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<examMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<examMaster_tableEntities> oList = new List<examMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT e.* , m.mediumName 
                            FROM [examMaster] e
                            JOIN [mediumMaster] m ON e.[mediumIdFk] = m.[mediumIdPk]
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
                strQ = @"SELECT [examMaster].examIdPk
                                   ,[examMaster].examName
                                    FROM [examMaster] 
                                    WHERE [examMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["examIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["examIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["examName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["examName"];
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

