import FooterBar from "./components/Footer/FooterBar";
import TopHeader from "./components/Header/TopHeader";
// import Intro from "./components/HomePage/Intro";
import "./App.css";
import Contact from "./components/ContactPage/Contact";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <FooterBar />
      {/* <Intro /> */}
      <Contact />
    </div>
  );
}

export default App;
