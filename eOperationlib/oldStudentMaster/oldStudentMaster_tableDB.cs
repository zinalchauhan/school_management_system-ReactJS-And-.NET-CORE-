using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;


public  class oldStudentMaster_tableDB : clsDB_Operation
{
        private const string mstrModuleName = "oldStudentMaster";

        public oldStudentMaster_tableDB()
        {
        }

        public int OnInsert(studentMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {
                strQ = @"INSERT INTO [studentMaster]
                                   ([studentRollNo],[studentGrNo],[mediumIdFk],[classIdFk],[leaveYear],[studentFname],[studentMname],[studentLname],[studentImage],[studentDob],[studentGender],[studentEmail],[studentMobile],[fatherMobile],[studentAddres],[cityIdFk])
                             VALUES
                                   (@studentRollNo,@studentGrNo,@mediumIdFk,@classIdFk,@leaveYear,@studentFname,@studentMname,@studentLname,@studentImage,@studentDob,@studentGender,@studentEmail,@studentMobile,@fatherMobile,@studentAddress,@cityIdFk)";

                OnClearParameter();

                AddParameter("@studentRollNo", SqlDbType.Int, 50, obj.StudentRollNo, ParameterDirection.Input);
                AddParameter("@studentGrNo", SqlDbType.Int, 50, obj.StudentGrNo, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@leaveYear", SqlDbType.Int, 50, obj.CategoryIdFk, ParameterDirection.Input);
                AddParameter("@studentFname", SqlDbType.VarChar, 50, obj.StudentFname, ParameterDirection.Input);
                AddParameter("@studentMname", SqlDbType.VarChar, 50, obj.StudentMname, ParameterDirection.Input);
                AddParameter("@studentLname", SqlDbType.VarChar, 50, obj.StudentLname, ParameterDirection.Input);
                AddParameter("@studentImage", SqlDbType.VarChar, 50, obj.StudentImage, ParameterDirection.Input);
                AddParameter("@studentDob", SqlDbType.VarChar, 50, obj.StudentDob, ParameterDirection.Input);
                AddParameter("@studentGender", SqlDbType.VarChar, 50, obj.StudentGender, ParameterDirection.Input);
                AddParameter("@studentEmail", SqlDbType.VarChar, 50, obj.CategoryIdFk, ParameterDirection.Input);
                AddParameter("@studentMobile", SqlDbType.VarChar, 50, obj.StudentMobile, ParameterDirection.Input);
                AddParameter("@fatherMobile", SqlDbType.VarChar, 50, obj.FatherMobile, ParameterDirection.Input);
                AddParameter("@studentAddress", SqlDbType.VarChar, 50, obj.CategoryIdFk, ParameterDirection.Input);
                AddParameter("@cityIdFk", SqlDbType.Int, 50, obj.CategoryIdFk, ParameterDirection.Input);

            return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int OnUpdate(studentMaster_tableEntities obj)
        {
            string strQ = "";
            try
            {


                strQ = @"UPDATE [studentMaster]
                             SET    [studentRollNo]=@studentRollNo,
                                    [studentGrNo]=@studentGrNo,
                                    [mediumIdFk]=@mediumIdFk,
                                    [classIdFk]=@classIdFk,
                                    [leaveYear]=@leaveYear,
                                    [studentFname]=@studentFname,
                                    [studentMname]=@studentMname
                                    [studentLname]=@studentLname,
                                    [studentImage]=@studentImage,
                                    [studentDob]=@studentDob,
                                    [studentGender]=@studentGender,
                                    [studentEmail]=@studentEmail,
                                    [studentMobile]=@studentMobile,
                                    [fatherMobile]=@fatherMobile,
                                    [studentAddress]=@studentAddress,
                                    [cityIdFk]=@cityIdFk,
                                    [isActive] = 1    
                         WHERE [studentIdPk]=@studentIdPk";

                OnClearParameter();
                AddParameter("@studentRollNo", SqlDbType.Int, 50, obj.StudentRollNo, ParameterDirection.Input);
                AddParameter("@studentGrNo", SqlDbType.Int, 50, obj.StudentGrNo, ParameterDirection.Input);
                AddParameter("@mediumIdFk", SqlDbType.Int, 50, obj.MediumIdFk, ParameterDirection.Input);
                AddParameter("@classIdFk", SqlDbType.Int, 50, obj.ClassIdFk, ParameterDirection.Input);
                AddParameter("@leaveYear", SqlDbType.Int, 50, obj.CategoryIdFk, ParameterDirection.Input);
                AddParameter("@studentFname", SqlDbType.VarChar, 50, obj.StudentFname, ParameterDirection.Input);
                AddParameter("@studentMname", SqlDbType.VarChar, 50, obj.StudentMname, ParameterDirection.Input);
                AddParameter("@studentLname", SqlDbType.VarChar, 50, obj.StudentLname, ParameterDirection.Input);
                AddParameter("@studentImage", SqlDbType.VarChar, 50, obj.StudentImage, ParameterDirection.Input);
                AddParameter("@studentDob", SqlDbType.VarChar, 50, obj.StudentDob, ParameterDirection.Input);
                AddParameter("@studentGender", SqlDbType.VarChar, 50, obj.StudentGender, ParameterDirection.Input);
                AddParameter("@studentEmail", SqlDbType.VarChar, 50, obj.CategoryIdFk, ParameterDirection.Input);
                AddParameter("@studentMobile", SqlDbType.VarChar, 50, obj.StudentMobile, ParameterDirection.Input);
                AddParameter("@fatherMobile", SqlDbType.VarChar, 50, obj.FatherMobile, ParameterDirection.Input);
                AddParameter("@studentAddress", SqlDbType.VarChar, 50, obj.CategoryIdFk, ParameterDirection.Input);
                AddParameter("@cityIdFk", SqlDbType.Int, 50, obj.CategoryIdFk, ParameterDirection.Input);
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
                strQ += @"UPDATE  [studentMaster]
                            SET [isActive] =  0
                         WHERE [studentIdPk]=@studentIdPk";

                OnClearParameter();
                AddParameter("@studentIdPk", SqlDbType.Int, 50, ID, ParameterDirection.Input);
                return OnExecNonQuery(strQ);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private studentMaster_tableEntities BuildEntities(DataRow drRow)
        {

            try
            {
                //DateTime dtdata;
                oldStudentMaster_tableEntities obj = new oldStudentMaster_tableEntities();

                obj.StudentIdPk = (drRow["studentIdPk"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentIdPk"];
                obj.StudentRollNo = (drRow["studentRollNo"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentRollNo"];
                obj.StudentGrNo = (drRow["studentGrNo"].Equals(DBNull.Value)) ? 0 : (int)drRow["studentGrNo"];
                obj.MediumIdFk = (drRow["mediumIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["mediumIdFk"];
                obj.MediumName = (drRow["mediumName"].Equals(DBNull.Value)) ? "" : (string)drRow["mediumName"];
                obj.LeaveYear = (drRow["leaveYear"].Equals(DBNull.Value)) ? 0 : (int)drRow["leaveYear"];
                obj.ClassIdFk = (drRow["classIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["classIdFk"];
                obj.StandardIdFk = (drRow["standardIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["standardIdFk"];
                obj.StandardName = (drRow["standardName"].Equals(DBNull.Value)) ? "" : (string)drRow["standardName"];
                obj.DivisionIdFk = (drRow["divisioIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["divisionIdFk"];
                obj.DivisionName = (drRow["divisionName"].Equals(DBNull.Value)) ? "" : (string)drRow["divisionName"];
                obj.StudentFname = (drRow["studentFname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentFname"];
                obj.StudentMname = (drRow["studentMname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentMname"];
                obj.StudentLname = (drRow["studentLname"].Equals(DBNull.Value)) ? "" : (string)drRow["studentLname"];
                obj.StudentImage = (drRow["studentImage"].Equals(DBNull.Value)) ? "" : (string)drRow["studentImage"];
                obj.StudentDob = (drRow["studentDob"].Equals(DBNull.Value)) ? "" : (string)drRow["studentDob"];
                obj.StudentGender = (drRow["studentGender"].Equals(DBNull.Value)) ? "" : (string)drRow["studentGender"];
                obj.StudentEmail = (drRow["studentEmail"].Equals(DBNull.Value)) ? "" : (string)drRow["studentEmail"];
                obj.StudentMobile = (drRow["studentMobile"].Equals(DBNull.Value)) ? "" : (string)drRow["studentMobile"];
                obj.FatherMobile = (drRow["fatherMobile"].Equals(DBNull.Value)) ? "" : (string)drRow["fatherMobile"];
                obj.StudentAddress = (drRow["studentAddress"].Equals(DBNull.Value)) ? "" : (string)drRow["studentAddress"];
                obj.CityIdFk = (drRow["cityIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["cityIdFk"];
                obj.CityName = (drRow["cityName"].Equals(DBNull.Value)) ? "" : (string)drRow["cityName"];
                obj.StateIdFk = (drRow["stateIdFk"].Equals(DBNull.Value)) ? 0 : (int)drRow["stateIdFk"];
                obj.StateName = (drRow["stateName"].Equals(DBNull.Value)) ? "" : (string)drRow["stateName"];
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

        public studentMaster_tableEntities OnLastRecordInserted()
        {
            Exception exForce;
            DataTable dtTable;

            studentMaster_tableEntities obj = new studentMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT IDENT_CURRENT('studentMaster') ";

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

        public studentMaster_tableEntities OnGetData(int ID)
        {
            Exception exForce;
            DataTable dtTable;

            studentMaster_tableEntities obj = new studentMaster_tableEntities();

            string strQ = "";

            try
            {
                strQ = @"SELECT s.* , m.mediumName , st.standardName , d.divisionName , c.cityName , stt.stateName
                            FROM [studentMaster] s 
                            JOIN [mediumMaster] m ON s.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [cityMaster] c ON s.[cityIdFk] = c.[cityIdPk]
                            JOIN [stateMaster] stt ON c.[stateIdFk] = stt.[stateIdPk] 
                            WHERE [studentIdPk] = @studentIdPk
                            and [isActive] = 1";

                OnClearParameter();
                AddParameter("studentIdPk", SqlDbType.Int, 2, ID, ParameterDirection.Input);

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

        public List<studentMaster_tableEntities> OnGetListdt()
        {
            Exception exForce;
            //IDataReader oReader;
            DataTable dtTable;
            List<studentMaster_tableEntities> oList = new List<studentMaster_tableEntities>();
            string strQ = "";

            try
            {
                strQ = @"SELECT s.* , m.mediumName , st.standardName , d.divisionName , c.cityName , stt.stateName
                            FROM [studentMaster] s 
                            JOIN [mediumMaster] m ON s.[mediumIdFk] = m.[mediumIdPk]
                            JOIN [classMaster] cl ON s.[classIdFk] = cl.[classIdPk]
                            JOIN [standardMaster] st ON cl.[standardIdFk] = st.[standardIdPk]
                            JOIN [divisionMaster] d ON cl.[divisionIdFk] = d.[divisionIdPk]
                            JOIN [cityMaster] c ON s.[cityIdFk] = c.[cityIdPk]
                            JOIN [stateMaster] stt ON c.[stateIdFk] = stt.[stateIdPk] 
                            WHERE [isActive] = 1 ";
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
                strQ = @"SELECT [studentMaster].studentIdPk
                                   ,[studentMaster].studentName
                                    FROM [studentMaster] 
                                    WHERE [studentMaster].isActive = '1'";

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
                    objData.ID = dtTable.Rows[intRow]["studentIdPk"].Equals(DBNull.Value) ? 0 : (int)dtTable.Rows[intRow]["studentIdPk"];
                    objData.NAME = dtTable.Rows[intRow]["studentName"].Equals(DBNull.Value) ? "" : (string)dtTable.Rows[intRow]["studentName"];
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

