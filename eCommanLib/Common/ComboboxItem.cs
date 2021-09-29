using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

//namespace eCommonLib.Common
//{
public class ComboboxItem
{
    public ComboboxItem()
    {
    }
    public string CODE { get; set; }
    public object ID { get; set; }
    public string NAME { get; set; }
    public string NUMBER { get; set; }

    public override string ToString()
    {
        return CODE;
    }
}

//}
