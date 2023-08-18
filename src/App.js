import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { NoPage } from "./NoPage";
import Contacts from "./Contacts";
import { NavBar } from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Employees } from "./Employees";
import {EmployeeDetails} from "./EmployeeDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/employees" element={<Employees />}>
          <Route path="/employees/:id" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
