using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class employee_tableEntities
{

    private int emp_id = 0;
    private string emp_name = "";
    private int emp_dept_id = 0;
    private string emp_date_of_joinning = "";
    private string emp_designation = "";
    private string emp_qualification = "";
    private int isActive  = 0;

    private department_tableEntities objDept = new department_tableEntities();

    public int Emp_id { get => emp_id; set => emp_id = value; }
    public string Emp_name { get => emp_name; set => emp_name = value; }
    public int Emp_dept_id { get => emp_dept_id; set => emp_dept_id = value; }
    public string Emp_date_of_joinning { get => emp_date_of_joinning; set => emp_date_of_joinning = value; }
    public string Emp_designation { get => emp_designation; set => emp_designation = value; }
    public string Emp_qualification { get => emp_qualification; set => emp_qualification = value; }
    public int IsActive { get => isActive; set => isActive = value; }
    public department_tableEntities ObjDept { get => objDept; set => objDept = value; }
}

