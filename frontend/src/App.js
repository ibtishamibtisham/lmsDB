import logo from "./logo.svg";
import { Signup } from "./components/Signup";
import "./App.css";
import { auth } from "./firebase";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/signin";
import { Admin } from "./components/Admin";
import { Dashboard } from "./components/Dashboard";
import { Lectures } from "./components/lectures";
import { Assignments } from "./components/assignment";
import { Sample } from "./components/sample";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createlecture" element={<Lectures />} />
        <Route path="/createassignments" element={<Assignments />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </div>
  );
}

export default App;
