import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      {/* <Work /> */}
      <Footer />
    </div>
  );
}

export default App;
