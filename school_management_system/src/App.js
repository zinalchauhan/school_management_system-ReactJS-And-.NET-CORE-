import logo from "./logo.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import { Login } from "./admin/login";

//--- ADMIN URLS ---
import Index from "./admin/index";
import AddStudentManually from "./admin/addStudentManually";
import AddStudent from "./admin/addStudent";
import ViewStudent from "./admin/viewStudent";
import ViewRemark from "./admin/viewRemark";
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

//--- STUDENT URLS ---
import studentIndex from "./student";
import viewTeacherList from "./student/viewTeacherList";
import viewRemarkList from "./student/viewRemarkList";
import viewNoticeList from "./student/viewNoticeList";

//--- TEACHER URLS ---
import teacherIndex from "./teacher";

//--- PRINCIPAL URLS ---
import principalIndex from "./principal";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      
      <Switch>

      <Route path="/" exact component={Login} />

      {/* if(sessionStorage.getItem("isLogin") === "true") {
        if(sessionStorage.getItem("userType" === "admin")){

        }
      }  */}

        
        
          <Route path="/admin" exact component={Index} />
          <Route path="/admin/addStudentManually" component={AddStudentManually} />
          <Route path="/admin/addStudent" component={AddStudent} />
          <Route path="/admin/viewStudent" component={ViewStudent} />
          <Route path="/admin/ViewStandardCard" component={ViewStandardCard} />
          <Route path="/admin/viewRemark" component={ViewRemark} />
          <Route path="/admin/addTeacher" component={AddTeacher} />
          <Route path="/admin/oldStudent" component={OldStudent} />
          <Route path="/admin/viewAttendence" component={ViewAttendence} />
          <Route path="/admin/viewTeacher" component={ViewTeacher} />
          <Route path="/admin/addClassTeacher" component={AddClassTeacher} />
          <Route path="/admin/viewClassTeacher" component={ViewClassTeacher} />
          <Route path="/admin/addPrincipal" component={AddPrincipal} />
          <Route path="/admin/viewPrincipal" component={ViewPrincipal} />
          <Route path="/admin/addSubject" component={AddSubject} />
          <Route path="/admin/viewSubject" component={ViewSubject} />
          <Route path="/admin/addStandardSubject" component={AddStandardSubject} />
          <Route path="/admin/addSubjectTeacher" component={AddSubjectTeacher} />
          <Route path="/admin/addTimeTableSetting" component={AddTimeTableSetting} />
          <Route path="/admin/viewTimeTableSetting" component={ViewTimeTableSetting} />
          <Route path="/admin/addTimeTable" component={AddTimeTable} />
          <Route path="/admin/addExam" component={AddExam} />
          <Route path="/admin/viewExam" component={ViewExam} />
          <Route path="/admin/addExamTimeTable" component={AddExamTimeTable} />
          <Route path="/admin/addResult" component={AddResult} />
          <Route path="/admin/addResultManually" component={AddResultManually} />
          <Route path="/admin/addQuePaper" component={AddQuePaper} />
          <Route path="/admin/addStandard" component={AddStandard} />
          <Route path="/admin/viewStandard" component={ViewStandard} />
          <Route path="/admin/addDivision" component={AddDivision} />
          <Route path="/admin/viewDivision" component={ViewDivision} />
          <Route path="/admin/addClass" component={AddClass} />
          <Route path="/admin/viewClass" component={ViewClass} />
          <Route path="/admin/addEvent" component={AddEvent} />
          <Route path="/admin/viewEvent" component={ViewEvent} />
          <Route path="/admin/viewFeedback" component={ViewFeedback} />
          <Route path="/admin/addMedium" component={AddMedium} />
          <Route path="/admin/viewMedium" component={ViewMedium} />
          <Route path="/admin/viewEngMedTeacher" component={ViewEngMedTeacher} />
          <Route path="/admin/viewGujMedTeacher" component={ViewGujMedTeacher} />
          <Route path="/admin/viewPrincipalLoginData" component={ViewPrincipalLoginData} />
        
        <Route path="/student" exact component={studentIndex} />
        <Route path="/student/viewTeacherList" exact component={viewTeacherList} />
        <Route path="/student/viewRemarkList" exact component={viewRemarkList} />
        <Route path="/student/viewNoticeList" exact component={viewNoticeList} />

        <Route path="/teacher" exact component={teacherIndex} />

        <Route path="/principal" exact component={principalIndex} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

