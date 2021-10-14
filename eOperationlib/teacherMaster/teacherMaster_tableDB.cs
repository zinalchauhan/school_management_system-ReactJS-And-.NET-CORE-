using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class teacherMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "teacherMaster";

        public teacherMaster_tableDB()
        {
        }

        public int OnInsert(teacherMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [teacherMaster]
                                   ([teacherName],[teacherEmail],[teacherMobile],[teacherQualification],[teacherImage],[teacherAddress],[cityIdFk],[mediumIdFk],[subjects])
                             VALUES
                                   (@teacherName,@teacherEmail,@teacherMobile,@teacherQualification,@teacherImage,@teacherAddress,@cityIdFk,@mediumIdFk,@subjects)";

                OnClearParameter();
                AddParameter("@teacherName", SqlDbType.VarChar, 50, obj.TeacherName, ParameterDirection.Input);
                AddParameter("@teacherEmail", SqlDbType.VarChar, 50, obj.TeacherEmail, ParameterDirection.Input);
                AddParameter("@teacherMobile", SqlDbType.VarChar, 50, obj.TeacherMobile, ParameterDirection.Input);
                AddParameter("@teacherQualification", SqlDbType.VarChar, 50, obj.TeacherQualification, ParameterDirection.Input);
                AddParameter("@teacherImage", SqlDbType.VarChar, 50, obj.TeacherImage, ParameterDirection.Input);
                AddParameter("@teacherAddress", SqlDbType.VarChar, 50, obj.TeacherAddress, ParameterDirection.Input);
                AddParameter("@cityIdFk", SqlDbType.Int, 50, obj.CityIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@subjects", SqlDbType.VarChar, 50, obj.Subjects, ParameterDirection.Input);
            //AddParameter("@isActive", SqlDbType.Int, 50, obj.IsActive, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(teacherMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [teacherMaster]
                             SET    [teacherName]=@teacherName,
                                    [teacherEmail]=@teacherEmail,
                                    [teacherMobile]=@teacherMobile,
                                    [teacherQualification]=@teacherQualification,
                                    [teacherImage]=@teacherImage,
                                    [teacherAddress]=@teacherAddress,
                                    [cityIdFk]=@cityIdFk,
                                    [mediumIdFk]=@mediumIdFk,
                                    [subjects]=@subjects,
                                    [isActive] = 1    
                         WHERE [teacherIdPk]=@teacherIdPk";

                OnClearParameter();
                AddParameter("@teacherIdPk", SqlDbType.Int, 50, obj.TeacherIdPk, ParameterDirection.Input);
                AddParameter("@teacherName", SqlDbType.VarChar, 50, obj.TeacherName, ParameterDirection.Input);
                AddParameter("@teacherEmail", SqlDbType.VarChar, 50, obj.TeacherEmail, ParameterDirection.Input);
                AddParameter("@teacherMobile", SqlDbType.VarChar, 50, obj.TeacherMobile, ParameterDirection.Input);
                AddParameter("@teacherQualification", SqlDbType.VarChar, 50, obj.TeacherQualification, ParameterDirection.Input);
                AddParameter("@teacherImage", SqlDbType.VarChar, 50, obj.TeacherImage, ParameterDirection.Input);
                AddParameter("@teacherAddress", SqlDbType.VarChar, 50, obj.TeacherAddress, ParameterDirection.Input);
                AddParameter("@cityIdFk", SqlDbType.Int, 50, obj.CityIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@subjects", SqlDbType.VarChar, 50, obj.Subjects, ParameterDirection.Input);
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
                strQ += @"UPDATE  [teacherMaster]
                            SET [isActive] =  0
                         WHERE [teacherIdPk]=@teacherIdPk";

                OnClearParameter();
                AddParameter("@teacherIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private teacherMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                teacherMaster_tableEntities obj = new teacherMaster_tableEntities();

                obj.TeacherIdPk = (drRow["teacherIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["teacherIdPk"];
                obj.TeacherName = (drRow["teacherName"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherName"];
                obj.TeacherEmail = (drRow["teacherEmail"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherEmail"];
                obj.TeacherMobile = (drRow["teacherMobile"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherMobile"];
                obj.TeacherQualification = (drRow["teacherQualification"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherQualification"];
                obj.TeacherImage = (drRow["teacherImage"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherImage"];
                obj.TeacherAddress = (drRow["teacherAddress"].Equals(DBNull.Value)) ? "" : (string)drRow["teacherAddress"];
                obj.CityIdFk = (drRow["cityIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["cityIdFk"];
                obj.CityName = (drRow["cityName"].Equals(DBNull.Value)) ? "" : (string)drRow["cityName"];
                obj.StateName = (drRow["stateName"].Equals(DBNull.Value)) ? "" : (string)drRow["stateName"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
                obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
                obj.Subjects = (drRow["subjects"].Equals(DBNull.Value)) ? "" : (string)drRow["subjects"];
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

        public teacherMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            teacherMaster_tableEntities obj = new teacherMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('teacherMaster') ";

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

        public teacherMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            teacherMaster_tableEntities obj = new teacherMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT t.* , c.cityName , m.mediumName , s.stateName
                            FROM [teacherMaster] t 
                            JOIN [cityMaster] c ON t.[cityIdFk] = c.[cityIdPk]
                            JOIN [stateMaster] s ON c.[stateIdFk] = s.[stateIdPk]
                            JOIN [mediumMaster] m ON t.[mediumIdFk] = m.[mediumIdPk]
                            WHERE [teacherIdPk] = @teacherIdPk
                            and t.[isActive] = 1";

                OnClearParameter();
                AddParameter("teacherIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<teacherMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<teacherMaster_tableEntities> oList = new List<teacherMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT t.* , c.cityName , m.mediumName , s.stateName
                            FROM [teacherMaster] t 
                            JOIN [cityMaster] c ON t.[cityIdFk] = c.[cityIdPk]
                            JOIN [stateMaster] s ON c.[stateIdFk] = s.[stateIdPk]
                            JOIN [mediumMaster] m ON t.[mediumIdFk] = m.[mediumIdPk]
                            WHERE t.[isActive] = 1 ";
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
                strQ = @"SELECT [teacherMaster].teacherIdPk
                                   ,[teacherMaster].teacherName
                                    FROM [teacherMaster] 
                                    WHERE [teacherMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["teacherIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["teacherIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["teacherName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["teacherName"];
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

