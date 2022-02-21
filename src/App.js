import FooterBar from "./components/Footer/FooterBar";
import TopHeader from "./components/Header/TopHeader";
import Intro from "./components/HomePage/Intro";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <FooterBar />
      <Intro />
    </div>
  );
}

export default App;
