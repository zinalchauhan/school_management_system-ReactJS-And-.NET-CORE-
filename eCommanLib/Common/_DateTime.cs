
using Microsoft.VisualBasic;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;

public class _DateTime
{
    private const string mstrModuleName = "_DateTime";
    public static DateTime ConvertDate(string strDate)
    {
        DateTime dt=new DateTime();          
        Exception exForce;
        string sDate="";

        try
        {

            if (string.IsNullOrEmpty(strDate))
            {
                exForce = new Exception("Date is null/empty");
                throw exForce;
            }
            sDate = strDate.Trim();
            if (sDate.Length != 8)
            {  
                exForce = new Exception("Date length problem");
                throw exForce;                     
            }
            dt=new DateTime(Convert.ToInt32(strDate.Substring(0, 4)),Convert.ToInt32(strDate.Substring(4, 2)),Convert.ToInt32(strDate.Substring(6, 2)));
        }
        catch (Exception ex)
        {
            throw ex;
        }       

        return dt;
    }
    public static DateTime ConvertTime(string strTime)
    {
        DateTime dt = new DateTime();

        string sDate = strTime.Trim();
        Exception exForce;

        try
        {
            if (sDate.Length != 5)
            {
                exForce = new Exception("Time length problem");
                throw exForce;
            }

            dt = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, Convert.ToInt32(strTime.Substring(0, 2)), Convert.ToInt32(strTime.Substring(3, 2)),0);
            return dt;
        }
        catch (Exception ex)
        {
            throw ex;
            return dt;
        }
        
    }
    public static string ConvertDate(DateTime dtDate)
    {
        string strDate = "";        

        try
        {
            strDate += dtDate.Year.ToString();
            strDate += dtDate.Month.ToString("0#");
            strDate += dtDate.Day.ToString("0#");            
        }
        catch (Exception ex)
        {
            throw ex;
        }

        return strDate;
    }
    public static string ConvertTime(DateTime dtDate)
    {
        string strDate = "";

        try
        {
            
            strDate += dtDate.Hour.ToString("0#");
            strDate += dtDate.Minute.ToString("0#");
        }
        catch (Exception ex)
        {
            throw ex;
        }

        return strDate;
    }
}




            