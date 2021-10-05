using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class categoryMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "categoryMaster";

        public categoryMaster_tableDB()
        {
        }

        public int OnInsert(categoryMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [categoryMaster]
                                   ([categoryName])
                             VALUES
                                   (@categoryName)";

                OnClearParameter();
                AddParameter("@categoryName", SqlDbType.VarChar, 50, obj.CategoryName, ParameterDirection.Input);
                //AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(categoryMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [categoryMaster]
                             SET    [categoryName]=@categoryName,
                                    [isActive] = 1    
                         WHERE [categoryIdPk]=@categoryIdPk";

                OnClearParameter();
                AddParameter("@categoryIdPk", SqlDbType.Int, 50, obj.CategoryIdPk, ParameterDirection.Input);
                AddParameter("@categoryName", SqlDbType.VarChar, 50, obj.CategoryName, ParameterDirection.Input);
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
                strQ += @"UPDATE  [categoryMaster]
                            SET [isActive] = 1 
                         WHERE [categoryIdPk]=@categoryIdPk";

                OnClearParameter();
                AddParameter("@categoryIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private categoryMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                categoryMaster_tableEntities obj = new categoryMaster_tableEntities();

                obj.CategoryIdPk = (drRow["categoryIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["categoryIdPk"];
                obj.CategoryName = (drRow["categoryName"].Equals(DBNull.Value)) ? "" : (string)drRow["categoryName"];
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

        public categoryMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            categoryMaster_tableEntities obj = new categoryMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('categoryMaster') ";

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

        public categoryMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            categoryMaster_tableEntities obj = new categoryMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT * FROM [categoryMaster] WHERE [categoryIdPk] = @categoryIdPk , [isActive]='1' ";

                OnClearParameter();
                AddParameter("categoryIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<categoryMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<categoryMaster_tableEntities> oList = new List<categoryMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT * from [categoryMaster] where [categoryMaster].isActive='1'";
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
                strQ = @"SELECT [categoryMaster].categoryIdPk
                                   ,[categoryMaster].categoryName
                                    FROM [categoryMaster] 
                                    WHERE [categoryMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["categoryIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["categoryIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["categoryName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["categoryName"];
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

