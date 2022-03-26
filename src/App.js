import FooterBar from "./components/Footer/FooterBar";
import TopHeader from "./components/Header/TopHeader";
import Intro from "./components/HomePage/Intro";
import Contact from "./components/ContactPage/Contact";
import About from "./components/AboutPage/About";
import Projects from "./components/Projectss/Projects";
import Resume from "./components/ResumePage/Resume";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader />
        <FooterBar />
        <Routes>
          <Route exact path="/" element={<Intro />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
