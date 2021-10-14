using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class questionPaperImageMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "questionPaperImageMaster";

        public questionPaperImageMaster_tableDB()
        {
        }

        public int OnInsert(questionPaperImageMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [questionPaperImageMaster]
                                   ([questionPaperIdFk],[paperImageName])
                             VALUES
                                   (@questionPaperIdFk,@paperImageName)";

                OnClearParameter();

                AddParameter("@questionPaperIdFk", SqlDbType.Int, 50, obj.QuestionPaperIdFk, ParameterDirection.Input);
                AddParameter("@paperImageName", SqlDbType.VarChar, 50, obj.PaperImageName, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(questionPaperImageMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [questionPaperImageMaster]
                             SET    [questionPaperIdFk]=@questionPaperIdFk,
                                    [paperImageName]=@paperImageName,
                                    [isActive] = 1    
                         WHERE [paperImageIdPk]=@paperImageIdPk";

                OnClearParameter();
                AddParameter("@paperImageIdPk", SqlDbType.Int, 50, obj.PaperImageIdPk, ParameterDirection.Input);
                AddParameter("@questionPaperIdFk", SqlDbType.Int, 50, obj.QuestionPaperIdFk, ParameterDirection.Input);
                AddParameter("@paperImageName", SqlDbType.VarChar, 50, obj.PaperImageName, ParameterDirection.Input);

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
                strQ += @"UPDATE  [questionPaperImageMaster]
                            SET [isActive] =  0
                         WHERE [paperImageIdPk]=@paperImageIdPk";

                OnClearParameter();
                AddParameter("@paperImageIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private questionPaperImageMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                questionPaperImageMaster_tableEntities obj = new questionPaperImageMaster_tableEntities();

                obj.PaperImageIdPk = (drRow["paperImageIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["paperImageIdPk"];
                obj.QuestionPaperIdFk = (drRow["questionPaperIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["questionPaperIdFk"];
                obj.PaperImageName = (drRow["paperImageName"].Equals(DBNull.Value)) ? "" : (string)drRow["paperImageName"];
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

        public questionPaperImageMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            questionPaperImageMaster_tableEntities obj = new questionPaperImageMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('questionPaperImageMaster') ";

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

        public questionPaperImageMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            questionPaperImageMaster_tableEntities obj = new questionPaperImageMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT qpi.* 
                            FROM [questionPaperImageMaster] qpi 
                            JOIN [questionPaperMaster] qp ON qpi.[questionPaperIdFk] = qp.[questionPaperIdPk] 
                            WHERE [paperImageIdPk] = @paperImageIdPk
                            and qpi.[isActive] = 1";

                OnClearParameter();
                AddParameter("paperImageIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<questionPaperImageMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<questionPaperImageMaster_tableEntities> oList = new List<questionPaperImageMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT qpi.* 
                            FROM [questionPaperImageMaster] qpi 
                            JOIN [questionPaperMaster] qp ON qpi.[questionPaperIdFk] = qp.[questionPaperIdPk] 
                            WHERE qpi.[isActive] = 1 ";
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
                strQ = @"SELECT [questionPaperImageMaster].questionPaperImageIdPk
                                   ,[questionPaperImageMaster].questionPaperImageName
                                    FROM [questionPaperImageMaster] 
                                    WHERE [questionPaperImageMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["questionPaperImageIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["questionPaperImageIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["questionPaperImageName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["questionPaperImageName"];
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

