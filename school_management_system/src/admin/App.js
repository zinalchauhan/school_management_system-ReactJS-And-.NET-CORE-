import logo from "./logo.svg";
import "./App.css";
import Index from "./admin";
import AddStudentManually from "./admin/addStudentManually";
import AddStudent from "./admin/addStudent";
import ViewStudent from "./admin/viewStudent";
import ViewRemark from "./admin/viewRemark";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewStandardCard from "./admin/viewStandardCard";
import AddTeacher from "./admin/addTeacher";
import OldStudent from "./admin/oldStudent";
import ViewAttendence from "./admin/viewAttendence";
import ViewTeacher from "./admin/viewTeacher";
import AddClassTeacher from "./admin/addClassTeacher";
import ViewClassTeacher from "./admin/viewClassTeacher";
import AddPrincipal from "./admin/addPrincipal";
import ViewPrincipal from "./admin/viewPrincipal";
import AddSubject from "./admin/addSubject";
import ViewSubject from "./admin/viewSubject";
import AddStandardSubject from "./admin/addStandardSubject";
import AddSubjectTeacher from "./admin/addSubjectTeacher";
import AddTimeTableSetting from "./admin/addTimeTableSetting";
import ViewTimeTableSetting from "./admin/viewTimeTableSetting";
import AddTimeTable from "./admin/addTimeTable";
import AddExam from "./admin/addExam";
import ViewExam from "./admin/viewExam";
import AddExamTimeTable from "./admin/addExamTimeTable";
import AddResult from "./admin/addResult";
import AddResultManually from "./admin/addResultManually";
import AddQuePaper from "./admin/addQuePaper";
import AddStandard from "./admin/addStandard";
import ViewStandard from "./admin/viewStandard";
import AddDivision from "./admin/addDivision";
import ViewDivision from "./admin/viewDivision";
import AddClass from "./admin/addClass";
import ViewClass from "./admin/viewClass";
import AddEvent from "./admin/addEvent";
import ViewEvent from "./admin/viewEvent";
import ViewFeedback from "./admin/viewFeedback";
import AddMedium from "./admin/addMedium";
import ViewMedium from "./admin/viewMedium";
import ViewEngMedTeacher from "./admin/viewEngMedTeacher";
import ViewGujMedTeacher from "./admin/viewGujMedTeacher";
import ViewPrincipalLoginData from "./admin/viewPrincipalLoginData";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
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

export default App;
