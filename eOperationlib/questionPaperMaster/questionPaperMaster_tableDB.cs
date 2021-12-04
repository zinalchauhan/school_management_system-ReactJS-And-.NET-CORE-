using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class questionPaperMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "questionPaperMaster";

        public questionPaperMaster_tableDB()
        {
        }

        public int OnInsert(questionPaperMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [questionPaperMaster]
                                   ([standardIdFk],[subjectIdFk],[mediumIdFk],[academicYear])
                             VALUES
                                   (@standardIdFk,@subjectIdFk,@mediumIdFk,@academicYear)";

                OnClearParameter();
                AddParameter("@standardIdFk", SqlDbType.Int, 50, obj.StandardIdFk, ParameterDirection.Input);
                AddParameter("@subjectIdFk", SqlDbType.Int, 50, obj.SubjectIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@academicYear", SqlDbType.Int, 50, obj.AcademicYear, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(questionPaperMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [questionPaperMaster]
                             SET    [standardIdFk]=@standardIdFk,
                                    [subjectIdFk]=@subjectIdFk,
                                    [mediumIdFk]=@mediumIdFk,
                                    [academicYear]=@academicYear
                      WHERE [questionPaperIdPk]=@queationPaperIdPk";

                OnClearParameter();
                AddParameter("@queationPaperIdPk", SqlDbType.Int, 50, obj.QuestionPaperIdPk, ParameterDirection.Input);
                AddParameter("@standardIdFk", SqlDbType.Int, 50, obj.StandardIdFk, ParameterDirection.Input);
                AddParameter("@subjectIdFk", SqlDbType.Int, 50, obj.SubjectIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@academicYear", SqlDbType.Int, 50, obj.AcademicYear, ParameterDirection.Input);
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
                strQ += @"UPDATE  [questionPaperMaster]
                            SET [isActive] =  0
                         WHERE [questionPaperIdPk]=@questionPaperIdPk";

                OnClearParameter();
                AddParameter("@questionPaperIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private questionPaperMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                questionPaperMaster_tableEntities obj = new questionPaperMaster_tableEntities();

                obj.QuestionPaperIdPk = (drRow["questionPaperIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["questionPaperIdPk"];
                obj.StandardIdFk = (drRow["standardIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["standardIdFk"];
                obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
                obj.SubjectIdFk = (drRow["subjectIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["subjectIdFk"];
                obj.SubjectName = (drRow["subjectName"].Equals(DBNull.Value)) ? "" : (string)drRow["subjectName"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
                obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
                obj.AcademicYear = (drRow["academicYear"].Equals(DBNull.Value)) ? 0 : (int)drRow["academicYear"];
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

    public int OnLastRecordInserted()
    {
        Exception exForce;
        DataTable dtTable;

        int lastId = 0;
        string strQ = "";

        try
        {
            strQ = @"SELECT IDENT_CURRENT('questionPaperMaster') ";

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
                lastId = Int32.Parse(dtTable.Rows[0].ItemArray[0].ToString());
            }

            return lastId;

        }
        catch (Exception ex)
        {
            throw ex;
        }
    }


    public questionPaperMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            questionPaperMaster_tableEntities obj = new questionPaperMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT qp.* , st.standardName , sb.subjectName , m.mediumName
                            FROM [questionPaperMaster] qp
                            JOIN [standardMaster] st ON qp.[standardIdFk] = st.[standardIdPk]
                            JOIN [subjectMaster] sb ON qp.[subjectIdFk] = sb.[subjectIdPk]
                            JOIN [mediumMaster] m ON qp.[mediumIdFk] = m.[mediumIdPk]
                            WHERE [questionPaperIdPk] = @questionPaperIdPk 
                            and qp.[isActive]='1' ";

                OnClearParameter();
                AddParameter("questionPaperIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<questionPaperMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<questionPaperMaster_tableEntities> oList = new List<questionPaperMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT qp.* , st.standardName , sb.subjectName , m.mediumName
                            FROM [questionPaperMaster] qp
                            JOIN [standardMaster] st ON qp.[standardIdFk] = st.[standardIdPk]
                            JOIN [subjectMaster] sb ON qp.[subjectIdFk] = sb.[subjectIdPk]
                            JOIN [mediumMaster] m ON qp.[mediumIdFk] = m.[mediumIdPk]
                            WHERE qp.[isActive]='1'";
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
                strQ = @"SELECT [questionPaperMaster].questionPaperIdPk
                                   ,[questionPaperMaster].questionPaperName
                                    FROM [questionPaperMaster] 
                                    WHERE [questionPaperMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["questionPaperIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["questionPaperIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["questionPaperName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["questionPaperName"];
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

