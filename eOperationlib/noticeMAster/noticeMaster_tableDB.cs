using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class noticeMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "noticeMaster";

        public noticeMaster_tableDB()
        {
        }

        public int OnInsert(noticeMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [noticeMaster]
                                   ([noticeSubject],[noticeDescription],[noticeImage],[fromUserIdFk],[toUserType],[mediumIdFk],[standards])
                             VALUES
                                   (@noticeSubject,@noticeDescription,@noticeImage,@fromUserIdFk,@toUserType,@mediumIdFk,@standards)";

                OnClearParameter();
                AddParameter("@noticeSubject", SqlDbType.VarChar, 50, obj.NoticeSubject, ParameterDirection.Input);
                AddParameter("@noticeDescription", SqlDbType.VarChar, 50, obj.NoticeDescription, ParameterDirection.Input);
                AddParameter("@noticeImage", SqlDbType.VarChar, 50, obj.NoticeImage, ParameterDirection.Input);
                AddParameter("@fromUserIdFk", SqlDbType.Int, 50, obj.FromUserIdFk, ParameterDirection.Input);
                AddParameter("@toUserType", SqlDbType.VarChar, 50, obj.ToUserType, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@standards", SqlDbType.VarChar, 50, obj.Standards, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(noticeMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [noticeMaster]
                             SET    [noticeSubject]=@noticeSubject,
                                    [noticeDescription]=@noticeDescription,
                                    [noticeImage]=@noticeImage,
                                    [fromUserIdFk]=@fromUserIdFk,
                                    [toUserType]=@toUserType,
                                    [mediumIdFk]=@mediumIdFk,
                                    [standards]=@standards,
                                    [isActive] = 1    
                         WHERE [noticeIdPk]=@noticeIdPk";

                OnClearParameter();
                AddParameter("@noticeIdPk", SqlDbType.VarChar, 50, obj.NoticeIdPk, ParameterDirection.Input);
                AddParameter("@noticeSubject", SqlDbType.VarChar, 50, obj.NoticeSubject, ParameterDirection.Input);
                AddParameter("@noticeDescription", SqlDbType.VarChar, 50, obj.NoticeDescription, ParameterDirection.Input);
                AddParameter("@noticeImage", SqlDbType.VarChar, 50, obj.NoticeImage, ParameterDirection.Input);
                AddParameter("@fromUserIdFk", SqlDbType.Int, 50, obj.FromUserIdFk, ParameterDirection.Input);
                AddParameter("@toUserType", SqlDbType.VarChar, 50, obj.ToUserType, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@standards", SqlDbType.VarChar, 50, obj.Standards, ParameterDirection.Input);
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
                strQ += @"UPDATE  [noticeMaster]
                            SET [isActive] =  0
                         WHERE [noticeIdPk]=@noticeIdPk";

                OnClearParameter();
                AddParameter("@noticeIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private noticeMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                noticeMaster_tableEntities obj = new noticeMaster_tableEntities();

                obj.NoticeIdPk = (drRow["noticeIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["noticeIdPk"];
                obj.NoticeSubject = (drRow["noticeSubject"].Equals(DBNull.Value)) ? "" : (string)drRow["noticeSubject"];
                obj.NoticeDescription = (drRow["noticeDescription"].Equals(DBNull.Value)) ? "" : (string)drRow["noticeDescription"];
                obj.NoticeImage = (drRow["noticeImage"].Equals(DBNull.Value)) ? "" : (string)drRow["noticeImage"];
                obj.FromUserIdFk = (drRow["fromUserIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["fromUserIdFk"];
                obj.ToUserType = (drRow["toUserType"].Equals(DBNull.Value)) ? "" : (string)drRow["toUserType"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
                obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
                obj.Standards = (drRow["standards"].Equals(DBNull.Value)) ? "" : (string)drRow["standards"];
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

        public noticeMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            noticeMaster_tableEntities obj = new noticeMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('noticeMaster') ";

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

        public noticeMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            noticeMaster_tableEntities obj = new noticeMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT n.* , m.mediumName
                            FROM [noticeMaster] n
                            JOIN [mediumMaster] m ON n.[mediumIdFk] = m.[mediumIdPk]
                            WHERE [noticeIdPk] = @noticeIdPk 
                            and n.[isActive]='1' ";

                OnClearParameter();
                AddParameter("noticeIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<noticeMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<noticeMaster_tableEntities> oList = new List<noticeMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT n.* , m.mediumName
                            FROM [noticeMaster] n
                            JOIN [mediumMaster] m ON n.[mediumIdFk] = m.[mediumIdPk]
                            WHERE  n.[isActive]='1'";
                
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

    public List<noticeMaster_tableEntities> OnGetStudentNoticeList(string std)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<noticeMaster_tableEntities> oList = new List<noticeMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT n.* , m.mediumName
                            FROM [noticeMaster] n
							JOIN [mediumMaster] m ON n.[mediumIdFk] = m.[mediumIdPk]
							WHERE n.standards LIKE '%" + std+"%'and  n.[isActive]='1'";

            OnClearParameter();

            AddParameter("std", SqlDbType.VarChar, 2, std, ParameterDirection.Input);


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

    public List<noticeMaster_tableEntities> OnGetTeacherNoticeList(int med)
    {
        Exception exForce;
        //IDataReader oReader;
        DataTable dtTable;
        List<noticeMaster_tableEntities> oList = new List<noticeMaster_tableEntities>();
        string strQ = "";

        try
        {
            strQ = @"SELECT n.* , m.mediumName
                            FROM [noticeMaster] n
							JOIN [mediumMaster] m ON n.[mediumIdFk] = m.[mediumIdPk]
							WHERE n.mediumIdFk = @mediumIdFk";

            OnClearParameter();
             
            AddParameter("@mediumIdFk", SqlDbType.Int, 2, med, ParameterDirection.Input);


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
                strQ = @"SELECT [noticeMaster].noticeIdPk
                                   ,[noticeMaster].noticeName
                                    FROM [noticeMaster] 
                                    WHERE [noticeMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["noticeIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["noticeIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["noticeName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["noticeName"];
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

