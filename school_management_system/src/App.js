import logo from "./logo.svg";
import "./App.css";
import Index from "./admin";
import AddStudentManually from "./admin/addStudentManually";
import AddStudent from "./admin/addStudent";
import ViewStudent from "./admin/viewStudent";
import ViewRemark from "./admin/viewRemark";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/addStudentManually" component={AddStudentManually} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/viewStudent" component={ViewStudent} />
        <Route path="/viewRemark" component={ViewRemark} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
