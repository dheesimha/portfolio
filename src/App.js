import FooterBar from "./components/Footer/FooterBar";
import TopHeader from "./components/Header/TopHeader";
import Intro from "./components/HomePage/Intro";
import Contact from "./components/ContactPage/Contact";
import About from "./components/AboutPage/About";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { InterestsRounded } from "@mui/icons-material";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
