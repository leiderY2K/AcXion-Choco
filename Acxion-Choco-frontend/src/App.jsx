import './index.css';
import About from "./Components/About.jsx";
import Allies from "./Components/Allies.jsx";
import Contact from "./Components/Contact.jsx";
import History from "./Components/History.jsx";
import Home from "./Components/Home.jsx";
import Register from "./Components/Register.jsx";
import { Route, Routes } from "react-router-dom";
import Icons from "./Components/Icons.jsx";
import Nav from "./Components/Nav.jsx";
import Courses from './Components/Courses.jsx';
import Statistics from './Components/Statistics';
import AddCourse from './Components/AddCourse';
import Details from './Components/Details';


function App() {
    return (
        <>
            <div >
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/allies" element={<Allies />} />
                    <Route path="/icons" element={<Icons />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/addCourse" element={<AddCourse />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </div>
        </>
    )
}

export default App
