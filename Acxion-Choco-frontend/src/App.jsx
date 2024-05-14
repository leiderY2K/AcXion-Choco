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
//import Algoritmos from './Components/cours/Algoritmos.jsx';
//import Algoritmos from '/src/Components/cours/algoritmos.jsx';

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
                </Routes>
            </div>
        </>
    )
}

export default App
