using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class department_tableEntities
{

    private int dept_id = 0;
    private string dept_name = "";
    private int is_active = 0;

    public int Dept_id { get => dept_id; set => dept_id = value; }
    public string Dept_name { get => dept_name; set => dept_name = value; }
    public int Is_active { get => is_active; set => is_active = value; }
}

