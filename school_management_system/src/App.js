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
import viewTimeTable from "./admin/viewTimeTable";
import AddExam from "./admin/addExam";
import ViewExam from "./admin/viewExam";
import AddExamTimeTable from "./admin/addExamTimeTable";
import viewExamTimeTable from "./admin/viewExamTimeTable";
import AddResult from "./admin/addResult";
import AddResultManually from "./admin/addResultManually";
import AddQuePaper from "./admin/addQuePaper";
import ViewQuePaper from "./admin/viewQuePaper";
import viewPaperImage from "./admin/viewPaperImage"
import AddStandard from "./admin/addStandard";
import ViewStandard from "./admin/viewStandard";
import AddDivision from "./admin/addDivision";
import ViewDivision from "./admin/viewDivision";
import AddClass from "./admin/addClass";
import ViewClass from "./admin/viewClass";
import AddEvent from "./admin/addEvent";
import viewEventImage from "./admin/viewEventImage";
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
import viewTimeTableList from "./student/viewTimeTableList";
import viewQuePaperList from "./student/viewQuePaperList";
import viewquePaperImage from "./student/viewquepaperImage";
import viewStudentProfile from "./student/viewStudentProfile";
import AddFeedback from "./student/addFeedback";
import AddLeaveRequest from "./student/addLeaveRequest";
import viewLeaveRequestList from "./student/viewLeaveRequest";
import viewEventList from "./student/viewEventList";
import viewEventImageList from "./student/viewEventImageList";
import viewAttendanceList from "./student/viewAttendanceList";
import viewExamttList from "./student/viewExamttList";

//--- TEACHER URLS ---
import teacherIndex from "./teacher";
import viewTeacherProfile from "./teacher/viewTeacherProfile";
import teacherViewRemark from "./teacher/viewRenark";
import teacherAddRemark from "./teacher/addRemark";
import teacherViewNotice from "./teacher/viewNotice";
import viewAllTimeTable from "./teacher/viewTimeTable";
import viewMyTimeTable from "./teacher/viewMyTimeTable";
import teacherViewExamTt from "./teacher/viewExamTimeTable";
import teacherTakeAttendance from "./teacher/takeAttendance";
import teacherViewResult from "./teacher/viewResult";
import teacherViewQuePaper from "./teacher/viewQuestionPaper";
import teacherViewEvent from "./teacher/viewEvent";
import teacherGiveFeedback from "./teacher/giveFeedback";
import teacherAddLeaveRequest from "./teacher/addLeaveRequest";
import teacherViewLeaveRequest from "./teacher/viewLeaveRequest";

//--- PRINCIPAL URLS ---
import principalIndex from "./principal";
import viewPrincipalProfile from "./principal/viewPrincipalProfile";
import addRemarkStud from "./principal/addRemarkStud";
import leaveRequest from "./principal/leaveRequest";
import addNotice from "./principal/addNotice";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>

      <Switch>

        <Route path="/" exact component={Login} />

        <Route path="/admin" exact component={Index} />
        <Route path="/admin/addStudentManually" component={AddStudentManually} />
        <Route path="/admin/edit-student/:id" component={AddStudentManually}></Route>
        <Route path="/admin/addStudent" component={AddStudent} />
        <Route path="/admin/viewStudent" component={ViewStudent} />
        <Route path="/admin/ViewStandardCard" component={ViewStandardCard} />
        <Route path="/admin/viewRemark" component={ViewRemark} />
        <Route path="/admin/addTeacher" component={AddTeacher} />
        <Route path="/admin/edit-teacher/:id" component={AddTeacher}></Route>
        <Route path="/admin/oldStudent" component={OldStudent} />
        <Route path="/admin/viewAttendence" component={ViewAttendence} />
        <Route path="/admin/viewTeacher" component={ViewTeacher} />
        <Route path="/admin/addClassTeacher" component={AddClassTeacher} />
        <Route path="/admin/edit-classTeacher/:id" component={AddClassTeacher}></Route>
        <Route path="/admin/viewClassTeacher" component={ViewClassTeacher} />
        <Route path="/admin/addPrincipal" component={AddPrincipal} />
        <Route path="/admin/viewPrincipal" component={ViewPrincipal} />
        <Route path="/admin/addSubject" component={AddSubject} />
        <Route path="/admin/viewSubject" component={ViewSubject} />
        <Route path="/admin/addStandardSubject" component={AddStandardSubject} />
        <Route path="/admin/addSubjectTeacher" component={AddSubjectTeacher} />
        <Route path="/admin/addTimeTableSetting" component={AddTimeTableSetting} />
        <Route path="/admin/edit-timeTableSetting/:id" component={AddTimeTableSetting}></Route>
        <Route path="/admin/viewTimeTableSetting" component={ViewTimeTableSetting} />
        <Route path="/admin/addTimeTable" component={AddTimeTable} />
        <Route path="/admin/edit-timetable/:id" component={AddTimeTable}></Route>
        <Route path="/admin/viewTimeTable" component={viewTimeTable} />
        <Route path="/admin/addExam" component={AddExam} />
        <Route path="/admin/edit-exam/:id" component={AddExam}></Route>
        <Route path="/admin/viewExam" component={ViewExam} />
        <Route path="/admin/addExamTimeTable" component={AddExamTimeTable} />
        <Route path="/admin/viewExamTimeTable" component={viewExamTimeTable} />
        <Route path="/admin/addResult" component={AddResult} />
        <Route path="/admin/addResultManually" component={AddResultManually} />
        <Route path="/admin/addQuePaper" component={AddQuePaper} />
        <Route path="/admin/edit-quepaper/:id" component={AddQuePaper}></Route>
        <Route path="/admin/viewQuePaper" component={ViewQuePaper} />
        <Route path="/admin/edit-quePaperImage/:id" exact component={viewPaperImage} />
        <Route path="/admin/addStandard" component={AddStandard} />
        <Route path="/admin/viewStandard" component={ViewStandard} />
        <Route path="/admin/addDivision" component={AddDivision} />
        <Route path="/admin/viewDivision" component={ViewDivision} />
        <Route path="/admin/addClass" component={AddClass} />
        <Route path="/admin/viewClass" component={ViewClass} />
        <Route path="/admin/addEvent" component={AddEvent} />
        <Route path="/admin/edit-event/:id" component={AddEvent}></Route>
        <Route path="/admin/edit-eventImage/:id" exact component={viewEventImage} />
        <Route path="/admin/viewEvent" component={ViewEvent} />
        <Route path="/admin/viewFeedback" component={ViewFeedback} />
        <Route path="/admin/addMedium" component={AddMedium} />
        <Route path="/admin/viewMedium" component={ViewMedium} />
        <Route path="/admin/viewEngMedTeacher" component={ViewEngMedTeacher} />
        <Route path="/admin/viewGujMedTeacher" component={ViewGujMedTeacher} />
        <Route path="/admin/viewPrincipalLoginData" component={ViewPrincipalLoginData} />

        <Route path="/student" exact component={studentIndex} />
        <Route path="/student/viewTeacherList" component={viewTeacherList} />
        <Route path="/student/viewRemarkList" component={viewRemarkList} />
        <Route path="/student/viewNoticeList" component={viewNoticeList} />
        <Route path="/student/viewTimeTableList" component={viewTimeTableList} />
        <Route path="/student/viewQuestionPaperList" component={viewQuePaperList} />
        <Route path="/student/viewquePaperImage/:id" component={viewquePaperImage} />
        <Route path="/student/viewStudentProfile" component={viewStudentProfile} />
        <Route path="/student/addFeedback" component={AddFeedback} />
        <Route path="/student/addLeaveRequest" component={AddLeaveRequest} />
        <Route path="/student/viewLeaveRequest" component={viewLeaveRequestList} />
        <Route path="/student/viewEventList" component={viewEventList} />
        <Route path="/student/viewEventImage/:id" component={viewEventImageList} />
        <Route path="/student/viewAttendanceList" component={viewAttendanceList} />
        <Route path="/student/viewExamttList" component={viewExamttList} />

        <Route path="/teacher" exact component={teacherIndex} />
        <Route path="/teacher/viewProfile" component={viewTeacherProfile} />
        <Route path="/teacher/viewRemark" component={teacherViewRemark} />
        <Route path="/teacher/addRemark" component={teacherAddRemark} />
        <Route path="/teacher/viewNotice" component={teacherViewNotice} />
        <Route path="/teacher/viewTimeTable" component={viewAllTimeTable} />
        <Route path="/teacher/viewMyTimeTable" component={viewMyTimeTable} />
        <Route path="/teacher/viewExamTimeTable" component={teacherViewExamTt} />
        <Route path="/teacher/takeAttendance" component={teacherTakeAttendance} />
        <Route path="/teacher/viewResult" component={teacherViewResult} />
        <Route path="/teacher/viewQuestionPaper" component={teacherViewQuePaper} />
        <Route path="/teacher/viewEvent" component={teacherViewEvent} />
        <Route path="/teacher/giveFeedback" component={teacherGiveFeedback} />
        <Route path="/teacher/addLeaveRequest" component={teacherAddLeaveRequest} />
        <Route path="/teacher/viewLeaveRequest" component={teacherViewLeaveRequest} />

        <Route path="/principal" exact component={principalIndex} />
        <Route path="/principal/viewProfile" component={viewPrincipalProfile} />
        <Route path="/principal/addRemark" component={addRemarkStud} />
        <Route path="/principal/viewLeaveRequest" component={leaveRequest} />
        <Route path="/principal/addNotice" component={addNotice} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

