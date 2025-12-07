// src/App.jsx
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Whyus from "./components/Whyus";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar dima lfo9 */}
      <Navbar />
      <div id="home">
        <Home />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="whyus">
        <Whyus />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
