
using Microsoft.VisualBasic;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;

public class DisplayError
{

    public static void Show(string strSource, string strMessage, string strModule, string strMethod)
    {
        DisplayMessageBox.Show("Source: " + strSource + " ; Message: " + strMessage + " ; " + "\n" + strModule + ", " + strMethod, MessageBoxButtonsToDisplay.OkOnly);
    }
}
