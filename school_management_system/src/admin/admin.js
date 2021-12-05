import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddStudentManually from "./addStudentManually";
import AddStudent from "./addStudent";
import ViewStudent from "./viewStudent";
import ViewRemark from "./viewRemark";
import ViewStandardCard from "./viewStandardCard";
import AddTeacher from "./addTeacher";
import OldStudent from "./oldStudent";
import ViewAttendence from "./viewAttendence";
import ViewTeacher from "./viewTeacher";
import AddClassTeacher from "./addClassTeacher";
import ViewClassTeacher from "./viewClassTeacher";
import AddPrincipal from "./addPrincipal";
import ViewPrincipal from "./viewPrincipal";
import AddSubject from "./addSubject";
import ViewSubject from "./viewSubject";
import AddStandardSubject from "./addStandardSubject";
import AddSubjectTeacher from "./addSubjectTeacher";
import AddTimeTableSetting from "./addTimeTableSetting";
import ViewTimeTableSetting from "./viewTimeTableSetting";
import AddTimeTable from "./addTimeTable";
import AddExam from "./addExam";
import ViewExam from "./viewExam";
import AddExamTimeTable from "./addExamTimeTable";
import AddResult from "./addResult";
import AddResultManually from "./addResultManually";
import AddQuePaper from "./addQuePaper";
import AddStandard from "./addStandard";
import ViewStandard from "./viewStandard";
import AddDivision from "./addDivision";
import ViewDivision from "./viewDivision";
import AddClass from "./addClass";
import ViewClass from "./viewClass";
import AddEvent from "./addEvent";
import ViewEvent from "./viewEvent";
import ViewFeedback from "./viewFeedback";
import AddMedium from "./addMedium";
import ViewMedium from "./viewMedium";
import ViewEngMedTeacher from "./viewEngMedTeacher";
import ViewGujMedTeacher from "./viewGujMedTeacher";
import ViewPrincipalLoginData from "./viewPrincipalLoginData";
import Index from "./index";

function Admin() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/addStudentManually" component={AddStudentManually} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/viewStudent" component={ViewStudent} />
        <Route path="/ViewStandardCard" component={ViewStandardCard} />
        <Route path="/viewRemark" component={ViewRemark} />
        <Route path="/addTeacher" component={AddTeacher} />
        <Route path="/oldStudent" component={OldStudent} />
        <Route path="/viewAttendence" component={ViewAttendence} />
        <Route path="/viewTeacher" component={ViewTeacher} />
        <Route path="/addClassTeacher" component={AddClassTeacher} />
        <Route path="/viewClassTeacher" component={ViewClassTeacher} />
        <Route path="/addPrincipal" component={AddPrincipal} />
        <Route path="/viewPrincipal" component={ViewPrincipal} />
        <Route path="/addSubject" component={AddSubject} />
        <Route path="/viewSubject" component={ViewSubject} />
        <Route path="/addStandardSubject" component={AddStandardSubject} />
        <Route path="/addSubjectTeacher" component={AddSubjectTeacher} />
        <Route path="/addTimeTableSetting" component={AddTimeTableSetting} />
        <Route path="/viewTimeTableSetting" component={ViewTimeTableSetting} />
        <Route path="/addTimeTable" component={AddTimeTable} />
        <Route path="/addExam" component={AddExam} />
        <Route path="/viewExam" component={ViewExam} />
        <Route path="/addExamTimeTable" component={AddExamTimeTable} />
        <Route path="/addResult" component={AddResult} />
        <Route path="/addResultManually" component={AddResultManually} />
        <Route path="/addQuePaper" component={AddQuePaper} />
        <Route path="/addStandard" component={AddStandard} />
        <Route path="/viewStandard" component={ViewStandard} />
        <Route path="/addDivision" component={AddDivision} />
        <Route path="/viewDivision" component={ViewDivision} />
        <Route path="/addClass" component={AddClass} />
        <Route path="/viewClass" component={ViewClass} />
        <Route path="/addEvent" component={AddEvent} />
        <Route path="/viewEvent" component={ViewEvent} />
        <Route path="/viewFeedback" component={ViewFeedback} />
        <Route path="/addMedium" component={AddMedium} />
        <Route path="/viewMedium" component={ViewMedium} />
        <Route path="/viewEngMedTeacher" component={ViewEngMedTeacher} />
        <Route path="/viewGujMedTeacher" component={ViewGujMedTeacher} />
        <Route path="/viewPrincipalLoginData" component={ViewPrincipalLoginData} />
      </Switch>
    </BrowserRouter>
  );
}

export default Admin;
