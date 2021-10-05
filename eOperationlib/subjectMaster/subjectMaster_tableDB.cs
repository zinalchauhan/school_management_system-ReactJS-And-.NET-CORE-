using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class subjectMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "subjectMaster";

        public subjectMaster_tableDB()
        {
        }

        public int OnInsert(subjectMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [subjectMaster]
                                   ([subjectName])
                             VALUES
                                   (@subjectName)";

                OnClearParameter();
                AddParameter("@subjectName", SqlDbType.VarChar, 50, obj.SubjectName, ParameterDirection.Input);
                //AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(subjectMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [subjectMaster]
                             SET    [subjectName]=@subjectName,
                                    [isActive] = 1    
                         WHERE [subjectIdPk]=@subjectIdPk";

                OnClearParameter();
                AddParameter("@subjectIdPk", SqlDbType.Int, 50, obj.SubjectIdPk, ParameterDirection.Input);
                AddParameter("@subjectName", SqlDbType.VarChar, 50, obj.SubjectName, ParameterDirection.Input);
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
                strQ += @"UPDATE  [subjectMaster]
                            SET [isActive] =  0
                         WHERE [subjectIdPk]=@subjectIdPk";

                OnClearParameter();
                AddParameter("@subjectIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private subjectMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                subjectMaster_tableEntities obj = new subjectMaster_tableEntities();

                obj.SubjectIdPk = (drRow["subjectIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["subjectIdPk"];
                obj.SubjectName = (drRow["subjectName"].Equals(DBNull.Value)) ? "" : (string)drRow["subjectName"];
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

        public subjectMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            subjectMaster_tableEntities obj = new subjectMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('subjectMaster') ";

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

        public subjectMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            subjectMaster_tableEntities obj = new subjectMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT * FROM [subjectMaster] WHERE [subjectIdPk] = @subjectIdPk , [isActive]='1' ";

                OnClearParameter();
                AddParameter("subjectIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<subjectMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<subjectMaster_tableEntities> oList = new List<subjectMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT * from [subjectMaster] where [subjectMaster].isActive='1'";
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
                strQ = @"SELECT [subjectMaster].subjectIdPk
                                   ,[subjectMaster].subjectName
                                    FROM [subjectMaster] 
                                    WHERE [subjectMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["subjectIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["subjectIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["subjectName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["subjectName"];
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

