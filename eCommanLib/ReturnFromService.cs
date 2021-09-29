using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class ReturnFromService
{
    private string strMessage = "";
    private int intUniqID = 0;
    private int intMsgType = 0;

    public string Message
    {
        get { return strMessage; }
        set { strMessage = value; }
    }
    public int UniqId
    {
        get { return intUniqID; }
        set { intUniqID = value; }
    }
    public int MsgType
    {
        get { return intMsgType; }
        set { intMsgType = value; }
    }
}
