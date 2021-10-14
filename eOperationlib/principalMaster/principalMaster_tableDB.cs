using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class principalMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "principalMaster";

        public principalMaster_tableDB()
        {
        }

        public int OnInsert(principalMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [principalMaster]
                                   ([principalName],[principalEmail],[principalMobile],[principalQualification],[principalImage],[principalAddress],[cityIdFk],[mediumIdFk],[standards])
                             VALUES
                                   (@principalName,@principalEmail,@principalMobile,@principalQualification,@principalImage,@principalAddress,@cityIdFk,@mediumIdFk,@standards)";

                OnClearParameter();
                AddParameter("@principalName", SqlDbType.VarChar, 50, obj.PrincipalName, ParameterDirection.Input);
                AddParameter("@principalEmail", SqlDbType.VarChar, 50, obj.PrincipalEmail, ParameterDirection.Input);
                AddParameter("@principalMobile", SqlDbType.VarChar, 50, obj.PrincipalMobile, ParameterDirection.Input);
                AddParameter("@principalQualification", SqlDbType.VarChar, 50, obj.PrincipalQualification, ParameterDirection.Input);
                AddParameter("@principalImage", SqlDbType.VarChar, 50, obj.PrincipalImage, ParameterDirection.Input);
                AddParameter("@principalAddress", SqlDbType.VarChar, 50, obj.PrincipalAddress, ParameterDirection.Input);
                AddParameter("@cityIdFk", SqlDbType.Int, 50, obj.CityIdFk, ParameterDirection.Input);
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

        public int OnUpdate(principalMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [principalMaster]
                             SET    [principalName]=@principalName,
                                    [principalEmail]=@principalEmail,
                                    [principalMobile]=@principalMobile,
                                    [principalQualification]=@principalQualification,
                                    [principalImage]=@principalImage,
                                    [principalAddress]=@principalAddress,
                                    [cityIdFk]=@cityIdFk,
                                    [mediumIdFk]=@mediumIdFk,
                                    [standards]=@standards,
                                    [isActive] = 1    
                         WHERE [principalIdPk]=@principalIdPk";

                OnClearParameter();
                AddParameter("@principalIdPk", SqlDbType.Int, 50, obj.PrincipalIdPk, ParameterDirection.Input);
                AddParameter("@principalName", SqlDbType.VarChar, 50, obj.PrincipalName, ParameterDirection.Input);
                AddParameter("@principalEmail", SqlDbType.VarChar, 50, obj.PrincipalEmail, ParameterDirection.Input);
                AddParameter("@principalMobile", SqlDbType.VarChar, 50, obj.PrincipalMobile, ParameterDirection.Input);
                AddParameter("@principalQualification", SqlDbType.VarChar, 50, obj.PrincipalQualification, ParameterDirection.Input);
                AddParameter("@principalImage", SqlDbType.VarChar, 50, obj.PrincipalImage, ParameterDirection.Input);
                AddParameter("@principalAddress", SqlDbType.VarChar, 50, obj.PrincipalAddress, ParameterDirection.Input);
                AddParameter("@cityIdFk", SqlDbType.Int, 50, obj.CityIdFk, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@standards", SqlDbType.VarChar, 50, obj.Standards, ParameterDirection.Input);
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
                strQ += @"UPDATE  [principalMaster]
                            SET [isActive] =  0
                         WHERE [principalIdPk]=@principalIdPk";

                OnClearParameter();
                AddParameter("@principalIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private principalMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                principalMaster_tableEntities obj = new principalMaster_tableEntities();

                obj.PrincipalIdPk = (drRow["principalIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["principalIdPk"];
                obj.PrincipalName = (drRow["principalName"].Equals(DBNull.Value)) ? "" : (string)drRow["principalName"];
                obj.PrincipalEmail = (drRow["principalEmail"].Equals(DBNull.Value)) ? "" : (string)drRow["principalEmail"];
                obj.PrincipalMobile = (drRow["principalMobile"].Equals(DBNull.Value)) ? "" : (string)drRow["principalMobile"];
                obj.PrincipalQualification = (drRow["principalQualification"].Equals(DBNull.Value)) ? "" : (string)drRow["principalQualification"];
                obj.PrincipalImage = (drRow["principalImage"].Equals(DBNull.Value)) ? "" : (string)drRow["principalImage"];
                obj.PrincipalAddress = (drRow["principalAddress"].Equals(DBNull.Value)) ? "" : (string)drRow["principalAddress"];
                obj.CityIdFk = (drRow["cityIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["cityIdFk"];
                obj.CityName = (drRow["cityName"].Equals(DBNull.Value)) ? "" : (string)drRow["cityName"];
                obj.StateName = (drRow["stateName"].Equals(DBNull.Value)) ? "" : (string)drRow["stateName"];
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

        public principalMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            principalMaster_tableEntities obj = new principalMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('principalMaster') ";

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

        public principalMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            principalMaster_tableEntities obj = new principalMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT p.* , c.cityName , m.mediumName , s.stateName
                            FROM [principalMaster] p 
                            JOIN [cityMaster] c ON p.[cityIdFk] = c.[cityIdPk]
                            JOIN [stateMaster] s ON c.[stateIdFk] = s.[stateIdPk]
                            JOIN [mediumMaster] m ON p.[mediumIdFk] = m.[mediumIdPk]
                            WHERE [principalIdPk] = @principalIdPk
                            and p.[isActive] = 1";

                OnClearParameter();
                AddParameter("principalIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<principalMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<principalMaster_tableEntities> oList = new List<principalMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT p.* , c.cityName , m.mediumName , s.stateName
                            FROM [principalMaster] p 
                            JOIN [cityMaster] c ON p.[cityIdFk] = c.[cityIdPk]
                            JOIN [stateMaster] s ON c.[stateIdFk] = s.[stateIdPk]
                            JOIN [mediumMaster] m ON p.[mediumIdFk] = m.[mediumIdPk]
                            WHERE p.[isActive] = 1 ";
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
                strQ = @"SELECT [principalMaster].principalIdPk
                                   ,[principalMaster].principalName
                                    FROM [principalMaster] 
                                    WHERE [principalMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["principalIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["principalIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["principalName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["principalName"];
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

