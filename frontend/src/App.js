import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/nav';
import Home from './components/home';
import StudentAdmissionForm from "./components/student/admission";
import Viewallstudent from './components/student/viewstudent';
import Addclass from './components/student/addclass';
import Viewallclass from './components/student/viewclass';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addstudent" element={<StudentAdmissionForm />} />
                <Route path="/viewallstudent" element={<Viewallstudent />} />
                <Route path="/addclass" element={<Addclass />} />
                <Route path="/viewallclass" element={<Viewallclass />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </Router>
    );
};

export default App;