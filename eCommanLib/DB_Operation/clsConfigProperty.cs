using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


    public class clsConfigProperty
    {
       

        public clsConfigProperty()
        {
            // objINI = new clsINI(DB_Config._INI_File_Path + "" + DB_Config._INI_File);       
        }

        private string mstrServer = "";
        private string mstrDB_Config = "";
        private string mstrDB_Transaction = "";
        private string mstrUser = "";
        private string mstrPassword = "";

        public string _Server
        {
            get { return mstrServer; }
            set { mstrServer = value; }
        }

        public string _DB_Config
        {
            get { return mstrDB_Config; }
            set { mstrDB_Config = value; }
        }


        public string _DB_Transaction
        {
            get { return mstrDB_Transaction; }
            set { mstrDB_Transaction = value; }
        }


        public string _User
        {
            get { return mstrUser; }
            set { mstrUser = value; }
        }


        public string _Password
        {
            get { return mstrPassword; }
            set { mstrPassword = value; }
        }
    }
//}